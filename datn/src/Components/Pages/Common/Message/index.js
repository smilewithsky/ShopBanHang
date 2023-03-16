import React, { useEffect } from 'react';
function Comment({id}){
    const initFacebookSDK = () => {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
        window.fbAsyncInit = function () {
          if(!window.FB) return null;
          window.FB.init({
            addId: process.env.REACT_APP_FACEBOOK_APP_ID,
            cookie: true,
            xfbml: true,
            version: 'v2.5'
          })
        }
          (function (d, s, id) {
            let js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(s)) return;
            js = d.createElement(s); js.id = id
            js.src = "//connect.facebook.net/vi_VN/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        }
        useEffect(() => {
             initFacebookSDK();
        }, [id])
    return (
        <div>
                  <div className="fb-comments" data-href={`http://localhost:3000/detail/${id}`} data-width="100%" data-numposts={10} />
        </div>
    )
}

export default Comment;

