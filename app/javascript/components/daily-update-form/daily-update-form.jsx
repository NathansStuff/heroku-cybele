import React from 'react';

const DailyUpdateForm = props => {
  console.log(props);
  if (!props.attributes) {
    return <div></div>;
  }
  return (
    <div className='card'>
      <div className='card-body'>
      <div>
        <h3>New Update for {}</h3>
        <br></br>
      </div>
      <form onSubmit={props.handleSubmit}>
        <div className='form-group'>
          <input
            id='update-number'
            type='number'
            name='weight'
            className='input-group'
            placeholder='Weight'
            onChange={props.handleChange}
            value={props.daily_update.weight}
          ></input>
          <br></br>
        </div>

        <div className='form-check'>
          <input className = 'form-check-input'
            type='checkbox'
            name='ate_food'
            onChange={props.handleChange}
            value={props.daily_update.ate_food}
            id='ate_food'
          ></input>
          <label className='form-check-label'>Ate Food</label>
        </div>
        
        <div className='form-check'>
          <input className = 'form-check-input'
            type='checkbox'
            name='drank_water'
            onChange={props.handleChange}
            value={props.daily_update.drank_water}
            id='drank_water'
          ></input>
          <label className='form-check-label'>Drank Water</label>
        </div>
        <div className='form-group'>
          <br></br>
          <textarea
            id='update-notes'
            name='notes'
            rows='10'
            cols='50'
            placeholder='notes...'
            onChange={props.handleChange}
            value={props.daily_update.notes}
          ></textarea>
        </div>
        <div>
          <button className ="btn btn-primary" type='submit' id='update-submit'>Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default DailyUpdateForm;

// <div className='form-group'>
// <label>Upload Photo</label>
// <input type='file' name='photo' onChange={props.handleChange}></input>
// </div>
