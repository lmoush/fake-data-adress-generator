import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { inputContext } from "../Navbar";
import User from "../User";

export default function UsersList() {
  // VALUE OF THE INPUT
  const value_of_user_input = useContext(inputContext);
  console.log(value_of_user_input);

  const [usersList, setusersList] = useState([]);
  const [filterusersList, setfilterusersList] = useState([]);

  // FETCH API INSIDE THE USEEFFECT
  useEffect(() => {
    const getAllusers = async () => {
      try {
        const data = await fetch("https://dummyjson.com/users");
        const users_info = await data.json();
        console.log(users_info.users);
        setusersList(users_info.users);
        setfilterusersList(users_info.users);
      } catch (error) {
        console.log("Error Ocurred", error);
      }
    };
    getAllusers();
  }, []);
  // FILTER AND DISPLAY

  useEffect(() => {
    if (value_of_user_input) {
      const filteredUsers = usersList.filter((user) =>
        user.firstName
          .toLowerCase()
          .startsWith(value_of_user_input.toLowerCase())
      );
      setfilterusersList(filteredUsers);
    } else {
      setfilterusersList(usersList);
    }
  }, [value_of_user_input, usersList]);

  return (
    <>
      <div className="Container_List">
        {filterusersList.length > 0 ? (
          filterusersList.map((user, index) => <User user={user} key={index} />)
        ) : (
          <p>No User Found</p>
        )}
      </div>
    </>
  );
}
