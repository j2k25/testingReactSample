import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

//const { getByText, debug } = render(<App/>);

test('canary test', () => {
	expect(true).toBe(true);
});


test('render hi - using get', () => {
	const { getByText } = render(<App/>);
	
	const element = getByText(/Hi!/);
	
	expect(element).toBeInTheDocument();
//	console.log(element);

});


test('render hi - using query', () => {
	const { queryByText } = render(<App/>);
	
	const element = queryByText(/Hi!/);
	const element2 = queryByText(/Hello There!/);

	expect(element).toBeInTheDocument();
	expect(element2).toBe(null);

//	console.log(element);

});


test('render hello there - using find (async*Promise)', async() => {
	const { findByText } = render(<App/>);
	
	const element = 
		await(waitFor(() => findByText(/Hello There!/), {timeout: 3500}));
		
	expect(element).toBeInTheDocument();
//	console.log(element);

});


test('summary', () => {
	const log = render(<App/>);

	console.log(log);
});


test('debug', () => {
	const { debug } = render(<App/>);

	debug();	
});

