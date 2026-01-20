interface UserProfile {
  id: number;
  username: string;
  email: string;
}

interface Author extends UserProfile {
  bio: string;
  posts: string[];
}

type Status = "active" | "inactive" | "banned";

const author1: Author = {
  id: 2411311051,
  username: "auth221",
  email: "aafffds@gmail.com",
  bio: "a full stack developer",
  posts: ["Post1", "Post2", "Post3"]
};
const accountStatus: Status = "active";
