import React from "react";

export default function AllModels(props) {
  const { models } = props;
  return (
    <div>
      <h3>All Models</h3>
      {models.map((model, index) => (
        <p key={index}>{model.name}</p>
      ))}
    </div>
  );
}
