import { registeredUsersActions } from "./registeredUsers-slice";
import { workersActions } from "./workers-slice";

export const fetchRegisteredUsers = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://workers-panel-67e59-default-rtdb.europe-west1.firebasedatabase.app/users.json"
    );

    const data = await response.json();

    const regUsersTemp = [];

    for (const key in data) {
      regUsersTemp.push({
        email: data[key].email,
        password: data[key].password,
      });
    }

    dispatch(
      registeredUsersActions.setRegisteredUsers({
        users: regUsersTemp,
      })
    );
  };
};

export const fetchWorkers = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://workers-panel-67e59-default-rtdb.europe-west1.firebasedatabase.app/workers.json"
    );
    const data = await response.json();

    console.log(data);

    const workersTemp = [];

    for (const key in data) {
      workersTemp.push({
        id: key,
        name: data[key].name,
        lastName: data[key].lastName,
        position: data[key].position,
        phoneNumber: data[key].phoneNumber,
        email: data[key].email,
        grossSalary: data[key].grossSalary,
        cnp: data[key].cnp,
        worksFrom: data[key].worksFrom,
      });
    }
    dispatch(
      workersActions.setWorkers({
        workers: workersTemp,
      })
    );
  };
};
