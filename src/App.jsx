import AddTodo from "./component/AddTodo/AddTodo";
import ShowTodo from "./component/ShowTodo/ShowTodo";
import { GlobalTodoContextProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalTodoContextProvider>
      <main>
        <AddTodo />
        <ShowTodo />
      </main>
    </GlobalTodoContextProvider>
  );
}

export default App;
