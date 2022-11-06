import React, { useState, useEffect, useRef } from "react";
import AvtDefault from "../assets/images/avt_user_default.png";
//asdas
import "../sass/components/header.scss";
import { Link } from "react-router-dom";
import FormModal from "./subcomponents/FormModal.jsx";
import { useSelector } from "react-redux";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Marquee from "react-fast-marquee";

const Header = () => {
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

  // xử lí logout
  const handleLogOut = () => {
    window.location.reload();
    localStorage.clear();
  };

  const handelLose = () => {
    setQuery(false);
  };
  // features search
  const [listMovie, setListMovie] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      let res = await axios.get("https://backend-boo.herokuapp.com/api/movies");
      try {
        setListMovie(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);

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
                <li>Home</li>
              </Link>
              <Link to="/Movie">
                <li>
                  <i class="fa-solid fa-film"></i> Movie
                </li>
              </Link>
              <Link to="/Event">
                <li>
                  <i class="fa-brands fa-hotjar"></i> Event
                </li>
              </Link>
              <li>
                <i class="fa-solid fa-headset"></i> Suport
              </li>
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
              &nbsp;{user.data.name}
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
              <div className="nav_user-btn-children" onClick={handleLogOut}>
                <i class="fa-solid fa-right-from-bracket"></i> Log Out
              </div>
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
