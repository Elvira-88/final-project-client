import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import home from "./pages/home/home";
import login from "./pages/login/login";
import register from "./pages/register/register";
import courses from "./pages/courses/courses";
import team from "./pages/team/team";
import hireCourse from "./pages/hire-course/hireCourse";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Navbar/>

        <Switch>
          <Route exact path="/" component={home}/>
          <Route path="/login" component={login}/>
          <Route path="/register" component={register}/>
          <Route path="/courses" component={courses}/>
          <Route path="/team" component={team}/>  
          <Route path="/hire-course" component={hireCourse}/>         
        </Switch>

      </BrowserRouter>

      <Footer/>
 
    </div>
  );
}

export default App;
