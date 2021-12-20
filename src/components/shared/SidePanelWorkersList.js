import React from "react";

import { Link } from "react-router-dom";

import { registeredUsers } from "../sign-up/SignUpForm";

export default function SidePanelWorkersList() {
  return (
    <div className="side-panel__workers">
      <ul className="side-panel__workers-list">
        {registeredUsers.map((user) => {
          return (
            <li
              className="side-panel__workers-worker"
              key={user.id}
              data-worker-id
            >
              <Link to="#" className="side-panel__workers-worker-link">
                {`${user.name} ${user.lastName}`}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="side-panel__workers-pagination">1 2 3</div>
    </div>
  );
}
