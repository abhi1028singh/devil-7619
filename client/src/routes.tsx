
import { Route, Switch } from 'wouter';
import Welcome from './pages/Welcome';
import MainPortfolio from './pages/MainPortfolio';

export function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Welcome} />
      <Route path="/portfolio" component={MainPortfolio} />
    </Switch>
  );
}
