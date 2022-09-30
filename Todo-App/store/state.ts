import { uid } from 'uid'

export default () => ({
  todoText: '',
  errorMessage: '',
  todos: [{ id: new Date(), name: 'My First Todo', done: false }],
})
