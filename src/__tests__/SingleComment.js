import React from "react";
import { render, mount } from "enzyme";
import SingleComment from "../components/SingleComment";
import Comments from "../components/Comments";


describe('<Comments />', () => {
  it('Should remove button on press', () => {
    const mockItem = [{  
      "comment": "Contenty", 
      "postId": "_ilfas!", 
      "author": "Zac", 
      "id": "213829081",
      "date": "2018-01-23 10:58:36" 
    }];
    const mockery = JSON.stringify(mockItem);
    localStorage.setItem("comments", mockery);
    const wrapper = mount(<Comments currentPersona='Zac' postId="_ilfas!" />);
    const Singlewrapper = mount(<SingleComment currentPersona='Zac' author="Zac" id="213829081" date="2018-01-23 10:58:36" comment="Contenty" onClick={jest.fn()} />);
    wrapper.instance().setCommentsFromLocalStorage()
    wrapper.instance().renderCommentList(wrapper.state().comments)
    const button = Singlewrapper.find('button').find('.bg-red-dark');
    button.simulate('click'); 
    expect(wrapper.render().find('.bg-red-dark').html()).toBeNull();
  })

});