import { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Intentory from "./components/Inventory";
import HomePage from "./components/HomePage";
import MenuAppBar from "./components/MenuAppBar";
import { getMetadata } from "./actions/appBar";
import { useAppDispatch, useAppSelector } from "./hooks";

function App() {
  const dispatch = useAppDispatch();
  const { metaData } = useAppSelector((state) => state.appBar);

  useEffect(() => {
    if (!metaData) {
      dispatch(getMetadata());
    }
  }, [dispatch, metaData]);

  return (
    <BrowserRouter>
      <MenuAppBar category={metaData?.categories} />
      <div style={{ width: "79%", padding: "30px" }}>
        <Routes>
          <Route path="/inventory" element={<Intentory />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
