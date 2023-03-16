import React from 'react'
import Button from '../../../Common/Button'
import { RegisterWrapper } from './styled'
import background from './../../../assets/Images/Background-login.webp'
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Register() {
  const handleChangeRegister = () => {

  }

  return (
    <RegisterWrapper background={background}>
      <div className="login-page">
          <div className="login-content">
            <div className='form-login'>
              <h3 className='form-header text-center'>Đăng Ký</h3>
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
                <label htmlFor="password">Nhập Lại Mật khẩu <span>*</span></label> <br />
                <input type="password" name="password" id="password" className='form-input' placeholder='Nhập lại password' />
                {/* <p className='error'>Bắt buộc phải nhập trường này</p> */}
              </div>

              <div className='form-group'>
                <Button className="btn-overwrite" onClick={handleChangeRegister}>Đăng Ký</Button>
              </div>
            </div>
        </div>
      </div>
    </RegisterWrapper>
  )
}

export default Register