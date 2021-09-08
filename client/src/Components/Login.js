import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../background_logo/logo-normal-5000-round.png'


function Login({ onLogin }) {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")
    const [bio, setBio] = useState("")
    const [password, setPassword] = useState("")
    // const [passwordConf, setPasswordConf] = useState("")
    const [user_type, setUserType] = useState("Producer")
    const [imageURL, setImageURL] = useState("")
    const [existingUser, setExistingUser] = useState(true)
    const [errors, setErrors] = useState([])
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    let history = useHistory()

    function handleClick() {
        setExistingUser(!existingUser)
        setErrors([])
        setUsername("")
        setPassword("")
        setAge("")
        setBio("")
    }

    async function handleSignup(e) {
        e.preventDefault()
        const userData = {
            username,
            image_url: (imageURL === "" ? "https://s.yimg.com/ny/api/res/1.2/.N2GYfm.grlO5KT6ErO3FA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM5OS42/https://s.yimg.com/os/creatr-uploaded-images/2021-02/572c4830-721d-11eb-bb63-96959c3b62f2" : imageURL),
            user_type,
            age: parseInt(age),
            bio,
            password
        }
        const res = await fetch("/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData)
        })
        const data = await res.json()
        if (res.ok) {
            onLogin(data)
            setErrors([])
            history.push("/")
        } else {
            setErrors(data.errors)
        }
    }

    async function handleLogin(e) {
        e.preventDefault()
        const credentials = {
            username,
            password
        }
        const res = await fetch("/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(credentials)
        })
        const data = await res.json()
        if (res.ok) {
          onLogin(data)
          setErrors([])
          history.push("/")
        } else {
            console.log(data)
            setErrors(data.errors)
        }
    }

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    let style = ''
    if (windowWidth > 415) {
        style = '20%'
    } else {
        style = '50%'
    }

    return (
        <>
        {existingUser ? (
        <section className="vh-100 gradient-custom">
            <div className="container h-100">
                <br></br>
                <br></br>
                <img src={logo} alt="BeatMatch" className="square" style={{width: style}}/>
                <br></br>
                <br></br>
                <div style={{display: 'block', width: '60vw', margin: 'auto', overflow: 'hidden'}}> 
                    <h1>Welcome to <span className="orange">BeatMatch</span></h1> 
                    <h2>Where rappers and producers can easily connect, network, and collaborate</h2>
                    <h3>🎧 🎹 🎸🎤🎵🤝</h3>
                </div>
                <br></br>
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">BeatMatch Login</h3>
                                <form onSubmit={handleLogin}>
                                    <div className="row ">
                                        <div className="col-md-6 login mb-6" >

                                            <div className="form-outline">
                                                <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={e => setUsername(e.target.value)}/>
                                                <label className="form-label" htmlFor="firstName">Username</label>
                                            </div>

                                            <div className="form-outline">
                                                <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={e => setPassword(e.target.value)}/>
                                                <label className="form-label" htmlFor="password">Password</label>
                                            </div>
                                        {/* error display */}
                                        {errors !== [] ? 
                                        (<div>
                                            {errors.map((error, index)=> (<p style={{color: 'red'}} key={index}>{error}</p>))}
                                        </div>)
                                        : null}

                                        </div>
                                        <div className="mt-6 pt-2">
                                            <input className="btn btn-primary btn-lg" type="submit" value="Submit" /> 
                                            <br/>
                                            <br/>
                                            <a  className="link" onClick={handleClick}>New to BeatMatch? Create Your Profile!</a>
                                        </div>                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </section>
        ) : (
        <section className="vh-100 gradient-custom">
            <div className="container h-100">
            <br></br>
            <br></br>
            <img src={logo} alt="BeatMatch" className="square" style={{width: style}}/>
            <br></br>
            <br></br>
            <div style={{display: 'block', width: '60vw', margin: 'auto', overflow: 'hidden'}}>
                <h1>Welcome to <span className="orange">BeatMatch</span></h1> 
                <h2 style={{marginBottom: '20px'}}>Where rappers and producers can easily connect with other artists</h2>
                <h3>🎧 🎹 🎸🎤🎵🤝</h3>
            </div>
            <br></br>
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-9 col-xl-7">
                    <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                        <div className="card-body p-4 p-md-5">
                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">BeatMatch Signup</h3>
                            <form onSubmit={handleSignup}>
                            <div className="col-md-6 login mb-4">

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
                        <div className="row">
                            <div className="col-md-6 mb-4">

                            <div className="form-outline">
                                <input required type="text" id="username" className="form-control form-control-lg" value={username} onChange={e => setUsername(e.target.value)}/>
                                <label className="form-label" htmlFor="firstName">Username</label>
                            </div>

                            </div>
                            <div className="col-md-6 mb-4">

                            <div className="form-outline">
                                <input type="text" id="imageURL" className="form-control form-control-lg" value={imageURL} onChange={e => setImageURL(e.target.value)}/>
                                <label className="form-label" htmlFor="firstName">Profile Pic URL</label>
                            </div>

                            </div>
                            <div className="col-md-6 mb-4">

                            <div className="form-outline">
                                <input required type="number" min="13" id="age" className="form-control form-control-lg" value={age} onChange={e => setAge(e.target.value)}/>
                                <label className="form-label" htmlFor="age">Age</label>
                            </div>

                            </div>
                            <div className="col-md-6 mb-4 pb-2">

                            <div className="form-outline">
                                <input required type="password" id="password" className="form-control form-control-lg" value={password} onChange={e => setPassword(e.target.value)}/>
                                <label className="form-label" htmlFor="password">Password</label>
                            </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 login mb-6 pb-2">

                            <div className="form-outline">
                                <textarea required type="bio" id="bio" className="form-control form-control-lg" value={bio} onChange={e => setBio(e.target.value)}/>
                                <label className="form-label" htmlFor="bio">Bio</label>
                            </div>

                            </div>
                            {errors !== [] ? 
                            (<div>
                                {errors.map((error, index)=> (<p style={{color: 'red'}} key={index}>{error}</p>))}
                            </div>)
                            : null} 
                        </div>
                        <div className="mt-6 pt-2">
                            <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                            <br/>
                            <br/>
                            <a className="link"  onClick={handleClick}>Back to Login Form</a>
                        </div>

                        </form>
                    </div>
                    
                    </div>
                </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </section>
        )}
        </>
    );
}

export default Login;
