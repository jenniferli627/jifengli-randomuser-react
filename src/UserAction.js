import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import Axios from "axios";

export const users_FETCHED = 'users_FETCHED';
export const user_FETCHED = 'user_FETCHED';

const usersFetched = users => ({
  type: users_FETCHED,
  payload: users
})
const userFetched = user => ({
  type: user_FETCHED,
  payload: user
})

export const loadUsers = () =>{
  return function(dispatch, getSate){
      if(getSate().users) return

      Axios.get(`https://randomuser.me/api/?results=100`)
      .then(response => {
          dispatch(usersFetched(response.data.results))
        })
      .catch(error => console.log(error))
  }
}

export const loadUser = (id) => {
  return function(dispatch, getState){
      let users = getState().users;
      let user = users.filter((user) => id == user.id);
      dispatch(userFetched(user))
  }
}

