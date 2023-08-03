import { Route } from 'wouter';
import Watchlist from './Watchlist';
import Add from './Add';
import Watched from './Watched';
import Header from './Header';
import '../lib/font-awesome/css/all.min.css';
export default function Routing() {
  return (
    <>
      <Header />
      <Route path="/" component={Watchlist} />
      <Route path="/watched" component={Watched} />
      <Route path="/add" component={Add} />
    </>
  );
}
