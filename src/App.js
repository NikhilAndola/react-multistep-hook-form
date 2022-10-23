import "./styles.css";
import React, { useState } from "react";
import { useMultistepForm } from "./useMultistepForm";
import { AccountForm, AddressForm, UserForm } from "./component";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

export default function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <UserForm {...data} />,
      <AddressForm {...data} />,
      <AccountForm {...data} />,
    ]);

  const onSubmit = (e) => {
    e.preventDefault();
    next();
  };
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}
