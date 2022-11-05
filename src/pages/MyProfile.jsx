import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../sass/pages/myprofile.scss";
import InputFields from "../components/subcomponents/InputFields";
import AvtDefault from "../assets/images/avt_user_default.png";
import BackgroundDefault from "../assets/images/backgroudUserDefault.png";

const MyProfile = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  // const [password, setPassword] = useState();
  const [fullname, setFullname] = useState("No data");
  const [phone, setPhone] = useState("No data");
  const [createdAt, setCreatedAt] = useState("");
  // const [avatar, setAvatar] = useState("Default avatar");
  // const [gender,setGender] = useState("No data");
  // const [dateofBbirth, setDateofBirth] = useState("01-01-2001");
  const [biography, setBiography] = useState(
    " I’m everything you ever want to be but can’t have or be."
  );
  // const [] = useState("No data");
  // const [] = useState("No data");
  return (
    <div className="container_myprofile">
      <div className="main">
        <div className="image">
          <img src={BackgroundDefault} alt="" className="background" />
          <img
            src={user?.data.avatar || AvtDefault}
            alt=""
            className="avt_user"
          />
        </div>
        <div className="name">{user?.data.fullname || user?.data.name}</div>
        <div className="biography">{user?.data.biography || biography}</div>
        <form action="" className="form_edit">
          <div className="main_form">
            <InputFields
              label="Full name: "
              data={fullname}
              setData={setFullname}
            />
            <InputFields label="Email:" data={user?.data.email} />
            <InputFields label="Phone:" data={phone} setData={setPhone} />
            <InputFields
              label="Account creation date:"
              data={user?.data.createdAt
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("-")}
              setData={setCreatedAt}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
