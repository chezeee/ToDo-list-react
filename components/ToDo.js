import { useState, useCallback } from 'react';
import DeleteAllButton from './DeleteAllButton';
import InputForm from './InputForm';
import List from './List';
import { newTask } from './newTaskContent';
import css from './ToDo.module.css';

export default function ToDo({ startList = [] }) {
  const [taskList, setTaskList] = useState(startList),
    addTaskClick = useCallback((newTaskText) => {
      setTaskList((inputTask) =>
        inputTask.concat(newTask(newTaskText))
      );
    }, []),
    checkChange = useCallback((id) => {
      setTaskList((oldState) => {
        const index = oldState.findIndex(
            (el) => id === el.id
          ),
          { ...task } = oldState[index];

        task.done = !task.done;
        return oldState.with(index, task);
      });
    }, []),
    delTaskClick = useCallback(
      (id) =>
        setTaskList((tasks) =>
          tasks.filter((task) => task.id !== id)
        ),
      []
    ),
    deleteComplitedClick = useCallback(
      () =>
        setTaskList((tasks) =>
          tasks.filter((task) => !task.done)
        ),
      []
    );
  console.count('ToDo render');
  return (
    <>
      <div className={css.toDoListWrapper}>
        <InputForm addTaskClick={addTaskClick} />
        <List
          tasks={taskList}
          checkChange={checkChange}
          delTaskClick={delTaskClick}
        />
        <DeleteAllButton
          text="Удалить отмеченные"
          onClick={deleteComplitedClick}
        />
      </div>
    </>
  );
}
