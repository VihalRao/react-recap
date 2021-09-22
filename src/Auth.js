import { useDispatch } from "react-redux";
import { authAction } from "./store";

const Auth = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authAction.login());
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <center>
          <label>UserName</label>
          <input type="text" />
          <br />
          <label>Password</label>
          <input type="text" />
          <br />
          <button>Login</button>
        </center>
      </form>
    </div>
  );
};

export default Auth;
