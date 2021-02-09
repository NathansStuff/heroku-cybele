import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/home';
import Animal from '../pages/animal/animal';
import SearchPage from '../pages/search/search';
import SignInAndSignUp from '../pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from '../firebase/firebase';
import NavBar from '../components/navbar/navbar';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  ubsubscribeFromAuth = null;

  componentDidMount() {
    this.ubsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnsubscribe() {
    this.unsubscribeFromAuth();
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
              <Route exact path='/animal/:id' component={Animal} />
              <Route exact path='/search' component={SearchPage} />
              <Route exact path='/signin' component={SignInAndSignUp} />
            </Switch>
          </BrowserRouter>
        </Fragment>
      </div>
    );
  }
}
