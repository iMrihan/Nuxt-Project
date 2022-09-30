type TTodos = {
  todos: { id: object; name: string; done: boolean }[]
}

export default {
  addTodo(state: TTodos, payload: string) {
    state.todos.push({ id: new Date(), name: payload, done: false })
  },
  toggleDone(state: TTodos, index: number) {
    state.todos[index].done = !state.todos[index].done
  },
  deleteTodo(state: TTodos, index: number) {
    state.todos.splice(index, 1)
  },
}
