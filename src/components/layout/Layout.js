import { Box } from "./Box.js";
import ToDo from "../todolist/ToDo.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <ToDo/>
  </Box>
);