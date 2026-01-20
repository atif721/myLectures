import { useContext, useRef } from "react";
import "../App.css";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postViewElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postViewes = postViewElement.current.value;
    const likes = likesElement.current.value;
    const dislikes = dislikesElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, postViewes, likes, dislikes, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your user ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today...?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="6"
          cols="3"
          type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about you."></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Viewes
        </label>
        <input
          type="text"
          ref={postViewElement}
          className="form-control"
          id="reactions"
          placeholder="People viewed "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={likesElement}
          className="form-control"
          id="reactions"
          placeholder="Likes"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={dislikesElement}
          className="form-control"
          id="reactions"
          placeholder="Dislikes "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tagging
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
