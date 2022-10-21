import { Switch, Route } from "react-router";
import { Login, Profile } from "screens/Accounts";
import { SCREENS } from "shared/constants";

const App = () => {
  return (
    <Switch>
      <Route exact path={SCREENS.LOGIN} component={Login} />
      <Route exact path={SCREENS.PROFILE} component={Profile} />
      <Route path='*' component={Login} />
    </Switch>
  );
};

export default App;
