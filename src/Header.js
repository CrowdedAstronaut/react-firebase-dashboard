import React from "react";
import { logout } from "./firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSession } from "./firebase/UserProvider";

function Header() {
  const navigate = useNavigate();
  const { user } = useSession();

  const logoutUser = async () => {
    await logout();
    navigate.push("/login");
  };

  return (
    <header>
      <h2>The Grid</h2>
      {!!user && (
        <button
          className="ui secondary button logout"
          onClick={logoutUser}
        >
          LOGOUT
        </button>
      )}
    </header>
  );
}

export default Header;
