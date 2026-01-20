"use strict";
// 1. define type alias
Object.defineProperty(exports, "__esModule", { value: true });
// 2. create a blog post
const myPost = {
    title: "Learn TypeScript",
    content: "TypeScript is a superset of JavaScript that adds static typing",
    author: "Mamun",
    published: true,
    publishedDate: "2026-01-02"
};
const myPost2 = {
    title: "Learn Python",
    content: "Python is a powerfull programming language for backend",
    author: "Atiff",
    published: false,
};
// 3. create a function to display the blog post
function printPost(post) {
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
//# sourceMappingURL=blogpost.js.map