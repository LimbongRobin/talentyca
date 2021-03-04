import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Penilaian from "../src/views/Penilaian";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            name="main"
            render={(props)=><Penilaian{...props}></Penilaian>}
          >
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
