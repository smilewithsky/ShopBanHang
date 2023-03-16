import React, { useEffect, useRef } from 'react'
import { LoginWrapper } from './styled'
import background from './../../../assets/Images/Background-login.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './../../../Common/Button'
import { faFacebook , faGoogle , faTwitter , faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
function Login() {

  const formRef = useRef()
  // const history = useHistory()
  const linkSocialIcon = document.querySelectorAll("#list-social a");
  for (let index = 0; index < linkSocialIcon.length; index++) {
    const element = linkSocialIcon[index];
    element.preventDefault();
    
  }

  const handleChangeRegister = () => {
    // history("/register")
  }
  // formRef.current.onSubmit = function(e){
  //   e.preventDefault();
  // }
  // useEffect( () => {
  //   console.log("background " , background);
  //   console.log("form " ,formRef.current);

  //   return () => {

  //   }

  // })

  return (
    <LoginWrapper background={background}>
      <div className="login-page">
          <div className="login-content">
            <div className='form-login' ref={formRef}>
              <h3 className='form-header text-center'>Đăng Nhập</h3>
              <div className="form-group">
                <label htmlFor="username">Tài Khoản <span>*</span></label> <br />
                <input type="text" name="username" id="username" className='form-input' placeholder='Nhập tài khoản' />
                {/* <p className='error'>Bắt buộc phải nhập trường này</p> */}
              </div>
              <div className="form-group">
                <label htmlFor="password">Mật khẩu <span>*</span></label> <br />
                <input type="password" name="password" id="password" className='form-input' placeholder='Nhập password' />
                {/* <p className='error'>Bắt buộc phải nhập trường này</p> */}
              </div>

              <div className="form-group">
                <p className='forgot-password'>
                  quên mật khẩu ?
                </p>
              </div>

              <div className='form-group'>
                <Button className="btn-overwrite">Đăng Nhập</Button>
                <Button className="btn-overwrite" onClick={handleChangeRegister}>
                  <Link to="/register">Đăng Ký</Link>
                </Button>
              </div>

              <div className="form-group">
                <p className='other-login text-center'>
                  Đăng nhập bằng
                </p>

                <div className='list-social'>
                  <a href="">
                    <FontAwesomeIcon className='facebookIcon' icon={faFacebookF} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon className='googleIcon' icon={faGoogle} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon className='twitterIcon' icon={faTwitter} />
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </LoginWrapper>
  )
}

export default Login