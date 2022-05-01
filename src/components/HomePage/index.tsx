import React, { useEffect } from "react";
import EmptyState from "../EmptyState";
import { getHomePage } from "../../actions/appBar";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "./style.scss";

function HomePage() {
  const dispatch = useAppDispatch();
  const { category, homePageData, action } = useAppSelector(
    (state) => state.appBar
  );

  useEffect(() => {
    if (category) {
      dispatch(getHomePage(category));
    }
  }, [category, dispatch]);

  return (
    <div className="container">
      <h2>Home Page</h2>
      {action.isLoading ? (
        <p>Loading...</p>
      ) : (
        <EmptyState state={homePageData}>
          <div className="d-flex">
            <div className="card">
              <h4>Total Forecast Number</h4>
              <p>{homePageData?.totalForecastNumber}</p>
            </div>
            <div className="card">
              <h4>Total Optimal Number</h4>
              <p>{homePageData?.totalOptimalNumber}</p>
            </div>
            <div className="card">
              <h4>Total Sales</h4>
              <p>{homePageData?.totalSales}</p>
            </div>
          </div>
        </EmptyState>
      )}
    </div>
  );
}

export default HomePage;
