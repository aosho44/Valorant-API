import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { CharacterView } from './/components/characters/CharactersView';
// import { Footer } from './components/Footer/Footer';
// import { Header } from './components/Header/Header';
import { Home } from './components/main/Home';
import { MapView } from './components/maps/MapsView';
import { PageNotFound } from './components/404/PageNotFound';
import { WeaponView } from './components/weapons/WeaponsView';
import { CharacterSingleView } from './components/characters/CharacterSingleViews';
import { CharacterRoute } from './components/routing/characterRoute';

function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/agents">Agents</Link>
					</li>
					<li>
						<Link to="/maps">Maps</Link>
					</li>
					<li>
						<Link to="/weapons">Weapons</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/agents" element={<CharacterRoute />}>
					<Route index element={<CharacterView />} />
					<Route path="/agents/:id" element={<CharacterSingleView />} />
				</Route>
				<Route path="/maps" element={<MapView />} />
				<Route path="/weapons" element={<WeaponView />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
