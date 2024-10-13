import React from "react";

export default function Card(props) {
  return (
    <div className="w-11/12 mx-auto flex space-y-4">
      <div className="card bg-primary text-primary-content w-96 felx ">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.dec}</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now-{props.id}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
