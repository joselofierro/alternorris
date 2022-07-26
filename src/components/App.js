import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from '../contexts/Auth'
import { Signup } from './Signup'
import { Login } from './Login'
import { Dashboard } from './Dashboard'
import { PrivateRoute } from './PrivateRoute'
import '../App.css';


function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
              <PrivateRoute exact path="/" component={Dashboard}/>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
