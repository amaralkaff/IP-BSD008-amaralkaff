// components/Comment.jsx
import React, { useCallback } from "react";

const Comment = ({ comment, onDelete }) => {
  const handleDelete = useCallback(() => {
    onDelete(comment.id);
  }, [comment.id, onDelete]);

  return (
    <div className="border-b border-gray-300 mb-2 pb-2">
      <p className="font-semibold">{comment.User?.username}</p>
      <p>{comment.content}</p>
      {/* Add more comment details */}
      <div className="flex items-center space-x-2">
        <p className="text-xs text-gray-500">
          {new Date(comment.createdAt).toLocaleString()}
        </p>
        {/* Add delete button */}
        <button className="text-xs text-red-500" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Comment;
