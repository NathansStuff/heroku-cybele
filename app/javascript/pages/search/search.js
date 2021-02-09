import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import SearchCard from '../../components/search-card/search-card';
import NewAnimalForm from '../../components/new-animal-form/new-animal-form';
import { useHistory } from 'react-router-dom';
import background from '../../../assets/images/aboutbackground.jpg';

const SearchPage = ({ displayName, photoUrl, email }) => {
  let history = useHistory(); // for browser navigation
  // =================================================================================
  // POPULATE ANIMALS
  // =================================================================================
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    axios
      .get('./api/v1/animals.json')
      .then(resp => {
        setAnimals(resp.data.data);
        console.log(photoUrl);
        console.log(
          '************************************************************************************************'
        );
      })
      .catch(resp => console.log(resp), [animals.length]);
  }, [displayName]);

  // =================================================================================
  // SEARCH BOX
  // =================================================================================
  const [searchField, setSearchField] = useState([]);

  const filteredAnimals = animals.filter(animal =>
    animal.attributes.name
      .toLowerCase()
      .includes(searchField.length > 0 ? searchField.toLowerCase() : '')
  );

  // The individual animal box, filtered by the search form
  const list = filteredAnimals.map(animal => {
    return <SearchCard animal={animal} id={animal.id} />;
  });

  const onChange = e => {
    setSearchField(e.target.value);
  };

  // =================================================================================
  // NEW ANIMAL FORM
  // =================================================================================
  const [newAnimal, setNewAnimal] = useState({
    name: '',
    age: '',
    breed: '',
    microchip: false,
    microchip_number: '',
    notes: '',
    photo: 'default_image.png',
  });

  // takes input to update the newAnimal form
  const handleChange = e => {
    e.preventDefault();
    setNewAnimal(
      Object.assign({}, newAnimal, { [e.target.name]: e.target.value })
    );
    console.log(newAnimal);
  };

  // posts data to api backend
  const handleSubmit = async e => {
    e.preventDefault();
    axios
      .post('/api/v1/animals', { ...newAnimal })
      .then(resp => {
        history.push(`/animal/${resp.data.data.id}`);
      })
      .catch(data => console.log('Error', data));
  };

  // =================================================================================
  // POPUP BOX (ANIMAL FORM)
  // =================================================================================
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = e => {
    e.preventDefault();
    setOpen(false);
  };

  // =================================================================================
  // RENDER
  // =================================================================================
  const styles = {
    main: {
      height: '100vh',
      width: '100vw',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${background})`,
    },
  };

  return (
    <main>
      <div className='search-wrapper container emp-profile'>
        <div className='row'>
          <div className='col-md-4 aboutme rounded'>
            <div className='profile-img  float-start mt-3 '>
              {photoUrl ? (
                <img
                  className=' img-fluid'
                  src={photoUrl}
                  alt='display photo'
                />
              ) : (
                <img
                  className=' img-fluid'
                  src='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
                  alt='default display photo'
                />
              )}

              <h5 className='display-5 mt-3 text-light'>{displayName}</h5>
              <div className='profile-work text-light'>{email}</div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='row mb-5'>
              <button
                className='btn btn-md  col text-light '
                onClick={handleClickOpen}
                id='Addnew'
              >
                Add new
              </button>
              <span className='search-bar col float-end text-light'>
                <input
                  type='search'
                  placeholder='search animals'
                  onChange={e => onChange(e)}
                ></input>
              </span>
            </div>
            <NewAnimalForm
              open={open}
              handleClose={handleClose}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <div className='row ml-3 container-fluid row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 text-white'>
              {list}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
