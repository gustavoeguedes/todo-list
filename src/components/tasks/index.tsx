import { Task as ITask } from '../../App';
import { Empty } from '../Empty';
import { Task } from '../task';
import styles from './styles.module.css';

export function Tasks({tasks, setTasks}: {tasks: ITask[], setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}) {
    
  
    function handleToggleTask({ id, value }: { id: string; value: boolean }) {
        const updatedTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, isCompleted: value }
          }
    
          return { ...task }
        })
    
        setTasks(updatedTasks)
    }

    function handleRemoveTask(id: string) {
        const filteredTasks = tasks.filter((task) => task.id !== id)
        
        // eslint-disable-next-line no-restricted-globals
        if (!confirm('Deseja mesmo apagar essa tarefa?')) {
            return
        }
    
        setTasks(filteredTasks)
        }
        const completedTasks = tasks.filter((task) => task.isCompleted).length
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.content}>
                    <h2 className={styles.description}>Tarefas criadas</h2>
                    <span className={styles.badge}>{tasks.length}</span>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.description}>Concluídas</h2>
                    <span className={styles.badge}>{tasks.length === 0 ? '0' : `${completedTasks} de ${tasks.length}`}</span>
                </div>
            </div>
            {tasks.length === 0 ? (<Empty />) : (
                tasks.map((task) => {
                    return <Task data={task} key={task.id} toggleTaskStatus={handleToggleTask} removeTask={handleRemoveTask}/>
                })
            ) }
            
        </div>
    )
}