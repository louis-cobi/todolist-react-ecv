import { useState, useContext } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { Text } from "@nextui-org/react";
import { ThemeContext } from "../../contexts/ThemeContext";

function ToDo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const context = useContext(ThemeContext);

  return (
    <div className="container">
      <Text
        h1
        css={
            {textGradient : context.theme.gradient}
        }
      >
        Add ToDo :
      </Text>
      <ToDoForm
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <ToDoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default ToDo;
