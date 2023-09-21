import { memo, useState, useRef, useCallback } from 'react';
import AddButton from './AddButton';

export default memo(function InputForm({
  startValue = '',
  addTaskClick,
}) {
  const [value, setValue] = useState(startValue),
    textRef = useRef(''),
    onClick = useCallback(
      () => addTaskClick(textRef.current),
      [addTaskClick]
    );

  textRef.current = value;
  console.count('InputForm render');
  return (
    <fieldset>
      <input
        className="form-input"
        placeholder="Введите задачу"
        onInput={(event) => {
          setValue(event.currentTarget.value);
        }}
        value={value}
      />
      <AddButton text="Добавить" onClick={onClick} />
    </fieldset>
  );
});
