import { dataAction } from ".";

export const fetchData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      return data;
    };
    const userData = await getData();
    dispatch(
      dataAction.getUsers({
        users: userData,
      })
    );
  };
};
