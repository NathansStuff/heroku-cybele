import React from 'react';

const DailyHistory = props => {
  const history = props.attributes;
  const list = props.attributes
    ? history.map(history => {
        const ate_food = history.attributes.ate_food ? '✅' : '❌';
        const drank_water =
          history.attributes.drank_water ? '✅' : '❌';
        return (
          <tr>
            <th>Date placeholder</th>
            <th>{history.attributes.weight}</th>
            <th>{ate_food}</th>
            <th>{drank_water}</th>
            <th>{history.attributes.notes}</th>
            <th>
              <button onClick={props.handleDestroy.bind(this, history.id)}>
                Delete
              </button>
            </th>
          </tr>
        );
      })
    : null;

  return (
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Ate Food</th>
          <th>Drank Water</th>
          <th>Notes</th>
          <th>Delete</th>
        </tr>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};

export default DailyHistory;