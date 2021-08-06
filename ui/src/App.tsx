import { Switch, Route } from 'react-router-dom'
import './App.css';
import SiteLayout from './wedding/site-layout';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <SiteLayout />
        </Route>
      </Switch>
    </>
  );
}

export default App;
