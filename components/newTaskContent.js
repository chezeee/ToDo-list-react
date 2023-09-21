export function newTask(text) {
  return { id: Math.random(), text, done: false };
}
