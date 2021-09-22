import { configureStore, createSlice } from "@reduxjs/toolkit";

const intialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: intialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    hide(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const intialAuthstate = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState: intialAuthstate,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

const initialUserData = {
  users: [],
  reqUsers: "",
};

const dataSlice = createSlice({
  name: "user data",
  initialState: initialUserData,
  reducers: {
    getUsers(state, action) {
      state.users = [...action.payload.users];
    },

    getReqUsers(state, action) {
      state.reqUsers = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    data: dataSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export const dataAction = dataSlice.actions;

export default store;

// import { createStore } from 'redux';

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
