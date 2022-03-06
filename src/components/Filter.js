import React from "react";

import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
//import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from "./UserList";
import './Pagination.css';
import { Link } from 'react-router-dom';


// Define a default UI for filtering
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            Search:{' '}
            <input
                className="form-control"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
        </span>
    )
}

function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length

    return (
        <input
            className="table-title"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
            placeholder={`Search ${count} records...`}
        />
    )
}

function Table({ columns, data }) {

    const defaultColumn = React.useMemo(
        () => ({
            // Default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            defaultColumn
        },
        useFilters,
        useGlobalFilter
    )

    return (
        <div>
            
            <table className="table-fill" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <>
                            <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    {/* Render the columns filter UI */}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                        <tr>
                            <th><Link to={'/Profile'}><button class = 'button'>Search</button></Link></th>
                            <th><Link to={'/Profile'}>
                                <button class = 'button' onclick="window.history.back(1)">Last view</button>
                                </Link></th>
                        </tr>
                        </>
                    ))}
                </thead>
            </table>
            <br />
        </div>
    )
}



function FilterTableComponent() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'first',
            },
            {
                Header: 'Last Name',
                accessor: 'last'
            },

        ],
    )

    const data = UserList();

    return (
        <Table columns={columns} data={data} />
    )
}

export default FilterTableComponent;