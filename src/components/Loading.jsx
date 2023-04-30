import React from "react";
import ReactLoading from "react-loading";
import "../sass/components/loading.scss";

export const Loading = () => {
	return (
		<div className='parent'>
			<div className='loading'>
				<ReactLoading type='spin' color='orange' height={80} width={80} />
			</div>
		</div>
	);
};
