export function FormWrapper({ title, children }) {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumn: "auto minmax(auto, 400px) ",
        }}
      >
        {children}
      </div>
    </>
  );
}
