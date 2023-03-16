import React from 'react'
import { FooterWrapper } from './styled'
import { footer } from './data'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  // const initFacebookSDK = () => {
  //   if (window.FB) {
  //     window.FB.XFBML.parse();
  //   }
  //   window.fbAsyncInit = function () {
  //     if(!window.FB) return null;
  //     window.FB.init({
  //       addId: process.env.REACT_APP_FACEBOOK_APP_ID,
  //       cookie: true,
  //       xfbml: true,
  //       version: 'v2.5'
  //     })
  //   }
  //     (function (d, s, id) {
  //       let js, fjs = d.getElementsByTagName(s)[0];
  //       if (d.getElementById(s)) return;
  //       js = d.createElement(s); js.id = id
  //       js.src = "//connect.facebook.net/vi_VN/sdk.js";
  //       fjs.parentNode.insertBefore(js, fjs);
  //     }(document, 'script', 'facebook-jssdk'));
  //   }


  return (
    <FooterWrapper>
      <div className="container">
        <div className="row">
          {footer.map((item, index) => (
            <div key={`footer-${index}`}
              className="col-12 col-md-6 col-lg-3">
              <h4 className='footer-title'>{item.name}</h4>
              <ul className='footer-list'>
                {item.text.map((paragraph, index) => (
                  <li key={`paragraph-${index}`} className='footer-item'>
                    {paragraph.type === "text" ? (<span className='footer-span'>{paragraph.paragraphs}</span>) :
                      (
                        <NavLink to={`/page/${paragraph.paragraphs}`} className='footer-link' href=''>
                          {paragraph.paragraphs}</NavLink>
                      )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

            {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTi%25E1%25BA%25BFn-Anh-Shop-106776958743786%2F%3Fref%3Dpages_you_manage&tabs=timeline&width=340&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">

            </iframe> */}
          {/* <div className="col-12 col-md-6 col-lg-3">

            <div class="fb-page" data-href="https://www.facebook.com/Ti%E1%BA%BFn-Anh-Shop-106776958743786/?ref=pages_you_manage" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Ti%E1%BA%BFn-Anh-Shop-106776958743786/?ref=pages_you_manage" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Ti%E1%BA%BFn-Anh-Shop-106776958743786/?ref=pages_you_manage">Tiến Anh Shop</a></blockquote></div>
          </div> */}
        </div>
      </div>
    </FooterWrapper>
  )
}

export default memo(Footer);