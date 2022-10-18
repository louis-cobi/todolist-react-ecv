import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import React from 'react';
import ToggleDarkButton from "../toggleDark/ToggleDarkButton";

function Header() {
    const [darkMode, setDarkMode] = React.useState(true);
  return (
    <Navbar variant={"sticky"} style={{width:"100vw"}}>
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          TODOLIST REACT
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                auto
                as={Link}
                color="#1C1C1C"
                href="#"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.dark : themes.light);
                }}
              >
                <ToggleDarkButton/>
              </Button>
            )}
          </ThemeContext.Consumer>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}

export default Header;
