import React, { useState, useEffect } from "react";
import UserList from '../components/UserList';

import '../components/Pagination.css';
import moment from "moment";
import Axios from "axios";


const Profile = () => {

 const users = UserList()[1];

  const date_create = moment().format("YYYY-MM-DD hh:mm:ss")

  return (
    <><div class="table-title">
    <img src = {users.picture.large} />
    </div><table class="table-fill">
      <tbody class="table-hover">
      <tr>
          <td class="text-left">Time:</td>
          <td class="text-left">{date_create}</td>
      </tr>
      <tr>
          <td class="text-left">Frist Name</td>
          <td class="text-left">{users.name.first}</td>
      </tr>
      <tr>
          <td class="text-left">Last Name</td>
          <td class="text-left">{users.name.last}</td>
      </tr>
      <tr>
          <td class="text-left">Gender</td>
          <td class="text-left">{users.gender}</td>
      </tr>
      <tr>
          <td class="text-left">Age</td>
          <td class="text-left">{users.dob.age}</td>
      </tr>
      <tr>
          <td class="text-left">Time to Birthday</td>
          <td class="text-left">{users.dob.date}</td>
      </tr>
      <tr>
          <td class="text-left">City</td>
          <td class="text-left">{users.location.city}</td>
      </tr>
      <tr>
          <td class="text-left">State</td>
          <td class="text-left">{users.location.state}</td>
      </tr>
      <tr>
          <td class="text-left">Timezone</td>
          <td class="text-left">{users.location.timezone.description}</td>
      </tr>
      <tr>
          <td class="text-left">Email</td>
          <td class="text-left">{users.email}</td>
      </tr>
      <tr>
          <td class="text-left">Phone</td>
          <td class="text-left">{users.phone}</td>
      </tr>
      </tbody>
    </table>
    </>
  )
};

export default Profile;
