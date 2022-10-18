import { Input, Grid } from "@nextui-org/react";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SendButton } from "./SendButton";
import { SendIcon } from "./SendIcon";

function ToDoForm({ todo, setTodo, todoList, setTodoList }) {

    const context = useContext(ThemeContext)
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    setTodoList([...todoList, { name: todo, id: nanoid() }]);
    setTodo("");
  };

  const handleKeyDown = (event) => {
    if(event.key === "Enter"){
        handleSubmit()
    }
  }

  return (
    <div className="container">
      <Grid >
        <Input
        css={{width:650}}
        size="lg"
          type="text"
          label=""
          value={todo}
          onChange={handleChange}
          onSubmit={handleSubmit}
          clearable
          contentRightStyling={false}
          placeholder="Type your to do..."
          onKeyDown={handleKeyDown}
          contentRight={
            <SendButton onClick={handleSubmit} css={
                {background: "linear-gradient("+context.theme.gradient+")"}
            }>
              <SendIcon />
            </SendButton>
          }
        />
      </Grid>
    </div>
  );
}

export default ToDoForm;
