import React from 'react';
import './displayCard.scss';

// Returns variables from props
// Done here because page loads before page fetches api data so will throw errors due to null references
function getData(props) {
  const name = props.attributes ? props.attributes.name : null;
  const age = props.attributes ? props.attributes.age : null;
  const breed = props.attributes ? props.attributes.breed : null;
  const hasMicrochip = props.attributes ? props.attributes.microchip_number : '';
  const microchip = hasMicrochip ? 'yes' : 'no';
  const HasMicrochipNumber = props.attributes
    ? props.attributes.microchip_number
    : null;
  const microchip_number = HasMicrochipNumber ? HasMicrochipNumber : '-';
  const image =
    `https://cybeleproject-bucket-dev.s3.us-east-2.amazonaws.com/${props.attributes.photo}`;
  return { name, image, age, breed, microchip, microchip_number };
}

const DisplayCard = props => {
  const data = getData(props);
  console.log(props);
  return (
    <div className='displayCard'>
      <div className='display-card-image'>
        <img src={data.image} alt={`image of ${data.name}`} />
      </div>

      <div className='display-card-info'>
        <div className='display-card-name'>
          <div>
            <p>Name:</p>
          </div>
          <div>
            <p>{data.name}</p>
          </div>
        </div>
        <div className='display-card-age'>
          <div>
            <p>Age:</p>
          </div>
          <div>
            <p>{data.age}</p>
          </div>
        </div>
        <div className='display-card-breed'>
          <div>
            <p>Breed:</p>
          </div>
          <div>
            <p>{data.breed}</p>
          </div>
        </div>
        <div className='display-card-microchip'>
          <div>
            <p>Microchip:</p>
          </div>
          <div>
            <p>{data.microchip}</p>
          </div>
        </div>
        <div className='display-card-microchip-number'>
          <div>
            <p>Microchip number:</p>
          </div>
          <div>
            <p>{data.microchip_number}</p>
          </div>
        </div>
        <div className='display-card-buttons'>
          <div>
            <p>
              <button onClick={props.edit}>Edit</button>
            </p>
          </div>
          <div>
            <p>
              <button onClick={props.handleDestroy.bind(this, props.id)}>
                Delete
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
