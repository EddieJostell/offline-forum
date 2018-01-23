import React from "react";
import { mount, render, shallow } from "enzyme";
import Comments from "../components/Comments";

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
      },
      {
        comment: "Esmeralda of the streets of Paris",
        id: "117as",
        postId: "qwe098",
        author: "Esmeralda",
        date: "1/23/2018, 12:30:54 PM"
      }
    ];
    const mockery = JSON.stringify(mockItem);
   // console.log(mockery);
    localStorage.setItem("comments", mockery);
    commentWrapper.instance().setCommentsFromLocalStorage("lks334");
    expect(commentWrapper.state().comments[0].id).toEqual("2287qw");
  });

  it("Remove a comment", () => {
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
      },
      {
        comment: "Esmeralda of the streets of Paris",
        id: "117as",
        postId: "qwe098",
        author: "Esmeralda",
        date: "1/23/2018, 12:30:54 PM"
      }
    ];
    const mockery = JSON.stringify(mockItem);
   // console.log(mockery);
    localStorage.setItem("comments", mockery);
    commentWrapper.instance().removeComment("2287qw");
    expect(commentWrapper.state().comments).toEqual([]);
  });
});
