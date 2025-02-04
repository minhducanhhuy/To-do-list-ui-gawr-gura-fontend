import React, { useEffect } from "react";
import "./Comment.css";

function Comment() {
  useEffect(() => {
    // Hàm để tải Facebook SDK
    const loadFacebookSDK = () => {
      if (window.FB) {
        // Nếu SDK đã được tải, khởi tạo lại plugin
        window.FB.XFBML.parse();
        return;
      }

      // Tạo script element để tải SDK
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v22.0&appId=1389942945323216";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.nonce = "RANDOM_NONCE"; // Thêm nonce để bảo mật

      // Thêm script vào document
      document.body.appendChild(script);

      // Xử lý sau khi script được tải
      script.onload = () => {
        if (window.FB) {
          window.FB.XFBML.parse(); // Khởi tạo lại plugin
        }
      };
    };

    // Gọi hàm tải SDK
    loadFacebookSDK();
  }, []);

  return (
    <div className="comment">
      <div id="fb-root"></div>
      <div
        className="fb-comments"
        data-href="https://minhducanhhuy.github.io/To-do-list-ui-gawr-gura-fontend/"
        data-width=""
        data-numposts="5"
        data-order-by="reverse_time"
      ></div>
    </div>
  );
}

export default Comment;
