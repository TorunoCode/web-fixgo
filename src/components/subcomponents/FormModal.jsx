import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "../../sass/components/subcomponents/formModal.scss";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import LoginFacebook from "./LoginFacebook";
import LoginGoogle2 from "./LoginGoogle2";

const FormModal = ({ setOpenModal }) => {
  // Default cho login = true mở sẵn.. khi lick dô thì login = false còn register = true
  // để đóng tab login mở tab reigister rùi ngược lại
  // đẳng cấp z Tủn
  const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);

  const is1 = useSelector((state) => state.auth.login.isFetching);
  const is2 = useSelector((state) => state.auth.register.isFetching);

  return (
    // làm thêm hiện ứng zoom khi mở modal
    <div className="modal">
      {is1 && <Loading />}
      {is2 && <Loading />}
      <div className="modal-form">
        <button
          className="btnX"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>

        {/* customize code */}
        {login ? (
          <Login ModalLogin={setLogin} />
        ) : (
          <Register ModalLogin={setLogin} />
        )}

        <div className="txt">--- or sign in with ---</div>
        <div className="login_icon">
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

export default FormModal;
