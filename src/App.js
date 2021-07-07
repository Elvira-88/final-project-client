import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AuthContext from "./context/AuthContext";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Courses from "./pages/courses/Courses";
import Team from "./pages/team/Team";
import HireCourse from "./pages/hire-course/HireCourse";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <div className="App">
      <AuthContext>
          <BrowserRouter>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/courses" component={Courses}/>
              <Route path="/team" component={Team}/>  
              <Route path="/hire-course/:id" component={HireCourse}/>  
              <Route path="/admin" component={Admin}/>                      
            </Switch>
          </BrowserRouter>
      </AuthContext>
      <Footer/>
 
    </div>
  );
}

export default App;
