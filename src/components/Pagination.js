import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList';
import ReactPaginate from "react-paginate";
import './Pagination.css';
import { Link } from 'react-router-dom';
import Profile from '../pages/Profile'


function PaginatedItems() {

  const [page, setPage] = useState(0);
  const items = UserList();

  const itemsPerPage = 10;
  const numberOfRecordsVistited = page * itemsPerPage;
  const totalPages = Math.ceil(items.length /itemsPerPage);
  const changePage = ({ selected }) => {
    setPage(selected);
  };
  const displayItems = items
  .slice(numberOfRecordsVistited, numberOfRecordsVistited + itemsPerPage)
  .map((user) => {
    return (
        <tr>
            <td class="text-left">{user.name.first}</td>
            <td class="text-left">{user.name.last}</td>
            <td class="text-left">{user.gender}</td>
            <td class="text-left">{user.email}</td>
            <td class="text-left"><Link to={'/Profile'}><button>view</button></Link></td>
        </tr>
      );
    });

  return (
  <>
      <div class="table-title">
      <h3>Dashboard</h3>
      </div>
      <table class="table-fill">
          <thead>
              <tr>
                  <th class="text-left" >Frist Name</th>
                  <th class="text-left">Last Name</th>
                  <th class="text-left">Gender</th>
                  <th class="text-left">Email</th>
                  <th class="text-left">Detail</th>
              </tr>
          </thead>
          <tbody class="table-hover">
              {displayItems}
          </tbody>
      </table>
      <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={totalPages}
              onPageChange={changePage}
              containerClassName={"navigationButtons"}
              previousLinkClassName={"previousButton"}
              nextLinkClassName={"nextButton"} />
              </>
    );
}

// Add a <div id="container"> to your HTML to see the componend rendered.
/*
ReactDOM.render(
  <PaginatedItems itemsPerPage={4} />,
  document.getElementById('container')
);
*/

export default PaginatedItems;