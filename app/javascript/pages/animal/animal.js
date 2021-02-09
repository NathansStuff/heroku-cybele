import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import DisplayCard from '../../components/display-card/displayCard';
import DailyUpdateForm from '../../components/daily-update-form/daily-update-form';
import DailyHistory from '../../components/daily-history/daily-history';
import './animal.css';
import { useHistory } from 'react-router-dom';
import EditAnimalForm from '../../components/edit-animal-form/edit-animal-form';
import config from '../../aws/config';
import S3FileUpload from 'react-s3';
require('dotenv').config()


const Animal = props => {
  // ================================================================================================
  // EDIT ANIMAL
  // ================================================================================================
  const [openEditAnimal, setEditAnimal] = useState(false);
  const [editAnimalForm, setEditAnimalForm] = useState({});

  const handleEditAnimalOpen = () => {
    setEditAnimal(true);
  };

  // takes input to update the newAnimal form
  const handleEditAnimalFormChange = e => {
    e.preventDefault();
    setEditAnimalForm(
      Object.assign({}, editAnimalForm, { [e.target.name]: e.target.value })
    );
  };

  // set the file to uploaded file
  const [image, setImage] = useState(null);
  const handleFile = e => {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    setImage(file);
    const filename = file.name.split(/(\\|\/)/g).pop().replace(' ', '+'); // formats the filename the same way aws does
    setEditAnimalForm(Object.assign({}, editAnimalForm, { photo: filename }));
  };

  // posts data to api backend
  const handleEditAnimalFormSubmit = e => {
    e.preventDefault();

    if (image) {
      // aws settings
      S3FileUpload.uploadFile(image, config)
        .then(() => {
          submitEditAnimalForm(); // submit the form to backend after creating aws image
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      submitEditAnimalForm(); // submit the form to backend without doing aws stuff if there is no image
    }
  };

  const submitEditAnimalForm = () => {
    console.log('editing');
    const id = props.match.params.id;
    editAnimalForm.microchip_number === ''
      ? setEditAnimalForm({ microchip: false })
      : setEditAnimalForm({ microchip: true });
    axios
      .put(`/api/v1/animals/${id}`, { ...editAnimalForm })
      .then(data => {
        history.push('/');
      })
      .then(data => {
        history.push(`/animal/${id}`);
      })
      .catch(data => console.log('Error', data));
  };

  const handleEditAnimalClose = e => {
    e.preventDefault();
    setEditAnimal(false);
  };

  // ================================================================================================
  // DELETE ANIMAL
  // ================================================================================================
  let history = useHistory();

  // posts destroy to animal controller
  const handleAnimalDestroy = (id, e) => {
    e.preventDefault();

    axios
      .delete(`/api/v1/animals/${id}`)
      .then(data => {
        history.push('/');
      })
      .catch(data => console.log('Error', data));
  };

  // ================================================================================================
  // DAILY UPDATE FORM
  // ================================================================================================
  const [daily_updates, setDailyUpdates] = useState({});
  const [daily_update, setDailyUpdate] = useState({
    weight: '',
    ate_food: false,
    drank_water: false,
    notes: '',
  });
  // takes input to update the dailyupdate form
  const handleChange = e => {
    if (e.target.name === 'ate_food') {
      if (daily_update.ate_food == false) {
        setDailyUpdate(Object.assign({}, daily_update, { ate_food: true }));
      } else {
        setDailyUpdate(Object.assign({}, daily_update, { ate_food: false }));
      }
    } else if (e.target.name === 'drank_water') {
      if (daily_update.drank_water == false) {
        setDailyUpdate(Object.assign({}, daily_update, { drank_water: true }));
      } else {
        setDailyUpdate(Object.assign({}, daily_update, { drank_water: false }));
      }
    } else {
      setDailyUpdate(
        Object.assign({}, daily_update, { [e.target.name]: e.target.value })
      );
    }
  };

  // posts create to daily updates
  const handleSubmit = e => {
    e.preventDefault();

    const animal_id = props.match.params.id;

    axios
      .post('/api/v1/daily_updates', { ...daily_update, animal_id })
      .then(resp => {
        setDailyUpdates([...daily_updates, resp.data.data]);
        setDailyUpdate({
          weight: '',
          ate_food: false,
          drank_water: false,
          notes: '',
        });
      })
      .catch(data => console.log('Error', data));

    var ate_food = document.getElementById('ate_food');
    var drank_water = document.getElementById('drank_water');
    ate_food.checked = false;
    drank_water.checked = false;
  };

  // daily update destroyer
  const handleDestroy = (id, e) => {
    e.preventDefault();
    console.log(id);
    axios
      .delete(`/api/v1/daily_updates/${id}`)
      .then(data => {
        const included = [...daily_updates];
        const index = included.findIndex(data => data.id == id);
        included.splice(index, 1);
        setDailyUpdates(included);
      })
      // .then(response => this.props.history.push('/search'))
      .catch(data => console.log('Error', data));
  };
  // ================================================================================================
  // SHOW ANIMAL
  // SET ANIMAL
  // ================================================================================================
  const [id, setId] = useState({});
  const [animal, setAnimal] = useState({});
  const [loaded, setLoaded] = useState(false);

  // Get a specific animal from the api based on the id passed in via props
  useEffect(() => {
    const id = props.match.params.id;
    const url = `/api/v1/animals/${id}`;
    setId(id);
    console.log(process.env.BUCKET)

    axios
      .get(url)
      .then(resp => {
        setAnimal(resp.data.data.attributes);
        setDailyUpdates(resp.data.included);
        setLoaded(true);
        setEditAnimalForm(resp.data.data.attributes);
      })

      .catch(data => {
        console.log('error', data);
      });
  }, []);
  // ================================================================================================
  // DISPLAY
  // ================================================================================================
  return (
    <div>
      {loaded && (
        <Fragment>
          <EditAnimalForm
            open={openEditAnimal}
            handleClose={handleEditAnimalClose}
            handleChange={handleEditAnimalFormChange}
            handleSubmit={handleEditAnimalFormSubmit}
            animal={editAnimalForm}
            handleFile={handleFile}
          />
          <div className='show-top'>
            <DisplayCard
              attributes={animal}
              handleDestroy={handleAnimalDestroy}
              id={id}
              edit={handleEditAnimalOpen}
            />
            <DailyUpdateForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={animal}
              daily_update={daily_update}
            />
          </div>

          <div className='show-bot'>
            <DailyHistory
              attributes={daily_updates}
              handleDestroy={handleDestroy}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Animal;
