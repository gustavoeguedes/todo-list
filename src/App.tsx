
import { useState } from 'react';
import './App.css';
import { AddTask } from './components/addTask';
import { Header } from './components/header';
import { Tasks } from './components/tasks';

export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <main>
      <Header />
      
      <AddTask tasks={tasks} setTasks={setTasks}  />

      <Tasks setTasks={setTasks} tasks={tasks} />
    </main>
  );
}

export default App;
