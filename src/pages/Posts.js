import React, { useEffect, useState } from 'react';
import Comments from './Comments';
import '../styles/Posts.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleCommentClick = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <div className='posts'>
      {posts.map((post) => (
        <article key={post.id} className='post'>
          <h2>Title: {post.title}</h2>
          <p>{post.body}</p>
          <p className='read-more'>Read more...</p>
          <div className='social-interaction'>
            <span className='likes'>♥ 1,331</span>
            <div className='actions'>
              <button
                className='comment-btn'
                onClick={() => handleCommentClick(post.id)}
              >
                Comment
              </button>
              <button className='share-btn'>Share</button>
            </div>
          </div>
          {selectedPostId === post.id && <Comments postId={post.id} />}
        </article>
      ))}
    </div>
  );
}

export default Posts;
