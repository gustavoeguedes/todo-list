import { useState } from 'react'
import styles from './styles.module.css'
import { PlusCircle } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../../App';

interface AddTaskProps {
    setTasks: React.Dispatch<React.SetStateAction<any[]>>;
    tasks: Task[];
}

export function AddTask({setTasks, tasks}: AddTaskProps) {
    const [task, setTask] = useState('')
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (task.trim() === '') {
            return
        }
       const newTask = {
        id: uuidv4(),
        title: task,
        isCompleted: false
       }
         setTasks([...tasks, newTask])
        setTask('')
    }
    
    
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" placeholder="Adicionar uma nova tarefa" className={styles.input} value={task} onChange={(e) => setTask(e.target.value)} />
            <button type="submit" className={styles.button}>
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    )
}