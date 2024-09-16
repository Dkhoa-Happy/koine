import "./index.scss";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import logo from "./image-removebg-preview.png";
import video from "./yt1s.com - Black Myth Wukong  PreOrder CG Trailer  PS5 Games_1080pFHR.mp4";
import gg from "./gg.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
function Login() {
  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div className="login">
        <iframe
          className="login__video"
          src={video}
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay: fullscreen; picture-in-picture"
          allowfullScreen
        ></iframe>
        <div className="wrapper">
          <div className="login__logo">
            <Link to="/">
              <img src={logo} alt="Logo" width={100} />
            </Link>
          </div>

          <div className="line"></div>
          <div className="login__form">
            <h3>Login into your account</h3>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <button className="login__google" onClick={handleLoginGoogle}>
              <img src={gg} alt="" width={30} />
              <span>Login with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
