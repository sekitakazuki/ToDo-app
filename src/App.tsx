// src/App.tsx
import { useState } from 'react';
import type { FormEvent } from 'react';
import Filter from '/src/components/Filter';
import './App.css';
import Title from './components/Title';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import type { Task } from './types';

function App() {
  const [inputTask, setInputTask] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [id, setId] = useState(1);
  const [filter, setFilter] = useState<FilterType>('ALL');
    // タスク追加処理
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputTask === '') return;

    const newTask: Task = {
      id: id,
      name: inputTask,
      isDone: false,
    };

    setTaskList([...taskList, newTask]);
    setId(id + 1);
    setInputTask('');
  };
    // タスクの完了状態を切り替え
  const handleTaskChange = (taskId: number) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  // タスクを削除
  const handleRemoveTask = (taskId: number) => {
    const newTaskList = taskList.filter(
      (task) => task.id !== taskId
    );
    setTaskList(newTaskList);
  };
    return (
    <>
      <div className="todo">
        <Title str="ToDo App" />
        <AddTask
          inputTask={inputTask}
          setInputTask={setInputTask}
          handleSubmit={handleSubmit}
        />
        <TaskList
          taskList={taskList}
          handleTaskChange={handleTaskChange}
          handleRemoveTask={handleRemoveTask}
        />
      </div>
    </>
  );
}

export default App;