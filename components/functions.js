
import TodoInput from "../components/todoInput";
import Todos from "../components/todos";
import { v4 as uuidv4 } from "uuid";
// Format the date and time as a string
const formattedDate = currentDate.toLocaleDateString(); // e.g., "9/29/2023"
const formattedTime = currentDate.toLocaleTimeString(); // e.g., "10:30:45 AM"
// Combine the date and time
const formattedDateTime = `${formattedDate} ${formattedTime}`;









const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [todos, setTodos] = useState([]);

useEffect(() => {
  console.log("Updated todos:", todos);
}, [todos]);

// creating the to do function
function createTodo() {
  const id = uuidv4();
  setTodos((prevTodos) => [
    {
      key: id,
      title: title,
      description: description,
      DateTime: formattedDateTime,
    },
    ...prevTodos,
  ]);
  console.log(title);
  console.log(description);
  setTitle("");
  setDescription("");
}
// deleting todo
function deleteTodo(id) {
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  setTodos(filteredTodos);
}
