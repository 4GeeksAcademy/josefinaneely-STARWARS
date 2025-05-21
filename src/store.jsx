import React, { useReducer } from "react";

export const initialStore = () => ({
  message: null,
  todos: [
    { id: 1, title: "Make the bed", background: null },
    { id: 2, title: "Do my homework", background: null }
  ],
  favorites: []
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        )
      };
    case 'ADD_FAVORITE':
      if (store.favorites.find(item => item.id === action.payload.id)) return store;
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    case 'REMOVE_FAVORITE':
      return {
        ...store,
        favorites: store.favorites.filter(item => item.id !== action.payload.id)
      };
    default:
      throw Error('Unknown action.');
  }
}

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialStore());
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};