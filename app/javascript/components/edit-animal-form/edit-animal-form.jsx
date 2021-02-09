import React from 'react';
import Dialog from '@material-ui/core/Dialog';

const EditAnimalForm = props => {
  if (!props.open) {
    return <div></div>;
  }
  return (
    <Dialog open={props.open}>
      <div className='new-animal-wrapper'>
        <div className='new-animal-form'>
          <div className='new-animal-title'>
            <div></div>
            <h3>Edit Animal</h3>
            <button onClick={props.handleClose}>X</button>
          </div>
          <form onSubmit={props.handleSubmit}>
            <div className='new-animal-field'>
              <label>Name</label>
              <input
                name='name'
                value={props.animal.name}
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <label>Age</label>

              <input
                name='age'
                type='number'
                value={props.animal.age}
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <label>Breed</label>

              <input
                name='breed'
                value={props.animal.breed}
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <label>MicrochipNumber</label>

              <input
                name='microchip_number'
                type='number'
                value={props.animal.microchip_number}
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <label>Notes</label>

              <textarea
                name='notes'
                rows='10'
                cols='50'
                value={props.animal.notes}
                onChange={props.handleChange}
              ></textarea>
            </div>
            <div className='new-animal-field'>
            <input type='file' name='photo' onChange={props.handleFile} />
          </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default EditAnimalForm;
