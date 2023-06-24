import { Post } from "../component/Post/Post";
import { Sidebar } from "../component/Sidebar/Sidebar";
import { Sort } from "../component/Sorting/Sorting";
import "./Landing.css";
import { forumData } from "../data/PostData";
import { useState } from "react";
import { Footer } from "../component/Footer/Footer";

export function Landing() {
    const [posts, setPosts] = useState(forumData.posts);

    const handleSorting = () => {
      const sortedPosts = [...posts].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setPosts(sortedPosts);
    };
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
          <Footer/>
        </div>
        <div>
          <Post/>
        </div>
        <div className="sorting-bar">
            <Sort handleSorting={handleSorting}/>
        </div>
      </div>
     
      {/* <div>
          
        </div> */}
      {/* <h1>this is landing page</h1> */}
    </>
  );
}
