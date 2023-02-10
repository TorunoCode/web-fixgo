import React, { useState, useEffect, useRef } from "react";
import AvtDefault from "../assets/images/avt_user_default.png";
//asdas
import "../sass/components/header.scss";
import { Link } from "react-router-dom";
import FormModal from "./subcomponents/FormModal.jsx";
import { useSelector } from "react-redux";
// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { GoogleLogout } from "@leecheuk/react-google-login";

const Header = () => {
  // xử lí lấy 2 chữ cuối trong name .split(' ').slice(-2).join(' ')
  const [openModal, setOpenModal] = useState(false);
  const [afterlogin, setAfterLogin] = useState(false);
  const user = useSelector((state) => state.auth.login?.currentUser);
  const name = useSelector(
    (state) => state.auth.login?.currentUser?.data?.name
  );
  let ref = useRef();
  // click chuột ngoài tắt UI
  useEffect(() => {
    let handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setAfterLogin(false);
        setQuery(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const clientId =
    "1049176429942-4243i6lqlhfu6cdcbu4lk9aitn2tijj6.apps.googleusercontent.com";

  // xử lí logout
  const handleLogOut = (e) => {
    window.location.reload();
    localStorage.clear();
    // window.FB.logout();
    toast.success("Logout success!", { autoClose: 2000 });
  };
  const onSuccess = () => {
    console.log("Success logout google");
  };
  const handelLose = () => {
    setQuery(false);
  };
  // features search
  const [listMovie, setListMovie] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      let res = await axios.get("https://backend-boo.vercel.app/api/movies");
      try {
        setListMovie(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const handleShow1 = () => {
    setShow1(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
  };
  const handleShow2 = () => {
    setShow1(false);
    setShow2(true);
    setShow3(false);
    setShow4(false);
  };
  const handleShow3 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(true);
    setShow4(false);
  };
  const handleShow4 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(true);
  };
  return (
    <header>
      <div className="header">
        <div className="main">
          <Link to="/Home" style={{ textDecoration: "none" }}>
            <div className="logo">FixGo</div>{" "}
          </Link>
          <div className="navbar">
            <ul>
              <Link to="/Home">
                <li
                  onClick={() => handleShow1()}
                  style={
                    show1
                      ? { backgroundColor: "lightyellow", color: "orange" }
                      : null
                  }
                >
                  Home
                </li>
              </Link>
              <Link to="/Movie">
                <li
                  onClick={() => handleShow2()}
                  style={
                    show2
                      ? { backgroundColor: " lightyellow", color: "orange" }
                      : null
                  }
                >
                  <i class="fa-solid fa-film"></i> Movie
                </li>
              </Link>
              <Link to="/News">
                <li
                  onClick={() => handleShow3()}
                  style={
                    show3
                      ? { backgroundColor: " lightyellow", color: "orange" }
                      : null
                  }
                >
                  <i class="fa-brands fa-hotjar"></i> News
                </li>
              </Link>
              <Link to="/Support">
                <li
                  onClick={() => handleShow4()}
                  style={
                    show4
                      ? { backgroundColor: " lightyellow", color: "orange" }
                      : null
                  }
                >
                  <i class="fa-solid fa-headset"></i> Suport
                </li>
              </Link>
            </ul>
          </div>
          <div className="search">
            <form action="" className="formsearch">
              <input
                className="ipsearch"
                type="text"
                placeholder="Search by name movie, cast.."
                name="search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <div>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </form>
          </div>
          {user ? (
            <button
              className="login"
              onClick={() => {
                setAfterLogin(!afterlogin);
              }}
            >
              <img
                src={user.data.avatar || AvtDefault}
                alt=""
                className="avt_user"
              />
              &nbsp;
              {(user.data.fullName &&
                (user.data.fullName.length > 14
                  ? user.data.fullName.split(" ").slice(-2).join(" ")
                  : user.data.fullName)) ||
                user.data.name}
            </button>
          ) : (
            <button
              className="login"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <i class="fa-solid fa-user"></i> Login
            </button>
          )}
        </div>
        {afterlogin && (
          <nav className="nav_user">
            <div></div>
            <div className="nav_user-btn" ref={ref}>
              <Link
                to="/MyProfile"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setAfterLogin(!afterlogin);
                }}
              >
                <div className="nav_user-btn-children">My Profile</div>
              </Link>
              <Link
                to="/BookingHistory"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setAfterLogin(!afterlogin);
                }}
              >
                <div className="nav_user-btn-children">Booking History</div>
              </Link>

              {/* <div className="nav_user-btn-children" onClick={handleLogOut}>
                <i class="fa-solid fa-right-from-bracket"></i> Log Out
              </div> */}
              <GoogleLogout
                clientId={clientId}
                onLogoutSuccess={onSuccess}
                render={(renderProps) => (
                  <div
                    className="nav_user-btn-children"
                    onClick={() => {
                      renderProps.onClick();
                      handleLogOut();
                    }}
                  >
                    <i class="fa-solid fa-right-from-bracket"></i> Log Out
                  </div>
                )}
              />
            </div>
          </nav>
        )}
        {name ? <></> : openModal && <FormModal closeModal={setOpenModal} />}
        {/* search */}
        {query && (
          <div className="row_list">
            <div></div>
            <div className="boxlist" ref={ref}>
              <div className="list">
                {listMovie
                  .filter(
                    (item) =>
                      item.name.toLowerCase().includes(query) ||
                      item.cast.toLowerCase().includes(query)
                  )
                  .map((item) => (
                    <Link
                      to={`/MovieDetail/${item.name}`}
                      style={{ textDecoration: "none" }}
                      onClick={handelLose}
                    >
                      <div key={item._id} className="list_item">
                        <img src={item.image} alt="" />
                        <div className="col_right">
                          {item.name.length > 17 ? (
                            <Marquee
                              pauseOnHover={true}
                              speed={100}
                              loop={1}
                              delay={5}
                              className="name"
                            >
                              {item.name.toLowerCase()}
                            </Marquee>
                          ) : (
                            <div className="name">
                              {item.name.toLowerCase()}
                            </div>
                          )}
                          <div className="rate">Rate: {item.rate}/10</div>
                          <div className="runningTime">Cast: {item.cast}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
            <div></div>
          </div>
        )}
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
