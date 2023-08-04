import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import PostCard from '../component/PostCard';




const PostDetails = () => {
    const { id } = useParams();
    const [posts, setposts] = useState([]);
    const [loading, setLoading] = useState(true);


const fetchposts = async () => {
    try {
      const response = await fetch(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts/${id}`);
      const postsData = await response.json();
      setposts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchposts()
      .then(() => setLoading(false))
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);
    



  
  return (
    <div className="post-details-container">
    {loading ? (
      <p>Loading...</p>
    ) : posts ? (
      <>
        
     <PostCard
        title={posts.title}
        cover={posts.cover}
        description={posts.description}
     />

      </>
    ) : (
      <p>post not found.</p>
    )}
  </div>

    
  )
}

export default PostDetails


  
  


