import { GoogleLogin } from "@react-oauth/google";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

const GoogleSignIn = () => {
  
    const { googleLogIn } = useContext(UserContext);

    return (
      <GoogleLogin
        onSuccess={googleLogIn}
        onError={() => {
          console.log("Login Failed");
        }}
      ></GoogleLogin>
    );
  };

export default GoogleSignIn;
