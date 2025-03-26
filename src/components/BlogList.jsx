import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";
import { GetBlogApi, GetBlogsApi } from "../service/api";

function BlogList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await GetBlogsApi();
      setData(res.data);
    })();
  }, [])
  return (
    <div>
      {data.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <Blog blog={blog} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
