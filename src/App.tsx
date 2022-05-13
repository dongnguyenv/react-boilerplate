import './App.scss';
import Todos from './features/todos/Todos';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddTodo from './features/todos/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
