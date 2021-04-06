import React from "react";

export default function AllMakes(props) {
  const { makes } = props;

  return (
    <div>
      <h3>All Makes</h3>
      {makes && makes.map((make, index) => <p key={index}>{make.name}</p>)}
    </div>
  );
}
