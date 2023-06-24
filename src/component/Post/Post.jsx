import "./Post.css";
import { forumData } from "../../data/PostData";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Post() {
  const [posts, setPosts] = useState(forumData.posts);

  const handleUpvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.postId === postId ? { ...post, upvotes: post.upvotes + 1 } : post
      )
    );
  };

  const handleDownvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.postId === postId ? { ...post, upvotes: post.upvotes - 1 } : post
      )
    );
  };

  // console.log(forumData.posts)
  function calculateTimeInMinutes(postCreatedAt) {
    const postDate = new Date(postCreatedAt);
    const currentDate = new Date();

    const timeDiffInMilliseconds = currentDate - postDate;
    const timeDiffInMinutes = Math.floor(timeDiffInMilliseconds / (1000 * 60));

    return timeDiffInMinutes;
  }

  return (
    <>
      <div>
        {posts.map(
          ({
            postId,
            username,
            name,
            picUrl,
            post,
            postDescription,
            upvotes,
            downvotes,
            tags,
            createdAt,
            comments,
          }) => (
            <div key={postId} className="post-card">
              <div className="card-left">
                <button onClick={() => handleUpvote(postId)}>
                  <i className="fa fa-caret-up" aria-hidden="true"></i>
                </button>
                <p>{upvotes - downvotes}</p>
                <button onClick={() => handleDownvote(postId)}>
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </button>
              </div>
              <div className="card-right">
                <div className="card-top">
                  <img src={picUrl} alt="" />
                  <p>
                    Posted by <span>@{username}</span>
                  </p>
                  <li>{calculateTimeInMinutes(createdAt)}minutes ago</li>
                </div>
                <div className="card-bottom">
                  <h2>{post}</h2>
                  {tags.map((tag) => (
                    <Link>{tag}</Link>
                  ))}
                  <p>{postDescription}</p>
                </div>
                <hr />
                <div className="more-options">
                  <i class="fa fa-comment-o" aria-hidden="true"></i>
                  <i class="fa fa-share-alt" aria-hidden="true"></i>
                  <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
