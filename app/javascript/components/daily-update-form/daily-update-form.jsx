import React from 'react';

const DailyUpdateForm = props => {
  console.log(props);
  if (!props.attributes) {
    return <div></div>;
  }
  return (
    <div className='daily-wrapper'>
      <div>
        <h3>New Update for {}</h3>
        <br></br>
      </div>
      <form onSubmit={props.handleSubmit}>
        <div className='daily-field'>
          <input
            id='update-number'
            type='number'
            name='weight'
            placeholder='Weight'
            onChange={props.handleChange}
            value={props.daily_update.weight}
          ></input>
          <br></br>
        </div>
        <div className='daily-field'>
        <label>Ate Food</label>
          <input className = 'checkbox'
            type='checkbox'
            name='ate_food'
            onChange={props.handleChange}
            value={props.daily_update.ate_food}
            id='ate_food'
          ></input>
        </div>
        <div className='daily-field'>
        <label>Drank Water</label>
          <input className = 'checkbox'
            type='checkbox'
            name='drank_water'
            onChange={props.handleChange}
            value={props.daily_update.drank_water}
            id='drank_water'
          ></input>
        </div>
        <div className='daily-field'>
          <br></br>
          <label>Notes</label>
          <textarea
            id='update-notes'
            name='notes'
            rows='10'
            cols='50'
            onChange={props.handleChange}
            value={props.daily_update.notes}
          ></textarea>
        </div>
        <div>
          <button className ="daily-field" type='submit' id='update-submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DailyUpdateForm;

// <div className='daily-field'>
// <label>Upload Photo</label>
// <input type='file' name='photo' onChange={props.handleChange}></input>
// </div>
