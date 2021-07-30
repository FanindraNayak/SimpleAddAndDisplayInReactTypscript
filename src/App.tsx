import React, { useState } from "react";
import AddTodo from "./Components/AddTodo";
import Display from "./Components/Display";

export interface TypeFor {
	todos: {
		name: string;
		age: number;
		text: string;
	}[];
}

function App() {
	const [todo, setTodo] = useState<TypeFor["todos"]>([
		{
			name: "sam",
			age: 50,
			text: "hi",
		},
	]);
	return (
		<div className="App">
			<AddTodo todo={todo} setTodo={setTodo} />
			<Display todo={todo} />
		</div>
	);
}

export default App;
