import React from 'react';
import faker from 'faker';

// component will have build in argument name props, pass in props as list of objects
const CommentDetail = (props) => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
            <a href="/" className="author">
                {/* access props passing objects */}
                {props.author}
            </a>
            <div className="metadata">
                <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice blog post</div>
        </div>
    </div>
  );
};

// export will make CommentDetail available to whom import it
export default CommentDetail;