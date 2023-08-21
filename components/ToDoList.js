import css from './ToDoList.module.css';
import {useState} from 'react';

export default function ToDoList({text = '', startList = []}) {
	const [todoValue, setValue] = useState(text),
		[taskList, setTaskList] = useState(startList);

	function deleteTask(id) {
		setTaskList(tasks => tasks.filter(item => item.id !== id));
	}

	function handleToggle(id) {
		setTaskList(() => {
			return taskList.map(item => {
				if (item.id === id) {
					return {
						...item,
						done: !taskList.done
					};
				}
				return item;
			});
		});
	}

	function deleteComplitedTasks() {
		setTaskList(tasks => tasks.filter(item => !item.done));
	}

	return (
		<div className={css.toDoListWrapper}>
			<form>
				<input
					type="text"
					className="form-input"
					placeholder="Введите задачу"
					onChange={event => {
						setValue(event.target.value);
					}}
					value={todoValue}
				/>
				<button
					className="form-btn"
					type="submit"
					onClick={event => {
						event.preventDefault();
						if (todoValue !== '') {
							const todo = {
								id: Date.now(),
								text: todoValue,
								done: false
							};

							setValue('');
							setTaskList([todo, ...taskList]);
						}
					}}
				>
					Добавить
				</button>
			</form>

			<ul className="todo-list">
				{taskList.map(item => {
					return (
						<li className="todo-item" key={item.id}>
							<span className="todo-checkbox">
								<input type="checkbox" onClick={() => handleToggle(item.id)} />
							</span>
							<span className={item.done ? 'todo-task disabled' : 'todo-task'}>
								{item.text}
							</span>
							<span
								className="todo-item__delete-btn"
								onClick={() => deleteTask(item.id)}
							>
								×
							</span>
						</li>
					);
				})}
			</ul>
			<button
				className={'del-complited-btn'}
				onClick={() => deleteComplitedTasks()}
			>
				Удалить отмеченные
			</button>
		</div>
	);
}
