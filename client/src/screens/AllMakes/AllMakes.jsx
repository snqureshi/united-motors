import React from "react";

export default function AllMakes(props) {
  const { makes } = props;
  return (
    <div>
      <h3>All Makes</h3>
      {makes.map((make) => (
        <p key={make.id}>{make.name}</p>
      ))}
    </div>
  );
}
