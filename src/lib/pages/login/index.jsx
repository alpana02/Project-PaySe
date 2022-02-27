import { useContext } from "react";
import { Box, HStack, Button } from "@chakra-ui/react";
import { AuthContext } from "../../auth/AuthContext";

function Authentication() {
  const { login, logout } = useContext(AuthContext);
  return (
    <>
      <div class="container">
        <div class="wrapper">
          <form>
            <h1>Login</h1>
            <p>If you are already a member, easily log in</p>
            <input type="email" id="email" placeholder="Email" />
            <div class="pass-icon">
              <input type="password" id="password" placeholder="password" />
              <img src="https://cdn.pixabay.com/photo/2016/12/18/11/04/eye-1915454_960_720.png" />
            </div>

            <a href="#">Forgot my password</a>
            <input type="submit" id="login-btn" value="Login" />
            <div class="or">
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <Button onClick={login} class="google-btn">Login with Google</Button>
            <div class="register">
              <p>If you don't have an account</p>
              <button class="register-btn">Register</button>
            </div>
          </form>
        </div>
        <div class="main-img"></div>
      </div>
    </>
  );
}

export default Authentication;
