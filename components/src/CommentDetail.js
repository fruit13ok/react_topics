import React from 'react';

// component will have build in argument name props, pass in props as list of objects
const CommentDetail = (props) => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar}></img>
        </a>
        <div className="content">
            <a href="/" className="author">
                {/* access props passing objects */}
                {props.author}
            </a>
            <div className="metadata">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{props.content}</div>
        </div>
    </div>
  );
};

// export will make CommentDetail available to whom import it
export default CommentDetail;