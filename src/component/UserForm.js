import { FormWrapper } from "./FormWrapper";
export function UserForm(props) {
  console.log(props);
  return (
    <>
      <FormWrapper title="User Details">
        <label>First Name</label>
        <input autoFocus required type="text" />
        <label>Last Name</label>
        <input required type="text" />
        <label>Age</label>
        <input required min={1} type="number" />
      </FormWrapper>
    </>
  );
}
