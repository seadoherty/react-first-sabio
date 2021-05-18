import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FriendCard from "./FriendCard";
import friendService from "../../services/friends.js";
import Pagination from "rc-pagination";
import 'rc-pagination/assets/index.css';

class Friends extends Component {
  state = {    
      pageIndex: 0,
      query: "",
      pageSize: 4,
      total: 0,  
  };

  componentDidMount() {
    this.onCallFriends();
  }

  onCallFriends=()=>{
    friendService
    .all(this.state.pageIndex,this.state.pageSize)
    .then(this.onGetAllFriendsSuccess)
    .catch(this.onGetAllFriendsError);
  }

  onGetAllFriendsSuccess = (myFriends) => {
    console.log(myFriends)
    const res = myFriends.data.item;

    this.setState(() => {
      return {
        mappedFriends: res.pagedItems.map(this.mapFriends),
        total: res.totalCount,
      };
    });
  };

  onGetAllFriendsError = (err) => console.log({ error: err });

  onDeleteClick = (e) => {
    const friendId = e.currentTarget.dataset.friendId;

    console.log("inside onDeleteClick",typeof friendId,friendId)

    const passIdToSuccessHandler = this.onDeleteSuccess(parseInt(friendId));


    friendService
      .remove(friendId)
      .then(passIdToSuccessHandler)
      .catch(this.onDeleteError);
  };

  onDeleteSuccess = (deletedFriendId) => {
    console.log("inside onDeleteSuccess",deletedFriendId);

    this.setState((prevState) => {
      const indexOfFriend = prevState.mappedFriends.findIndex(
        (singleFriend) => singleFriend.props.friend.id === deletedFriendId
      );

      const updatedFriend = [...prevState.mappedFriends];

      if (indexOfFriend >= 0) {
        updatedFriend.splice(indexOfFriend, 1);
      }

      return {
        mappedFriends: updatedFriend,
      };
    });
  };

  onDeleteError = (err) => console.log({ error: err });

  onEditClick = (oneFriend) => {
    
    this.props.history.push(`/friends/${oneFriend.id}/edit`, {
      type: "EDIT_FRIEND",
      payload: oneFriend,
    });
  };

  mapFriends = (oneFriend) => {
    return (
      <FriendCard
        key={oneFriend.id}
        friend={oneFriend}
        handleDeleteClick={this.onDeleteClick}
        handleEditClick={this.onEditClick}
      />
    );
  };

  onSearchChangeHandler = (e) => {
    let newValue = e.currentTarget.value;

    this.setState(() => {
      return { query: newValue };
    });
  };

  onSearchSubmitHandler = (e) => {
    e.preventDefault();

    friendService
      .search(this.state.query)
      .then(this.onSearchSuccess)
      .catch(this.onSearchError);
  };

  onSearchSuccess = (res) => {
    console.log(res.data.item.pagedItems);

    this.setState(() => {
      return {
        mappedFriends: res.data.item.pagedItems.map(this.mapFriends),
      };
    });
  };
  onSearchError = (err) => console.log({ error: err });
  
  onPaginationChange = (page) => {

    this.setState({
      pageIndex: page-1,
    }, this.onCallFriends);
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center m-4 bg-light rounded shadow p-1">
          <h1 className="m-4">
            Friends{" "}
            <NavLink to="/friends/add" className="btn btn-primary">
              {" "}
              + Friend{" "}
            </NavLink>
          </h1>
          <form
            onSubmit={this.onSearchSubmitHandler}
            className="d-flex justify-content-between align-items-center mr-4"
          >
            <input
              className="d-flex col form-control"
              type="text"
              onChange={this.onSearchChangeHandler}
              placeholder="Search"
            />
            <input
              type="submit"
              className="btn btn-primary m-2"
              value="Search"
            />
          </form>
        </div>

        <div className="shadow rounded p-5 m-5">
          <div className="d-flex justify-content-center mx-auto">
            {this.state.mappedFriends}
          </div>
          <div className="d-flex flex-row-reverse">
            <Pagination
              onChange={this.onPaginationChange}
              current={this.state.pageIndex}
              total={this.state.total}
              pageSize={this.state.pageSize}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Friends;
