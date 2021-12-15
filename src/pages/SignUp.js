import React, { useState } from "react";
import SignUpForm from "../components/sign-up/SignUpForm";
import EmailInUse from "../components/shared/EmailInUse";

export default function SignUp() {
  const [existingUserModal, setExistingUserModal] = useState(false);
  return (
    <section className="sign-up-section">
      <SignUpForm setExistingUserModal={setExistingUserModal} />
      <EmailInUse
        existingUserModal={existingUserModal}
        setExistingUserModal={setExistingUserModal}
      />
    </section>
  );
}
