import { registeredUsersActions } from "./registeredUsers-slice";

export const fetchRegisteredUsers = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://workers-panel-67e59-default-rtdb.europe-west1.firebasedatabase.app/users.json"
    );

    const data = await response.json();

    dispatch(
      registeredUsersActions.setRegisteredUsers({
        users: data,
      })
    );
  };
};
