// src/pages/PostPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profile_picture, setProfilePicture] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/profiles/${id}`
        );
        setName(response.data.name);
        setBio(response.data.bio);
        setProfilePicture(response.data.profile_picture);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Error fetching profile.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  const handleCommentAdded = (newComment) => {
    setPost({ ...post, Comments: [...post.Comments, newComment] });
  };

  const handleCommentDelete = async (commentId) => {
    try {
      // Assuming an API endpoint for comment deletion
      await axios.delete(`http://localhost:3000/comments/${commentId}`);
      setPost({
        ...post,
        Comments: post.Comments.filter((c) => c.id !== commentId),
      });
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  if (!post) return <div className="container mx-auto p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={profile_picture}
                  alt={name}
                />
                <p className="text-gray-900 font-semibold">{name}</p>
              </div>
              <p className="text-xs text-gray-500">
                {new Date(post.createdAt).toLocaleString()}
              </p>
            </div>
            <p className="text-gray-700 text-base">{post.content}</p>
          </div>
          <CommentForm postId={post.id} onCommentAdded={handleCommentAdded} />
          {/* <CommentList
            postId={post.id}
            comments={post.Comments}
            onDelete={handleCommentDelete}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
