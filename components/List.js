import Task from './Task';

export default function List({
  tasks,
  checkChange,
  delTaskClick,
}) {
  console.count('List render');
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          checkChange={checkChange}
          delTaskClick={delTaskClick}
        />
      ))}
    </ul>
  );
}
