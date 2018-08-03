import React from "react";

function House(props) {
  let {
    property_name,
    address,
    city,
    state,
    zip,
    id,

  } = props.house;
  return (
    <div>
  
      <p>{property_name}</p>
      <p>{address}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{zip}</p>
      
      <button onClick={() => props.deleteHouse(id)}>Delete</button>
      <br />
    </div>
  );
}

export default House;
