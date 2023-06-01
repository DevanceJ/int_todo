import {create} from 'zustand';

const store = (set) => ({
    todos: [],
    fetchTodos: async () => {
        try {
          const response = await fetch('https://646587c9228bd07b354c86ae.mockapi.io/api/v1/todos');
          const data = await response.json();
          set({ todos: data });
        } catch (error) {
          console.error('Error fetching todos:', error);
        }
      },
    
    addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })),
  
    deleteTodo: (todoId) =>
      set((state) => ({ todos: state.todos.filter((todo) => todo.id !== todoId) })),
  });

export const useStore = create(store);
 
