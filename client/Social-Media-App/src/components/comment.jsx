// components/comment.jsx
import { useCallback } from "react";
import propTypes from "prop-types";

let Comment = ({ comment, onDelete }) => {
  let handleDelete = useCallback(() => {
    onDelete(comment.id);
  }, [comment.id, onDelete]);

  return (
    <div className="flex space-x-2">
      <img
        src={comment.User.profile_picture}
        alt={`${comment.User.name}'s profile`}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className="font-semibold">{comment.User.name}</p>
          <button
            className="text-xs text-gray-400 hover:text-gray-600"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <p className="text-sm">{comment.content}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: propTypes.shape({
    id: propTypes.number.isRequired,
    content: propTypes.string.isRequired,
    User: propTypes.shape({
      name: propTypes.string.isRequired,
      profile_picture: propTypes.string.isRequired,
    }),
  }),
  onDelete: propTypes.func.isRequired,
};

export default Comment;
