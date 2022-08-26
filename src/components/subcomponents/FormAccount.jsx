import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "../../sass/components/subcomponents/formAccount.scss";
const FormAccount = ({ closeModalFormAccount }) => {
  // Default cho login = true mở sẵn.. khi lick dô thì login = false còn register = true
  // để đóng tab login mở tab reigister rùi ngược lại
  // đẳng cấp z Tủn
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  // const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);
  // const test = () => {
  //   if (login === true) {
  //     return <Login ModalLogin={setLogin} ModalRegister={setRegister} />;
  //   }
  //   if (register === true) {
  //     return <Register ModalLogin={setLogin} ModalRegister={setRegister} />;
  //   }
  // };

  return (
    // làm thêm hiện ứng zoom khi mở modal
    <div className="modal">
      <div className="modal-form">
        <button className="btnX" onClick={() => closeModalFormAccount(false)}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        {/* <div>{test()}</div> */}

        {login && <Login ModalLogin={setLogin} ModalRegister={setRegister} />}
        {register && (
          <Register ModalLogin={setLogin} ModalRegister={setRegister} />
        )}
      </div>
    </div>
  );
};

export default FormAccount;
