import React, { useState, useEffect, Fragment } from 'react';
import './search.scss';
import axios from 'axios';
import SearchCard from '../../components/search-card/search-card';
import NewAnimalForm from '../../components/new-animal-form/new-animal-form';
import { useHistory } from 'react-router-dom';
import S3FileUpload from 'react-s3';
import config from '../../aws/config';

const SearchPage = () => {
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
        console.log(resp.data.data)
      })
      .catch(resp => console.log(resp), [animals.length]);
  }, []);

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

  // set the file to uploaded file
  const [image, setImage] = useState(null);
  const handleFile = e => {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    setImage(file);
    const filename = file.name.split(/(\\|\/)/g).pop(); // removes /\ from file name
    setNewAnimal(Object.assign({}, newAnimal, { photo: filename })); 
  };

  // posts data to api backend
  const handleSubmit = async e => {
    e.preventDefault();

    if (image) {
      await S3FileUpload.uploadFile(image, config)
        .then(() => {
          submitNewAnimal(); // submit the form to backend after creating aws image
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      submitNewAnimal(); // submit the form to backend without doing aws stuff if there is no image
    }
  };

  // post the new animal form to the backend
  const submitNewAnimal = () => {
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
  return (
    <div className='search-wrapper'>
      <div className='left-panel'>
        <div className='left-panel-overview'>
          <img
            src='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            alt='profile-pic'
          />
          <h3>USER NAME</h3>
        </div>
        <div className='left-panel-writing'>NAME</div>
      </div>

      <div className='right-panel'>
        <div className='right-panel-header'>
          <button
            variant='outlined'
            color='primary'
            onClick={handleClickOpen}
            id='Addnew'
          >
            Add New
          </button>

          <input
            type='search'
            placeholder='search animals'
            onChange={e => onChange(e)}
          ></input>
        </div>
        <NewAnimalForm
          open={open}
          handleClose={handleClose}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleFile={handleFile}
        />
        <div className='right-panel-body'>{list}</div>
      </div>
    </div>
  );
};

export default SearchPage;
