function EmptyState({ state, children }: any) {
  if (state) return <>{children}</>;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "22px" }}>Please select a category...</p>
    </div>
  );
}

export default EmptyState;
