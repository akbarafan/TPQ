import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const postData = {
    email: email,
    password: password,
  };
  
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data;', // Tipe konten permintaan
    },
  };


  const handleLogin = (event) => {
    event.preventDefault();

    axios.post('http://127.0.0.1:8000/api/login',  postData, config )
    .then(response => {
      
      localStorage.setItem('akun', JSON.stringify(response.data.data));

      if (response.data.data.id_role === 2) {
        navigate("/teacher");
      }else{
        navigate("/userpage");
      }
    })
    .catch(error => {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Terjadi kesalahan. Silakan coba lagi.');
      }
    });
    
  };

  return (
    <div className='hold-transition register-page'>
      <div className="login-box">
        <div className="login-logo">
          <b>TPQ</b> Duafa
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Masuk akun Anda</p>
            <img alt="" className='gambar-logo mb-3' />
            <form >
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <div className="input-group-append">
                  <div className="input-group-text">
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                  </div>
                </div>
              </div>

                <div className="justify-content-center">
                    <button type="submit" onClick={handleLogin} className="btn btn-primary btn-block text-center">
                      Login</button>
                </div>
                
            <p className="text-danger text-center">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
