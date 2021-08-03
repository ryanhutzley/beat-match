import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


function Login({ onLogin }) {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")
    const [bio, setBio] = useState("")
    const [password, setPassword] = useState("")
    // const [passwordConf, setPasswordConf] = useState("")
    const [user_type, setUserType] = useState("Producer")
    const [existingUser, setExistingUser] = useState(true)
    const [errors, setErrors] = useState([])

    let history = useHistory()

    async function handleSignup(e) {
        e.preventDefault()
        const userData = {
            username,
            user_type,
            age: parseInt(age),
            bio,
            password: password

        }
        const res = await fetch("/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData)
        })
        const json = await res.json()
        if (res.ok) {
            onLogin(res)
            history.push("/")
        } else {
            setErrors(res.errors)
        }
    }

    function handleLogin() {

    }


    return (
        <>
        {existingUser ? (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">BeatMatch Login</h3>
                                <form onSubmit={handleLogin}>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={e => setUsername(e.target.value)}/>
                                                <label className="form-label" htmlFor="firstName">Username</label>
                                            </div>

                                            <div className="form-outline">
                                                <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={e => setPassword(e.target.value)}/>
                                                <label className="form-label" htmlFor="password">Password</label>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-2">
                                            <input className="btn btn-primary btn-lg" type="submit" value="Submit" /> {" "}
                                            <input className="btn btn-primary btn-lg" type="button" value="New to BeatMatch? Create Your Profile!" onClick={() => setExistingUser(!existingUser)} />
                                        </div>

                                        {/* <div className="mt-4 pt-2">
                                            <input className="btn btn-primary btn-lg" type="button" value="New to BeatMatch? Create Your Profile!" onClick={() => setExistingUser(!existingUser)} />
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        ) : (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                    <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                    <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">BeatMatch Signup</h3>
                        <form onSubmit={handleSignup}>
                        <div className="row">
                            <div className="col-md-6 mb-4">

                            <div className="form-outline">
                                <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={e => setUsername(e.target.value)}/>
                                <label className="form-label" htmlFor="firstName">Username</label>
                            </div>

                            </div>
                            <div className="col-md-6 mb-4">

                            <div className="form-outline">
                                <input type="number" min="13" id="age" className="form-control form-control-lg" value={age} onChange={e => setAge(e.target.value)}/>
                                <label className="form-label" htmlFor="age">Age</label>
                            </div>

                            </div>
                        </div>

                        {/* <div className="row">
                            <div className="col-md-6 mb-4 d-flex align-items-center">

                            </div>
                        </div> */}

                        <div className="row">
                            <div className="col-md-6 mb-4 pb-2">

                            <div className="form-outline">
                                <textarea type="bio" id="bio" className="form-control form-control-lg" value={bio} onChange={e => setBio(e.target.value)}/>
                                <label className="form-label" htmlFor="bio">Bio</label>
                            </div>

                            </div>
                            <div className="col-md-6 mb-4 pb-2">

                            <div className="form-outline">
                                <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={e => setPassword(e.target.value)}/>
                                <label className="form-label" htmlFor="password">Password</label>
                            </div>
                            {/* <div className="form-outline">
                                <input type="password" id="passwordConfirm" className="form-control form-control-lg" value={passwordConf} onChange={e => setPasswordConf(e.target.value)}/>
                                <label className="form-label" htmlFor="passwordConfirm">Password Confirmation</label>
                            </div> */}

                            </div>
                            
                        </div>
                            <div className="col-md-6 mb-4">

                            <h6 className="mb-2 pb-1">User Role: </h6>

                            <div className="form-check form-check-inline">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                value="Producer"
                                checked={user_type === "Producer"}
                                onChange={e => setUserType(e.target.value)}
                                />
                                <label className="form-check-label" >Producer</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                value="Rapper"
                                checked={user_type === "Rapper"}
                                onChange={e => setUserType(e.target.value)}
                                />
                                <label className="form-check-label" >Rapper</label>
                            </div>

                            </div>

                        <div className="mt-4 pt-2">
                            <input className="btn btn-primary btn-lg" type="submit" value="Submit" /> {" "}
                            <input className="btn btn-primary btn-lg" type="button" value="Back to Login Form" onClick={() => setExistingUser(!existingUser)}/>
                        </div>

                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        )}
        </>
    );
}

export default Login;
