import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';

function App() {
	
	const [greet, setGreet] = useState("Hi!");

	useEffect(() => {
		setTimeout(() => setGreet("Hello There!"), 3000); // 996
	}, []);
	
	return (
		<div className="App">
		{ greet }
		</div>
  );
}

export default App;
