import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
            <a href="/" className="author">
                Sam
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