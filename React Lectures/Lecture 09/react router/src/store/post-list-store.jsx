/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useReducer } from "react";

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
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
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

  // useEffect(() => {
  //   setFetching(true);

  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts);
  //       setFetching(false);
  //     });

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  //useage of useMemo
  // const arr = [5, 6, 7, 8, 9];
  // const sortArr = useMemo(() => arr.sort(), [arr]);
  // console.log(sortArr);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
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
