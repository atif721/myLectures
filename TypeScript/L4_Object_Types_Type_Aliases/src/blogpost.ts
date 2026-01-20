
// 1. define type alias

type BlogPost = {
  title: string;
  content: string;
  author: string;
  published: boolean;
  publishedDate?: string;
};

// 2. create a blog post

const myPost: BlogPost = {
  title: "Learn TypeScript",
  content: "TypeScript is a superset of JavaScript that adds static typing",
  author: "Mamun",
  published: true,
  publishedDate: "2026-01-02"
};

const myPost2: BlogPost = {
  title: "Learn Python",
  content: "Python is a powerfull programming language for backend",
  author: "Atiff",
  published: false,
};


// 3. create a function to display the blog post

function printPost(post: BlogPost) {
  console.log(`Title: ${post.title}`);
  console.log(`Description: ${post.content}`);
  console.log(`Author: ${post.author}`);
  console.log(`Published: ${post.published}`);

  if (post.publishedDate) {
    console.log(`Date: ${post.publishedDate}`);
  }
}

console.log("\n");
printPost(myPost);
console.log("\n");
printPost(myPost2);