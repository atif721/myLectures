/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    // console.log(`${userId}, ${postTitle}, ${postBody}, ${reactions}, ${tags}`);

    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Sylhet",
    body: "Hey guys, I am going to Sylhet for enjoying my vacation. Pray for me. Peace out.",
    reactions: 2,
    userId: "user-7321",
    tags: ["vacation", "Sylhet", "Enjoying"],
  },
  {
    id: "2",
    title: "Alhamdulillah. Pass korsi.",
    body: "4 bochor fajlami korar por o kopal er jore pass kore gechi vai pass. Sobai amar jonne duya korben. Samne jeno ami aro valo korte pari",
    reactions: 15,
    userId: "user-4241",
    tags: ["exam", "Graduated", "Happy"],
  },
];

export default PostListProvider;
