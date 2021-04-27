import React from "react";

const FriendCard = (props) => {
  const cardStyle = {
    width: "22rem",
  };

  return (
    <div className="card shadow" style={cardStyle} key={props.friend.id}>
      <img
        className="card-img-top"
        src={props.friend.primaryImage}
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.friend.title}</h5>
        <p className="card-text">{props.friend.bio}</p>
        <div className="row d-flex justify-content-center">
          <a href="/" className="btn btn-primary m-2">
            Edit
          </a>
          <a href="/" className="btn btn-primary m-2">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
