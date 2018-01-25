import React from "react";
import { mount, render, shallow } from "enzyme";
import Comments from "../components/Comments";

describe("Comments", () => {
  it("Fetch a comment", () => {
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
    localStorage.setItem("comments", mockery);
    const commentWrapper = mount(
      <Comments postId="lks334" currentPersona="Morgana" />
    );
    expect(commentWrapper.state().comments[0].comment).toEqual(
      "Morgana of Castle Camelot"
    );
  });

  it("should render my content and date", () => {
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
    localStorage.setItem("comments", mockery);
    const commentWrapper = mount(
      <Comments postId="lks334" currentPersona="Morgana" />
    );
    const contentString = commentWrapper
      .find(".text-grey-darker")
      .text();
    const dateString = commentWrapper.find('.text-grey-dark').text();
    expect(contentString).toEqual("Morgana of Castle Camelot");
    expect(dateString).toContain("1/23/2018, 03:10:32 AM");
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
    expect(commentWrapper.state().comments).toHaveLength(2);
  });

  it("Remove a comment", () => {
    const commentWrapper = mount(
      <Comments postId="lks334" currentPersona="Esmeralda" />
    );
    const mockItem = [
      {
        comment: "Esmeralda of the streets of Paris",
        id: "117as",
        postId: "lks334",
        author: "Esmeralda",
        date: "1/23/2018, 12:30:54 PM"
      }
    ];
    const mockery = JSON.stringify(mockItem);
    localStorage.setItem("comments", mockery);
    commentWrapper.instance().setCommentsFromLocalStorage();
    expect(commentWrapper.state().comments).toHaveLength(1);
    commentWrapper.instance().removeComment("117as");
    expect(commentWrapper.state().comments).not.toHaveLength(1);
  });

  afterEach(() => {
    localStorage.clear();
  });
});
