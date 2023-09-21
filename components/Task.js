import CheckBox from './CheckBox';
import DeleteIcon from './DeleteIcon';
import { memo, useCallback } from 'react';

export default memo(function Task({
  task,
  checkChange,
  delTaskClick,
}) {
  const { id, text, done } = task;
  console.count('Task render');
  return (
    <li className="todo-item">
      <CheckBox
        checked={done}
        onChange={useCallback(() => checkChange(id), [])}
      />
      <span
        className={
          done ? 'todo-task disabled' : 'todo-task'
        }
      >
        {text}
      </span>
      <DeleteIcon onClick={useCallback(() => delTaskClick(id),[])} />
    </li>
  );
});
