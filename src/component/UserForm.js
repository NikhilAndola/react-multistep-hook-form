import { FormWrapper } from "./FormWrapper";
export function UserForm({ firstName, lastName, age, updateFields }) {
  // console.log(props);
  return (
    <>
      <FormWrapper title="User Details">
        <label>First Name</label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
        <label>Last Name</label>
        <input
          required
          type="text"
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
        <label>Age</label>
        <input
          required
          min={1}
          type="number"
          value={age}
          onChange={(e) => updateFields({ age: e.target.value })}
        />
      </FormWrapper>
    </>
  );
}
