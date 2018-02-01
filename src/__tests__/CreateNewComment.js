import React from "react";
import { shallow, mount, render } from "enzyme";
import Comments from "../components/Comments";
import CreateNewComment from "../components/CreateNewComment";


it('should create new posts with correct title and content', () => {
  const wrapperPost = mount(<Comments postId="" currentPersona=""  />)  
  const formSubmit = wrapperPost.find(CreateNewComment).find('[data-type="comment"]');   
  const content = wrapperPost.find(CreateNewComment).find("textarea")
  content.simulate('change', { target : { name: "comment", value : "MagnusContent" }});
  formSubmit.simulate('submit');
  expect(wrapperPost.state().comment).toBeUndefined();
});