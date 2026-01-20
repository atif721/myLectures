// import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
// import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  // const { postList } = useContext(PostListData);

  const postList = useLoaderData();

  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      {/*!fetching && */ postList.length === 0 && <WelcomeMessage />}
      {
        /*!fetching && */ postList.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
