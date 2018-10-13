
const TODOS_KEY = 'todos_key';

export default {
  saveTodos(todos){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
  },
  readTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]');
  }
}
