import { Inventory, Homepage } from "../../interfaces";

type Props = {
  state: Inventory | Homepage;
  children: JSX.Element;
};

const EmptyState = ({ state, children }: Props) => {
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
};

export default EmptyState;
