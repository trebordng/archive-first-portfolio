import React, { useEffect, useState } from "react";
import axios from "axios";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import { Link, Outlet } from "react-router-dom";

const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function Blogs() {
  const [blogData, getBlogData] = useState([]);

  async function axiosAPI() {
    const test = [];
    await axios
      .get("https://61ed54c4f3011500174d23cc.mockapi.io/Post")
      .then((response) => {
        test.push(response.data);
      });
    getBlogData(test);
  }

  useEffect(() => {
    axiosAPI();
  }, []);
  useEffect(() => {}, []);

  return (
    <StyleRoot>
      <div style={styles.fadeIn}>
        <div className="blog">
          {blogData.map((blogPage) =>
            blogPage.map((blog) => (
              <Link to={`/Blogs/${blog.id}`} key={blog.id}>
                <div>
                  <p>{blog.title}</p>
                </div>
              </Link>
            ))
          )}
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Blogs;
