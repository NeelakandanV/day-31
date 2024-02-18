import './App.css';
import BaseApp from './Crud_components/Base';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Crud_components/Home';
import StudReadComp from './Crud_components/Student_read';
import AppProvider from './Context/ContextProvider';
import StudCreateComp from './Crud_components/Student_create';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import StudViewComp from './Crud_components/Student_view';
import StudEditComp from './Crud_components/Student_edit';
import TeacReadComp from './Crud_components/Teacher_read';
import TeacCreateComp from './Crud_components/Teacher_create';
import TeacViewComp from './Crud_components/Teacher_view';
import TeacEditComp from './Crud_components/Teacher_edit';
import NoPageComp from './Crud_components/NoPage';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/StudentHome">
          <StudReadComp/>
        </Route>

        <Route path="/CreateStudent">
          <StudCreateComp/>
        </Route>

        <Route path="/ViewStudent/:id">
          <StudViewComp/>
        </Route>

        <Route path="/EditStudent/:id">
          <StudEditComp/>
        </Route>

        <Route path="/TeacherHome">
          <TeacReadComp/>
        </Route>

        <Route path="/CreateTeacher">
          <TeacCreateComp/>
        </Route>

        <Route path="/ViewTeacher/:id">
          <TeacViewComp/>
        </Route>

        <Route path="/EditTeacher/:id">
          <TeacEditComp/>
        </Route>

        <Route path="**">
          <NoPageComp/>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
