import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoDetails from './pages/TodoDetails'

function App() {
  return (
    <div>
      <Router>
         <Switch>
            <Route exact path="/" component={TodoList}/>
            <Route exact path="/todo-details" component={TodoDetails}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
