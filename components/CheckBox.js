import { memo } from 'react';

export default memo(function CheckBox({
  checked,
  onChange,
}) {
  console.count('CheckBox render');
  return (
    <span className="todo-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </span>
  );
});
