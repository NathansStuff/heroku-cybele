import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/home';
import Animal from '../pages/animal/animal';
import SearchPage from '../pages/search/search';
import SignInAndSignUp from '../pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from '../firebase/firebase';
import NavBar from '../components/navbar/navbar';
import { useHistory } from 'react-router-dom';
import Footer from '../components/footer/footer';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      userAuth: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
            userAuth: userAuth,
          });
        });
      }
    });
  }

  componentWillUnsubscribe() {
    this.unsubscribeFromAuth();
    let history = useHistory();
    history.push('/');
  }

  render() {
    return (
      <div>
        <Fragment>
          <NavBar currentUser={this.state.currentUser} />
          <BrowserRouter>
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              {this.state.currentUser ? (
                <Fragment>
                  <Route
                    exact
                    path='/search'
                    component={() => (
                      <SearchPage
                        displayName={this.state.currentUser.displayName}
                        photoUrl={this.state.userAuth.photoURL}
                        email={this.state.userAuth.email}
                      />
                    )}
                  />
                  <Route
                    exact
                    path='/signin'
                    component={() => (
                      <SignInAndSignUp currentUser={this.state.currentUser} />
                    )}
                  />
                  <Route exact path='/animal/:id' component={Animal} />
                </Fragment>
              ) : (
                <Fragment>
                  <Route
                    exact
                    path='/signin'
                    component={SignInAndSignUp}
                    currentUser={this.state.currentUser}
                  />
                </Fragment>
              )}
            </Switch>
          </BrowserRouter>
          <Footer />
        </Fragment>
      </div>
    );
  }
}
