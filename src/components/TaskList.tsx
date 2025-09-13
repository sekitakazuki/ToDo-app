// src/components/TaskList.tsx
import type { Task } from '../types';

type TaskListProps = {
  taskList: Task[];
  handleTaskChange: (id: number) => void;
  handleRemoveTask: (id: number) => void;
};

const TaskList = ({
  taskList,
  handleTaskChange,
  handleRemoveTask
}: TaskListProps) => {
  return (
    <ul>
      {taskList.length === 0 ? (
        <p>タスクを追加してください</p>
      ) : (
        taskList.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => handleTaskChange(task.id)}
            />
                        <span
              style={{
                textDecoration: task.isDone ? 'line-through' : 'none'
              }}
            >
              {task.name}
            </span>
            <button
              onClick={() => handleRemoveTask(task.id)}
            >
              削除
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;