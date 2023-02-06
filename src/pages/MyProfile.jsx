import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { loginUser } from "../redux/apiRequest";
import "../sass/pages/myprofile.scss";
import InputFields from "../components/subcomponents/InputFields";
import AvtDefault from "../assets/images/avt_user_default.png";
import BackgroundDefault from "../assets/images/backgroudUserDefault.png";
// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const MyProfile = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  // const [password, setPassword] = useState();
  const [fullname, setFullname] = useState(user?.data.fullName || "No data");
  const [phone, setPhone] = useState(user?.data.phone || "No data");
  const [avatar, setAvatar] = useState(user?.data.avatar || "Default");
  const [gender, setGender] = useState(user?.data.gender || "No data");
  // const [dateofBbirth, setDateofBirth] = useState("01-01-2001");
  const [biography, setBiography] = useState(
    user?.data.biography ||
      "I’m everything you ever want to be but can’t have or be."
  );

  // validate input
  // full name
  // 1 tên bao gồm 2 từ trển lên
  // trong tên chỉ được phép có chữ và khoảng trắng
  // 1 tên có tối đa 5 từ
  // 1 từ có tối da 6 ký tự
  // giữa 2 từ chỉ được phép có 1 khoảng trắng
  const [validationMsg, setValidationMsg] = useState({});

  const validateAll = () => {
    var reg_fullname =
      /^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]{2,6})((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]{2,6}){1,4})$/;
    var reg_phone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var reg_avatar = /\.(jpeg|jpg|gif|png)$/;
    const msg = {};

    if (!reg_fullname.test(fullname.toLowerCase())) {
      msg.fullname = "Your-fullname is incorrect";
    }

    if (!reg_phone.test(phone)) {
      msg.phone = "Your-phone is incorrect";
    }
    if (!reg_avatar.test(avatar)) {
      msg.avatar = "The url is incorrect";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  // var check =
  //   /^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]{2,6})((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]{2,6}){1,4})$/;
  // var text1 = "trần Tiến phát";
  // var text2 = "Trần Tiếnasdsadasdasdas";
  // var text3 = "trần tiến phát trần tiến";

  // console.log(check.test(text1.toLowerCase()));
  // console.log(check.test(text2));
  // console.log(check.test(text3));

  // post edit profile
  const handleEdit = async (e) => {
    e.preventDefault();
    // setOpenModal(false);
    const newEdit = {
      _id: user.data._id,
      biography: biography,
      avatar: avatar,
      gender: gender,
      phone: phone,
      fullName: fullname,
    };
    const isValid = validateAll();
    if (!isValid) return;
    else
      try {
        await axios.post(
          `https://backend-boo.vercel.app/api/user/update`,
          newEdit
        );
        toast.success("Edit success !", { autoClose: 2000 });
      } catch (err) {
        toast.error("Failed to edit!", { autoClose: 2000 });
      }
    await handleEdit();
  };
  useEffect(() => {
    loginUser();
  }, [user?.data]);
  return (
    <div className="container_myprofile">
      <div className="main">
        <div className="image">
          <img src={BackgroundDefault} alt="" className="background" />
          <img src={avatar || AvtDefault} alt="" className="avt_user" />
        </div>
        <div className="row_mid">
          <div className="name">{user?.data.fullName || user?.data.name}</div>

          <div className="biography">{user?.data.biography || biography}</div>
        </div>
        <div className="text">Info default</div>

        <div className="default_main">
          <div className="left">User:</div>
          <div className="default">{user?.data.name}</div>
          <div className="left">Email:</div>
          <div className="default">{user?.data.email}</div>
          <div className="left">Account creation date:</div>
          <div className="default">
            {user?.data.createdAt.slice(0, 10).split("-").reverse().join("-")}
          </div>
          <div className="left">Update profile date: </div>
          <div className="default">
            {user?.data.updatedAt.slice(0, 10).split("-").reverse().join("-")}
          </div>
        </div>

        <div className="text">Form edit profile</div>

        <form action="" className="form_edit" onSubmit={handleEdit}>
          <div className="main_form">
            <div className="text_title">Change your information</div>
            <InputFields
              label="Full name: "
              data={fullname}
              setData={setFullname}
            />

            {validationMsg.fullname && (
              <i className="validate">{validationMsg.fullname}</i>
            )}
            <InputFields label="Phone:" data={phone} setData={setPhone} />
            {validationMsg.phone && (
              <i className="validate">{validationMsg.phone}</i>
            )}
            <InputFields
              label="Biography:"
              data={biography}
              setData={setBiography}
            />

            <InputFields label="Gender:" data={gender} setData={setGender} />
            <InputFields
              label="Link avatar:"
              data={avatar}
              setData={setAvatar}
            />
            {validationMsg.avatar && (
              <i className="validate">{validationMsg.avatar}</i>
            )}
            <button className="btnEdit">Edit now</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyProfile;
