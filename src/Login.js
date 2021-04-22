import React, {useState} from 'react';
import './Login.css';
import { Link, useHistory} from 'react-router-dom';
import { auth } from './firebase';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = (e)=>{
        e.preventDefault()
        // firebase login code
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{history.push("/")})
        .catch((error)=>{alert("Please enter correct email or password")})
    }

    const register = (e)=>{
        e.preventDefault()
        // firebase new account code
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{alert(`Account Created With Email: ${email}`)})
        .catch((error)=>{alert(error)})
    }

    return(
        <div className="login">
            <Link to="/" style={{textDecoration:"none"}}>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"></img>
            </Link>

            <div className="login__container">
                <h2>Sign-in</h2>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>

                    <button className="signIn_btn" onClick={signIn} >Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Amazon's Clone Conditions of Use & Sale. Please see our Private Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="newAccount_btn" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;