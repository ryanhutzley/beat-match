import 'bootstrap/dist/css/bootstrap.min.css';


function Login({ onLogin }) {
  return (
    // <h1>BeatMatch Login</h1>
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="username" className="form-control form-control-lg" />
                    <label className="form-label" for="firstName">Username</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="number" id="age" className="form-control form-control-lg" />
                    <label className="form-label" for="age">Age</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <textarea type="bio" id="bio" className="form-control form-control-lg" />
                    <label className="form-label" for="bio">Bio</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="password" id="password" className="form-control form-control-lg" />
                    <label className="form-label" for="password">Password</label>
                  </div>
                  <div className="form-outline">
                    <input type="password" id="passwordConfirm" className="form-control form-control-lg" />
                    <label className="form-label" for="passwordConfirm">Password Confirmation</label>
                  </div>

                </div>
                
              </div>
                <div className="col-md-6 mb-4">

                  <h6 className="mb-2 pb-1">User Role: </h6>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      value="option1"
                      checked
                    />
                    <label className="form-check-label" >Producer</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      value="option2"
                    />
                    <label className="form-check-label" >Rapper</label>
                  </div>

                </div>

              <div className="mt-4 pt-2">
                <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Login;
