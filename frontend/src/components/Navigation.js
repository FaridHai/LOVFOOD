import styled from "styled-components/macro";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "auto",
    backgroundColor: "#008080",
    borderRadius: "12px",
  },
  navi: {
    color: "white",
  },
});

export default function Navigation({ searchedClicked }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Wrapper>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          className={classes.navi}
          component={Link}
          to="/"
          label="Startseite"
          color={"white"}
          icon={<HomeIcon style={{ color: "white" }} />}
        />
        <BottomNavigationAction
          className={classes.navi}
          component={Link}
          to="/recipes"
          label="Rezepte"
          icon={<FastfoodIcon style={{ color: "white" }} />}
        />
        {searchedClicked && (
          <BottomNavigationAction
            className={classes.navi}
            component={Link}
            to="/filteredSearch"
            label="Suchergebnis"
            icon={<SearchIcon style={{ color: "white" }} />}
          />
        )}
      </BottomNavigation>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: grid;
  justify-content: center;
  padding: 10px;
`;