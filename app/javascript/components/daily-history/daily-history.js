import React from 'react';

const DailyHistory = props => {
  const history = props.attributes;
  const list = props.attributes
    ? history.map(history => {
        const ate_food = history.attributes.ate_food ? '✅' : '❌';
        const drank_water =
          history.attributes.drank_water ? '✅' : '❌';
        return (
          <tbody>
          <tr>
            <td>{history.attributes.weight}</td>
            <td>{ate_food}</td>
            <td>{drank_water}</td>
            <td>{history.attributes.notes}</td>
            <td>
              <button className='btn btn-outline-' onClick={props.handleDestroy.bind(this, history.id)}>
                Delete
              </button>
            </td>
          </tr>
          </tbody>
        );
      })
    : null;

  return (
    
    
    
    <div>
      <table className='table bg-white table-striped'>
        <thead>
        <tr>

          <th scope='col'>Weight</th>
          <th scope='col'>Ate Food</th>
          <th scope='col'>Drank Water</th>
          <th scope='col'>Notes</th>

        </tr>
        </thead>
        <tbody>{list}</tbody>
       
      </table>
    </div>
  );
};

export default DailyHistory;