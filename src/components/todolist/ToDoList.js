import ToDoListItem from "./ToDoListItem";
import { Spacer, Container } from "@nextui-org/react";

function ToDoList({ todoList, setTodoList }) {
  return (
    <Container xs>
      {todoList.map((listItem) => (
        <>
        <Spacer y={2}/>
        <ToDoListItem
          todoList={todoList}
          setTodoList={setTodoList}
          listItem={listItem}
          name={listItem.name}
          key={listItem.id}
        />
        </>
      ))}
    </Container>
  );
}

export default ToDoList;
