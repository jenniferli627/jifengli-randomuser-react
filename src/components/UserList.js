import React, { useState, useEffect } from "react";

import Axios from "axios";


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios("https://randomuser.me/api/?results=100").then((res) =>
      setUsers(res.data.results)
    );
  }, []);

  return users;
}

export default UserList;