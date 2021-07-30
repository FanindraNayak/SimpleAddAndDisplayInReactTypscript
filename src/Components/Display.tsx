import React from "react";
import { TypeFor as TypeOf } from "../App";

interface PropsForTodo {
	todo: TypeOf["todos"];
}

const Display: React.FC<PropsForTodo> = ({ todo }) => {
	return (
		<div>
			dsfd
			{todo.map((todosThing, i) => {
				return (
					<div key={i + 1}>
						<h1>{i + 1}</h1>
						<h1>{todosThing.name}</h1>
						<h1>{todosThing.age}</h1>
						<h1>{todosThing.text}</h1>
						<br />
					</div>
				);
			})}
		</div>
	);
};

export default Display;
