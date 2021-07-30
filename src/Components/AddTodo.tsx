import React from "react";
import { useState } from "react";
import { TypeFor as TypesOf } from "../App";

interface PropsForTodoAndSetTodo {
	setTodo: React.Dispatch<React.SetStateAction<TypesOf["todos"]>>;
	todo: TypesOf["todos"];
}

const AddTodo: React.FC<PropsForTodoAndSetTodo> = ({ setTodo, todo }) => {
	const [data, setData] = useState({
		name: "",
		age: "",
		text: "",
	});

	const onHandelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};
	const onSubmit = () => {
		if (!data.name || !data.age || !data.text) {
			return;
		}
		setTodo([
			...todo,
			{
				name: data.name,
				age: parseInt(data.age),
				text: data.text,
			},
		]);

		setData({
			name: "",
			age: "",
			text: "",
		});
	};
	return (
		<div>
			<input
				type="text"
				name="name"
				value={data.name}
				onChange={onHandelChange}
			/>
			<br />
			<input
				type="text"
				name="age"
				value={data.age}
				onChange={onHandelChange}
			/>
			<br />
			<input
				type="text"
				name="text"
				value={data.text}
				onChange={onHandelChange}
			/>
			<br />
			<button onClick={onSubmit}>Submit</button>
		</div>
	);
};

export default AddTodo;
