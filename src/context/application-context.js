import React, { createContext, useState, useEffect } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState();
  const [workers, setWorkers] = useState([]);
  const [searchedWorker, setSearchedWorker] = useState("");

  // fetching registered users from firebase
  async function fetchRegisteredUsers() {
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
    setRegisteredUsers(regUsersTemp);
  }

  useEffect(() => {
    fetchRegisteredUsers();
  }, [registeredUsers]);

  // fetching workers from firebase
  async function fetchWorkers() {
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
    setWorkers(workersTemp);
  }

  // function to POST registered user to FIREBASE
  // trenutno služi za manualno dodavanje radnika
  async function addWorkerToDatabase(worker) {
    const response = await fetch(
      "https://workers-panel-67e59-default-rtdb.europe-west1.firebasedatabase.app/workers.json",
      {
        method: "POST",
        body: JSON.stringify(worker),
        headers: {
          "Contet-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  }

  // manualno ću dodati nekoliko radnika
  // useEffect(() => {
  //   addWorkerToDatabase({
  //     name: "klemen",
  //     lastName: "fink",
  //     position: "qa tester",
  //     phoneNumber: "+854421513",
  //     email: "fink@gmail.com",
  //     grossSalary: 12450,
  //     cnp: 3747620015466,
  //   });
  // }, []);

  useEffect(() => {
    fetchWorkers();
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        isLogged,
        setIsLogged,
        registeredUsers,
        workers,
        setWorkers,
        searchedWorker,
        setSearchedWorker,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
