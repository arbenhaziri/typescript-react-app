import React, { useEffect } from "react";
import { getInventory } from "../../actions/appBar";
import { useAppDispatch, useAppSelector } from "../../hooks";
import EmptyState from "../EmptyState";

function Intentory() {
  const dispatch = useAppDispatch();
  const { category, inventory, action } = useAppSelector(
    (state) => state.appBar
  );

  useEffect(() => {
    if (category) {
      dispatch(getInventory(category));
    }
  }, [category]);

  return (
    <div className="container">
      <h2>Inventory</h2>
      {action.isLoading ? (
        <p>Loading...</p>
      ) : (
        <EmptyState state={inventory}>
          <div className="d-flex">
            <div className="card">
              <h4>Total Forecast Number</h4>
              <p>{inventory?.totalDemand}</p>
            </div>
            <div className="card">
              <h4>Total Optimal Number</h4>
              <p>{inventory?.totalProduction}</p>
            </div>
            <div className="card">
              <h4>Total Sales</h4>
              <p>{inventory?.totalDemand + inventory?.totalProduction}</p>
            </div>
          </div>
        </EmptyState>
      )}
    </div>
  );
}

export default Intentory;
