/**@jsx h */
import { render, h } from 'preact';
import { Route, Router, Switch, useLocation } from 'wouter'
import Header from '../components/Header';
import Main from '../components/Main';
import Projects from '../components/Projects';
import NotFound from '../components/404'
import Thing from '../components/Thing';
function App() {
    const [loc, setLoc] = useLocation();
    (
        document.title = `Rconn - ${loc.split('/')[1].split('').map((c,i)=>i==0?c.toUpperCase():c).join('') || 'Home'}`
    )
	return <div>
        {(loc != '/thing') && <Header />}
		<Switch>
			<Route path="/">
				<Main />
			</Route>
			<Route path="/projects">
				<Projects />
			</Route>
            <Route path="/thing">
                <Thing />
            </Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	</div>;
}

render(<App />, document.body);
