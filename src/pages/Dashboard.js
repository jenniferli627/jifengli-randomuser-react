import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import Axios from "axios";
import UserList from "../components/UserList";
import './Dashboard.css';
import ReactPaginate from 'react-paginate';
import PaginatedItems from '../components/Pagination';
import FilterTableComponent from '../components/Filter';
import Navbar from '../components/Navbar'



const Dashboard = () => {

  return (
    <>
    <Navbar />
    <PaginatedItems />
    <FilterTableComponent />
    </>  
  );
};

export default Dashboard;