import { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import TaskList from "./components/TaskList/TaskList";
import "./styles.css";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingtasks) => {
      return [...existingtasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingtasks) => {
      return existingtasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingtasks) => {
      return existingtasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Andamento"
          onAddTask={addTask}
          taskState="Andamento"
          tasks={tasks.filter((t) => t.state === "Andamento")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Concluido"
          onAddTask={addTask}
          taskState="Concluido"
          tasks={tasks.filter((t) => t.state === "Concluido")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
