import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../sass/pages/myprofile.scss";
import InputFields from "../components/subcomponents/InputFields";

const MyProfile = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  // const [password, setPassword] = useState();
  const [fullname, setFullname] = useState("No data");
  const [phone, setPhone] = useState("No data");
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
          <img
            src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.15752-9/306899637_2350173745135677_9214769397321927701_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=fGl8ja12I-UAX_2kx7u&_nc_ht=scontent.fsgn8-2.fna&oh=03_AVL0SsUum1w-RhkT-vgBuM6NC6735tfh4D4usRJ99mntnw&oe=6353671E"
            alt=""
            className="background"
          />
          <img
            src={
              user?.data.avatar ||
              "https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.15752-9/306560976_1478177569326420_2543756426164044655_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-2G1HRY79g8AX9gnj1V&_nc_ht=scontent.fsgn13-4.fna&oh=03_AVJJPT5lOcfprQA8dsepUNA9iTQNfyq65lt2uhFwlDfRkg&oe=6353AE03"
            }
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
