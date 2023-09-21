import { memo } from 'react';

export default memo(function DeleteIcon({ onClick }) {
  console.count('DeleteIcon render');
  return (
    <span
      className="todo-item__delete-btn"
      onClick={onClick}
    >
      x
    </span>
  );
});
