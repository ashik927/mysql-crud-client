import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllCountries from './components/AllCountries';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateData from './components/UpdateData';

function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route exact path="/">
            <AllCountries></AllCountries>
         </Route>
         <Route path="/update/:id">
           <UpdateData></UpdateData>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
