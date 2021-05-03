import React from "react";

const FriendCard = (props) => {
  const cardStyle = {
    width: "22rem",
  };


  return (
    <div className="card shadow m-2" style={cardStyle}>
      <img className="card-img-top" src={props.friend.primaryImage.imageUrl} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title text-center">{props.friend.title}</h5>
        <p className="card-text text-center">{props.friend.summary}</p>
        <div className="row d-flex justify-content-center">
          <button
            onClick={()=>props.handleEditClick(props.friend)}
            className="btn btn-primary m-2"
            data-friend-id={props.friend.id}
          >
            Edit
          </button>
          <button
            onClick={props.handleDeleteClick}
            className="btn btn-danger m-2"
            data-friend-id={props.friend.id}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FriendCard);
