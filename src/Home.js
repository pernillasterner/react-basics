import { useState, useEffect } from "react";
import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  /* run this function everytime name changes. don´t run this function when the blog state has changed */
  useEffect(() => {
    console.log("use effect ran");
  }, [name]); // add name as a dependency and it will watch this value

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      {/* Filter only marios blogs */}
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario´s blogs"
      />
      <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};
