import React from "react";
import "../../sass/components/subcomponents/notFound.scss";
import notFound from "../../assets/images/NotFound.gif";

export const NotFound = () => {
	return (
		<div className='notfound'>
			<img src={notFound} alt='' />
		</div>
	);
};
