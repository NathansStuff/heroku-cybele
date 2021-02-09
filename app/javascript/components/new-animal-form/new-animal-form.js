import React from 'react';
import Dialog from '@material-ui/core/Dialog';

const NewAnimalForm = props => {
  if (!props.open) {
    return <div></div>;
  }
  return (
    <Dialog open={props.open}>
      <div className='new-animal-wrapper'>
        <div className='new-animal-form'>
          <div className='new-animal-title'>
            <div></div>
            <h3>New Animal</h3>
            <button className='closeButton' onClick={props.handleClose}>X</button>
          </div>
          <form onSubmit={props.handleSubmit}>
            <div className='new-animal-field'>
              <input
                name='name'
                id='new-animal-name'
                placeholder='Name'
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <input
                name='age'
                id='new-animal-age'
                type='number'
                placeholder='Age'
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <input
                name='breed'
                id='new-animal-breed'
                placeholder='Breed'
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <input
                name='microchip_number'
                id='new-animal-microchip-number'
                type='number'
                placeholder='Microchip Number'
                onChange={props.handleChange}
              ></input>
            </div>
            <div className='new-animal-field'>
              <textarea
                name='notes'
                id='new-animal-notes'
                rows='10'
                cols='50'
                placeholder='Notes: 
            
            eg. Medication, Desexed date'
                onChange={props.handleChange}
              ></textarea>
            </div>
            <div>
              <button type='submit' id='new-animal-submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default NewAnimalForm;
