import React, { useState, useEffect, useRef } from "react";
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
      let res = await axios.get("/api/movies");
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
          <div className="logo">FixGo</div>
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
                placeholder="Search by name movie.."
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
                src={
                  user.data.avatar ||
                  "https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.15752-9/306560976_1478177569326420_2543756426164044655_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-2G1HRY79g8AX9gnj1V&_nc_ht=scontent.fsgn13-4.fna&oh=03_AVJJPT5lOcfprQA8dsepUNA9iTQNfyq65lt2uhFwlDfRkg&oe=6353AE03"
                }
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
        {query && (
          <div className="row_list">
            <div></div>
            <div className="boxlist" ref={ref}>
              <div className="list">
                {listMovie
                  .filter((item) => item.name.toLowerCase().includes(query))
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
                          <div className="runningTime">
                            Running Time: {item.runningTime}
                          </div>
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
