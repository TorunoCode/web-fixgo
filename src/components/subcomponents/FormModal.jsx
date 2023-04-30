import React, { useState } from "react";
import "../../sass/components/subcomponents/formModal.scss";
import { useSelector } from "react-redux";

import { Loading } from "../Loading";
import { LoginFacebook } from "./LoginFacebook";
import { LoginGoogle2 } from "./LoginGoogle2";
import { Login } from "./Login";
import { Register } from "./Register";

export const FormModal = ({ setOpenModal }) => {
	const [login, setLogin] = useState(true);

	const is1 = useSelector((state) => state.auth.login.isFetching);
	const is2 = useSelector((state) => state.auth.register.isFetching);

	return (
		<div className='modal'>
			{is1 && <Loading />}
			{is2 && <Loading />}
			<div className='modal-form'>
				<button
					className='btnX'
					onClick={() => {
						setOpenModal(false);
					}}
				>
					<i class='fa-solid fa-xmark'></i>
				</button>

				{/* customize code */}
				{login ? (
					<Login ModalLogin={setLogin} />
				) : (
					<Register ModalLogin={setLogin} />
				)}

				<div className='txt'>--- or sign in with ---</div>
				<div className='login_icon'>
					<LoginFacebook />
					<LoginGoogle2 />
				</div>

				{/* {login && <Login ModalLogin={setLogin} ModalRegister={setRegister} />}
        {register && (
          <Register ModalLogin={setLogin} ModalRegister={setRegister} />
        )} */}
			</div>
		</div>
	);
};
