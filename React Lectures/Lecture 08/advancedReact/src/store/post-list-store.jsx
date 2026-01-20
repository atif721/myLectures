/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useMemo, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (
    userId,
    postTitle,
    postBody,
    postViewes,
    likes,
    dislikes,
    tags
  ) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        views: postViewes,
        reactions: {
          likes: likes,
          dislikes: dislikes,
        },
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  //useage of useMemo
  const arr = [5, 6, 7, 8, 9];
  const sortArr = useMemo(() => arr.sort(), [arr]);
  console.log(sortArr);

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Sylhet",
//     body: "Hey guys, I am going to Sylhet for enjoying my vacation. Pray for me. Peace out.",
//     reactions: 2,
//     userId: "user-7321",
//     tags: ["vacation", "Sylhet", "Enjoying"],
//   },
// ];

export default PostListProvider;
