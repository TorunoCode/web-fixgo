import React from "react";
import "../../sass/components/subcomponents/inputFields.scss";

export const InputFields = ({ label, data, setData }) => {
	return (
		<div className='item_Input'>
			<div className='label'>{label}</div>
			<input
				type='text'
				placeholder={data}
				onChange={(e) => setData(e.target.value)}
				className='txt_input'
			/>
		</div>
	);
};
