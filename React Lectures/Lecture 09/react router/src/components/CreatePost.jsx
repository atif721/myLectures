import { Form, redirect } from "react-router-dom";
import "../routes/App.css";
const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();

  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const postViewElement = useRef();
  // const likesElement = useRef();
  // const dislikesElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const userId = userIdElement.current.value;
  //   const postTitle = postTitleElement.current.value;
  //   const postBody = postBodyElement.current.value;
  //   const postViewes = postViewElement.current.value;
  //   const likes = likesElement.current.value;
  //   const dislikes = dislikesElement.current.value;
  //   const tags = tagsElement.current.value.split(" ");
  //   userIdElement.current.value = "";
  //   postTitleElement.current.value = "";
  //   postBodyElement.current.value = "";
  //   likesElement.current.value = "";
  //   dislikesElement.current.value = "";
  //   tagsElement.current.value = "";
  //   onSubmit={handleSubmit}
  // };

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="views"
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
          name="likes"
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
          name="dislikes"
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
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;
