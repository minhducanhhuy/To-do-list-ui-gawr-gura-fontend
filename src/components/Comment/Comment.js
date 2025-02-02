import React, { useEffect } from "react";
import "./Comment.css";

function Comment() {
  useEffect(() => {
    // Khởi tạo lại plugin Facebook sau khi component render
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);
  return (
    <div className="comment">
      <div
        class="fb-comments"
        data-href="https://minhducanhhuy.github.io/To-do-list-ui-gawr-gura-fontend/"
        data-width=""
        data-numposts="5"
      ></div>
    </div>
  );
}

export default Comment;
