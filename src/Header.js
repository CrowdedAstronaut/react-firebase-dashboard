/* import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSession } from "react-use-session";

function Header() {
  const navigate = useNavigate();
  const { user } = useSession();

  const logoutUser = async () => {
    await signOut();
    navigate.push("/login");
  };

  return (
    <header>
      <h2>The Grid</h2>
      {!!user && (
        <button className="ui secondary button logout" onClick={logoutUser}>
          LOGOUT
        </button>
      )}
    </header>
  );
}

export default Header;
 */