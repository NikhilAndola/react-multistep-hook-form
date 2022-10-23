import { FormWrapper } from "./FormWrapper";

export function AddressForm() {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input autoFocus required type="text" />
      <label>City</label>
      <input required type="text" />
      <label>State</label>
      <input required min={1} type="number" />
      <label>Zip</label>
      <input required min={1} type="number" />
    </FormWrapper>
  );
}
