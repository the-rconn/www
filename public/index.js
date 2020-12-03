/**@jsx h */
import { render, h } from 'preact';
import { Route, Router, Switch } from 'wouter'
import Header from '../components/Header';
import Main from '../components/Main';
import Shop from '../components/Shop';
import NotFound from '../components/404'
function App() {
	return <div>
		<Header />
		<Switch>
			<Route path="/">
				<Main />
			</Route>
			<Route path="/shop">
				<Shop />
			</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	</div>;
}

render(<App />, document.body);