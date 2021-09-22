import { useSelector } from "react-redux";
import Auth from "./Auth";
import Counter from "./Counter";
import Header from "./Header";
import UserProfile from "./UserProfile";

const Redux = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div>
      <Header />

      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </div>
  );
};

export default Redux;
