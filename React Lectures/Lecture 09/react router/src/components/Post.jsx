import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import "../routes/App.css";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post_card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cursor-pointer"
            onClick={() => deletePost(post.id)}
            role="button">
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="mb-2">
          <strong>User ID:</strong> {post.userId}
        </div>
        <div className="mb-2">
          <strong>Views:</strong> {post.views}
        </div>
        <div className="mb-2">
          <strong>Reactions:</strong>{" "}
          {typeof post.reactions === "object"
            ? `Likes: ${post.reactions.likes}, Dislikes: ${post.reactions.dislikes}`
            : post.reactions}
        </div>

        <div className="mb-2">
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary mx-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
