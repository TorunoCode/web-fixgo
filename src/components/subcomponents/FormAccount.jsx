import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "../../sass/components/subcomponents/formAccount.scss";
const FormAccount = ({ closeModalFormAccount }) => {
  // Default cho login = true mở sẵn.. khi lick dô thì login = false còn register = true
  // để đóng tab login mở tab reigister rùi ngược lại
  // đẳng cấp z Tủn
  const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);

  return (
    // làm thêm hiện ứng zoom khi mở modal
    <div className="modal">
      <div className="modal-form">
        <button className="btnX" onClick={() => closeModalFormAccount(false)}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        {/* customize code */}
        {login ? (
          <Login ModalLogin={setLogin} />
        ) : (
          <Register ModalLogin={setLogin} />
        )}

        {/* {login && <Login ModalLogin={setLogin} ModalRegister={setRegister} />}
        {register && (
          <Register ModalLogin={setLogin} ModalRegister={setRegister} />
        )} */}
      </div>
    </div>
  );
};

export default FormAccount;
