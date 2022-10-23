import { FormWrapper } from "./FormWrapper";

export function AccountForm({ email, password, updateFields }) {
  return (
    <FormWrapper title="Account creation">
      <label>Email</label>
      <input
        autoFocus
        required
        type="text"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="text"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
