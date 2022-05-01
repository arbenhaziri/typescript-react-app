import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Drawer, Divider } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { setCategory, setNavTab } from "../../actions/appBar";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const pages = ["Home", "Inventory"];
const drawerStyle = {
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
  },
};

const MenuAppBar = React.memo(({ category }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (page: string) => {
    dispatch(setNavTab(page));
    page === "Home" ? navigate("/") : navigate(`/${page.toLocaleLowerCase()}`);
  };

  const handleDropDown = (category: number) => {
    dispatch(setCategory(category));
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page: string) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={() => handleClick(page)}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer sx={drawerStyle} variant="permanent" anchor="right">
        <Toolbar />
        <Divider />
        <div className="form-wrap">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            onChange={(e: any) => handleDropDown(e.target.value)}
          >
            <option value="">Select Category</option>
            {category?.map((el: any) => (
              <option key={el.id} value={el.id}>
                {el.label}
              </option>
            ))}
          </select>
        </div>
      </Drawer>
    </>
  );
});
export default MenuAppBar;
