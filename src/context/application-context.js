import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [searchedWorker, setSearchedWorker] = useState("");

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

  // fetching workers from firebase
  // useEffect(() => {
  //   fetchWorkers();
  // }, []);

  return (
    <ApplicationContext.Provider
      value={{
        searchedWorker,
        setSearchedWorker,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
