import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

export const BlogDetails = () => {
  const { id } = useParams();
  // Getting data, error msg and pending from useFetch component
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {/* Is pending true log loading */}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};
