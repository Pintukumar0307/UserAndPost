import React, { useState, useEffect } from 'react';
import '../style/post.css';
import { Link } from 'react-router-dom';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts');
      const postsData = await response.json();
      setPosts(postsData);
      setLoading(false); // Set loading to false after successful fetch
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false); // Set loading to false in case of error too
    }
  };

  return (
    <div className='post'>
      <h2>Post list</h2>
      <div className="post-item">
        {loading ? (
          <p>Loading...</p>
        ) : posts.length === 0 ? (
          <p>No Post found.</p>
        ) : (
          posts.map(post => (
            <Link to={`/post/${post.id}`} style={{ textDecoration: "none", color: "white" }} key={post.id}>
              <li className="post-name">{post.title}</li>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Post;
