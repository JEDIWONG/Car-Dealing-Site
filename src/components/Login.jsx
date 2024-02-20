import "../styles/Login.css"
import { Link } from "react-router-dom";

function Login(){

    return(
        <div>
            <div className="login-container">
                <h2>Sign In</h2>
                <input placeholder="Username/ Email Address"></input>
                <input placeholder="Password"></input>
                <a href="">Forgot Password?</a>
                <button>Login</button>
                <p>Not a member ?</p>
                <Link className="link">Sign Up</Link>
            </div>
        </div>
    );


};

export default Login;