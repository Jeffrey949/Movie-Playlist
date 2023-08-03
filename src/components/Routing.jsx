import { Route } from 'wouter';
import Watchlist from './Watchlist';
import Add from './Add';
import Watched from './Watched';
import Header from './Header';
import '../lib/font-awesome/css/all.min.css';
import { GlobalProvider } from '../context/GlobalState';

export default function Routing() {
  return (
    <GlobalProvider>
      <Header />
      <Route path="/" component={Watchlist} />
      <Route path="/watched" component={Watched} />
      <Route path="/add" component={Add} />
    </GlobalProvider>
  );
}
