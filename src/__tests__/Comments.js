import React from "react";
import { mount, render, shallow } from "enzyme";
import Comments from "../components/Comments";
import SingleComment from "../components/SingleComment";

describe("Comments", () => {
  it("Fetch a comment", () => {
    const commentWrapper = mount(
      <Comments postId="lks334" currentPersona="Morgana" />
    );
    const mockItem = [
      {
        comment: "Morgana of Castle Camelot",
        id: "2287qw",
        postId: "lks334",
        author: "Morgana",
        date: "1/23/2018, 03:10:32 AM"
      }
    ];
    const mockery = JSON.stringify(mockItem);
    // console.log(mockery);
    localStorage.setItem("comments", mockery);
    commentWrapper.instance().setCommentsFromLocalStorage("lks334");
    expect(commentWrapper.state().comments[0].id).toEqual("2287qw");
  });

  it("Render list of comments", () => {
    const commentWrapper = mount(
      <Comments postId="qwe098" currentPersona="Esmeralda" />
    );
    const mockItem = [
      {
        comment: "Esmeralda of the streets of Paris",
        id: "117as",
        postId: "qwe098",
        author: "Esmeralda",
        date: "1/23/2018, 12:30:54 PM"
      },
      {
        comment: "Morgana of Castle Camelot",
        id: "2287qw",
        postId: "qwe098",
        author: "Morgana",
        date: "1/23/2018, 03:10:32 AM"
      }
    ];
    const mockery = JSON.stringify(mockItem);
    localStorage.setItem("comments", mockery);
    commentWrapper.instance().setCommentsFromLocalStorage();
    commentWrapper
      .instance()
      .renderCommentList(commentWrapper.state().comments);
    /* console.log(
      commentWrapper
        .instance()
        .renderCommentList(commentWrapper.state().comments)
    ); */
    expect(commentWrapper.state().comments).toHaveLength(2);
  });

  it("Remove a comment", () => {
    const commentWrapper = mount(
      <Comments postId="lks334" currentPersona="Morgana" />
    );
    const mockItem = [
      {
        comment: "Esmeralda of the streets of Paris",
        id: "117as",
        postId: "lks334",
        author: "Esmeralda",
        date: "1/23/2018, 12:30:54 PM"
      },
      {
        comment: "Morgana of Castle Camelot",
        id: "2287qw",
        postId: "lks334",
        author: "Morgana",
        date: "1/23/2018, 03:10:32 AM"
      }
    ];
    const mockery = JSON.stringify(mockItem);
    // console.log(mockery);
    localStorage.setItem("comments", mockery);
    commentWrapper.instance().setCommentsFromLocalStorage();
    console.log(localStorage.getItem);
    commentWrapper.instance().renderCommentList(commentWrapper.state().comments);
    console.log(commentWrapper.state().comments);
    commentWrapper.instance().removeComment("117as");
    console.log(commentWrapper.state().comments);
    expect(commentWrapper.state().comments).toHaveLength(0);
  });
});
