import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { counterAction, dataAction } from "./store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterAction.increase(5));
  };

  const toggoleHandler = () => {
    dispatch(counterAction.hide());
  };

  const users = useSelector((state) => state.data.users);
  const use = useSelector((state) => state.data.users);
  console.log(use);

  console.log("use");
  return (
    <div>
      <center>
        {show && <h1>Counter Value:{counter}</h1>}
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increment</button>
        <button onClick={toggoleHandler}>Toogle Counter</button>
      </center>

      {users &&
        users.map((user) => (
          <h1 key={user.id}>
            {user.id}::{user.name}::{user.zipcode}
          </h1>
        ))}
    </div>
  );
};

export default Counter;

// const mapStateToProps = state => {
//   return {
//     counter: state.counter.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     buyCake: () => dispatch(increment())
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CakeContainer)
