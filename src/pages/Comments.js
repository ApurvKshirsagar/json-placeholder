import React, { useEffect, useState } from 'react';
import '../styles/Comments.css';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then((data) => setComments(data));
    }
  }, [postId]);

  return (
    <div className='comments'>
      {comments.map((comment) => (
        <div key={comment.id} className='comment'>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
          <p className='comment-email'>by {comment.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
