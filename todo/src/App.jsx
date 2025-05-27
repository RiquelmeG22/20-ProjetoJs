
import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from "./components/TodoForm";

import Search from './components/search';
import Filter from './components/Filter';
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1, 
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,  // Corrigido o nome da propriedade
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,  // Corrigido o nome da propriedade
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,  // Corrigido o nome da propriedade
    }
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text, 
      category,
      isCompleted: false,  // Corrigido o nome da propriedade
    }];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted }; // Alteração correta
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search  search={search} setSearch={setSearch}/>
      <Filter  filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos
        .filter((todos) => 
          filter === "All"
            ? true : filter === "Completed"
            ? todos.isCompleted
            : !todos.isCompleted)
        .filter((todos) => todos.text.toLowerCase().includes(search.toLocaleLowerCase()))
        .sort((a, b) =>
        sort === "Asc" 
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text))
        .map((todo) => (
          <Todo key={todo.id}
           todo={todo} 
           removeTodo={removeTodo}
           completeTodo={completeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
