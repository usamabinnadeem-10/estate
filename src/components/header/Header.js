import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";
import right from "@iconify/icons-mdi/arrow-right-bold";
import close from "@iconify/icons-mdi/close";
import home from "@iconify/icons-mdi/home-outline";

import SlidingPanel from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";

function Header(props) {
  const [hide, setHide] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const [openPanel, setOpenPanel] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setHide(false);
    }
  });

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      var buttons = document.getElementsByClassName("menu-item");
      for (let button of buttons) {
        button.style.display = "none";
      }
    } else {
      setShowMenu(true);
      var buttons = document.getElementsByClassName("menu-item");
      for (let button of buttons) {
        button.style.display = "block";
      }
    }
  };

  return (
    <nav className="navbar fixed-top navbar-light bg-dark">
      <div className="w-100 d-flex flex-row flex-wrap">
        <div className="col-1">
          <Icon
            width={50}
            height={50}
            icon={right}
            color={"white"}
            onMouseOver={() => setOpenPanel(true)}
          />
        </div>
        <SlidingPanel type={"left"} isOpen={openPanel} size={15}>
          <div
            className="bg-dark d-flex flex-column"
            style={{ height: "100%" }}
          >
            <div className="text-end">
              <Icon
                width={25}
                height={25}
                icon={close}
                color={"white"}
                onClick={() => setOpenPanel(false)}
              />
            </div>
            <table
              className="table table-dark table-hover text-white py-3 my-3"
              onClick={() => setOpenPanel(false)}
            >
              <tbody>
                <tr className="text-center" style={{ height: "50px" }}>
                  <td>
                    <Link push to="/" style={{ textDecoration: "none" }}>
                      <Icon
                        width={70}
                        height={70}
                        icon={home}
                        color={"white"}
                      />
                    </Link>
                  </td>
                </tr>
                {props.loggedIn && (
                  <tr className="text-center" style={{ height: "50px" }}>
                    <td>
                      <Link push to="/my" style={{ textDecoration: "none" }}>
                        <h5 className="fw-bolder">My Profile</h5>
                      </Link>
                    </td>
                  </tr>
                )}

                <tr className="text-center" style={{ height: "50px" }}>
                  <td>
                    <Link push to="/post-ad" style={{ textDecoration: "none" }}>
                      <h5 className="fw-bolder">Place Ad</h5>
                    </Link>
                  </td>
                </tr>

                <tr className="text-center" style={{ height: "50px" }}>
                  <td>
                    <Link
                      push
                      to="/map-search"
                      style={{ textDecoration: "none" }}
                    >
                      <h5 className="fw-bolder">Map Search</h5>
                    </Link>
                  </td>
                </tr>
                {props.loggedIn && (
                  <tr className="text-center" style={{ height: "50px" }}>
                    <td>
                      <Link
                        push
                        to="/create-news"
                        style={{ textDecoration: "none" }}
                      >
                        <h5 className="fw-bolder">Add News</h5>
                      </Link>
                    </td>
                  </tr>
                )}
                {!props.loggedIn && (
                  <tr className="text-center" style={{ height: "50px" }}>
                    <td>
                      <Link push to="/login" style={{ textDecoration: "none" }}>
                        <h5 className="fw-bolder">Login</h5>
                      </Link>
                    </td>
                  </tr>
                )}
                {!props.loggedIn && (
                  <tr className="text-center" style={{ height: "50px" }}>
                    <td>
                      <Link
                        push
                        to="/signup"
                        style={{ textDecoration: "none" }}
                      >
                        <h5 className="fw-bolder">Register</h5>
                      </Link>
                    </td>
                  </tr>
                )}
                {props.loggedIn && (
                  <tr className="text-center" style={{ height: "50px" }}>
                    <td>
                      <Link
                        onClick={() => props.logout()}
                        push
                        to="/"
                        style={{ textDecoration: "none" }}
                      >
                        <h5 className="fw-bolder">Logout</h5>
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </SlidingPanel>
        <div className="col-10 align-self-end text-center py-1">
          <h2 style={{ color: "white", fontSize: "1.5rem" }}>
            <Link push to="/" style={{ textDecoration: "none" }}>
              Real Estate in Russia
            </Link>
          </h2>
        </div>
        <div className="col-1"></div>
      </div>
    </nav>
  );
}

export default Header;
