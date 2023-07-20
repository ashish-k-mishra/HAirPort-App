import React, {useState} from 'react'
// import { Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Home() {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    function handleLogin(e) {
    e.preventDefault();
    let passA = "admin123";
    let mailA = "admin";

    let passM = "ashish123";
    let mailM = "ashish";
    

        if (passwordlog === passA && emaillog === mailA){
          window.location.replace("./MainAdmin")
        }
        else if(passwordlog === passM && emaillog === mailM){
          window.location.replace("./MainManager")
        }
        else{
          alert("Envalid User ID or Password !");
          
        }
   }
      
    return (
        <>
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-center py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src="images/logo_Hairport.png" alt="logo"/>
                  </div>
                  <h4><b>Login</b></h4>
                  
                  <form className="pt-3" onSubmit={handleLogin}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" id="userId" style={{borderRadius: "10px"}} placeholder="User ID" onChange={(event) => setEmaillog(event.target.value)} />
                    </div>
                    
                    <div className="form-group">
                      <input type="password" className="form-control form-control-lg" id="userPassword" style={{borderRadius: "10px"}} placeholder="Password" onChange={(event) => setPasswordlog(event.target.value)}/>
                    </div>
    
                    <div className="mt-3">
                      <button type='submit' className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input"/>
                          Keep me signed in
                        </label>
                      </div>
                      <Link to="#" className="auth-link text-black">Forgot password?</Link>
                    </div>
                 </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
    
}
  
  export default Home;
  