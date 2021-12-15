import React from "react";

export default function EmailInUse({
  existingUserModal,
  setExistingUserModal,
}) {
  const existingUser = existingUserModal
    ? "email-in-use active"
    : "email-in-use";
  return (
    <div className={existingUser}>
      <div className="email-in-use__text-wrapper">
        <p className="email-in-use__text">This email is already registered</p>
        <button
          className="email-in-use__close-btn"
          onClick={() => setExistingUserModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
