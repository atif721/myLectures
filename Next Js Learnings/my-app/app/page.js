"use client";

export default function Home() {
  return (
    <div>
      <h1
        onClick={() => {
          console.log("Clicked");
        }}>
        hello world
      </h1>
    </div>
  );
}
