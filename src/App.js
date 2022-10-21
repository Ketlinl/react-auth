import { Switch, Route } from "react-router";
import { Login } from "screens/Accounts";
import { SCREENS } from "shared/constants";

const App = () => {
  return (
    <Switch>
      <Route exact path={SCREENS.LOGIN} component={Login} />
      <Route path='*' component={Login} />
    </Switch>
  );
};

export default App;
