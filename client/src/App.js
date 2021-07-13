import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Signin from './pages/Signin';
import Dashbord from './pages/Dashbord';
import {useDispatch} from "react-redux"
import { authedUser } from './Redux/actions/userActions';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const dispatch = useDispatch()
  const getUser = () => dispatch(authedUser())
  useEffect(() => {
    getUser()
  }, [])
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Signin} />
        {/* <Route path="/auth" component={Dashbord} /> */}
        {/* <PrivateRoute path="/auth" render={(props) => <Dashbord {...props} />}  /> */}
        <PrivateRoute path="/auth" component={Dashbord}  />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
