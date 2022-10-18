import { Button, Card, Text, Grid } from "@nextui-org/react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function ToDoListItem({ listItem, todoList, setTodoList }) {
    /*useEffect(() => {
        // Your code here
      }, []);*/
   const context = useContext(ThemeContext)   
  const deleteTodoItem = () => {
    setTodoList(todoList.filter((item) => item.id !== listItem.id));
  };
  return (
    <Card isHoverable css={{ background: context.theme.backgoundItem}} className="slide-in transition">
      <Grid.Container alignItems="center">
        <Grid xs={10}>
          <Text size="$2xl" css={{ marginLeft: 30, color: context.theme.color }}>
            {listItem.name}
          </Text>
        </Grid>
        <Grid xs={2}>
          <Button onClick={deleteTodoItem} auto className="transition"
        css={
            {background: "linear-gradient("+context.theme.gradient+")", transition: "450ms ease-in-out;", transform: "scale(1)"}
        }>
            Done
          </Button>
        </Grid>
      </Grid.Container>
    </Card>
  );
}

export default ToDoListItem;
