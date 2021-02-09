import React from 'react';
import './search-card.scss';
import { useHistory } from 'react-router-dom';

const SearchCard = props => {
  let history = useHistory();
  console.log(props)

  const link = `/animal/${props.id}`;

  const onClick = () => {
    history.push(link);
  };

  return (
    <div className='search-card' onClick={onClick}>
      <p>{props.animal.attributes.name}</p>
      <img
        src={`https://cybeleproject-bucket-dev.s3.us-east-2.amazonaws.com/${props.animal.attributes.photo}`}
        alt='animal image'
      />
    </div>
  );
};

export default SearchCard;
