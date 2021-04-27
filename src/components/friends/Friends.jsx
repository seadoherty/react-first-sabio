import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FriendCard from "./FriendCard";
import friendService from "../../services/friends.js";

class Friends extends Component {
  state = {
    friends: [],
  };

  onClickHandler = (e) => {
    e.preventDefault();
    friendService
      .all()
      .then(this.onGetAllFriendsSuccess)
      .catch(this.onGetAllFriendsError);
  };

  onGetAllFriendsSuccess = (res) => {
    console.log({ friends: res.data.item.pagedItems });

    let newValue = res.data.item.pagedItems;

    this.setState(() => {
      let friends = [...this.state.friends];
      friends.push(newValue);
      console.log(friends);
      return friends;
    });
  };

  onGetAllFriendsError = (err) => console.log({ error: err });

  testList = [
    {
      title: "oldFriendList1 title",
      bio: "oldFriendList1 bio",
      summary: "oldFriendList1 summary",
      headline: "oldFriendList1 headline",
      slug: "oldFriendList1 slug",
      status: "oldFriendList1 status",
      primaryImage: "https://api.remotebootcamp.dev/apihelp/rbclogo.png",
    },
    {
      title: "oldFriendList2 title",
      bio: "oldFriendList2 bio",
      summary: "oldFriendList2 summary",
      headline: "oldFriendList2 headline",
      slug: "oldFriendList2 slug",
      status: "oldFriendList2 status",
      primaryImage: "https://api.remotebootcamp.dev/apihelp/rbclogo.png",
    },
  ];

  newFriendList = this.testList.map(this.mapFriends);

  mapFriends = (oldFriendList) => {
    const newFriend = {
      title: oldFriendList.title,
      bio: oldFriendList.bio,
      summary: oldFriendList.summary,
      headline: oldFriendList.headline,
      slug: oldFriendList.slug,
      status: oldFriendList.status,
      primaryImage: oldFriendList.primaryImage,
    };
    console.log(newFriend);

    return newFriend;
  };

  newTest = {
    id: "Test Id1",
    title: "Test Title",
    bio: "Test Bio",
    primaryImage: "https://api.remotebootcamp.dev/apihelp/rbclogo.png",
  };

  render() {
    return (
      <>
        <h1>
          Friends{" "}
          <NavLink to="/friends/add" className="btn btn-primary">
            {" "}
            + Friend{" "}
          </NavLink>
        </h1>
        <div>
          <button onClick={this.onClickHandler}>Get Friends</button>
        </div>
        <FriendCard friend={this.newTest} />
      </>
    );
  }
}

export default Friends;
