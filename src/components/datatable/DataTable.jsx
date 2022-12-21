import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { getHotels } from 'services/hotelService';
import { userColumns, productColumns } from 'data';
import { deleteUser, getUsers } from 'services/userService';

import './datatable.scss';

const DataTable = ({ path }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = path === 'users' ? await getUsers() : await getHotels();
        setData(path === 'users' ? data.users : data.hotels);
      } catch (err) {
        console.log(err);
      }
    })()
  }, [path]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user')) {
      try {
        setData((data) => {
          return data.filter((item) => item._id !== id);
        });

        await deleteUser(id);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cell-action'>
            <Link to={`/${path}/${params.row._id}`}>
              <button className='view-button'>View</button>
            </Link>
            <button
              className='delete-button'
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className='datatable'>
      <div className='datatable-title'>
        {path === 'users' ? 'Add new user' : 'Add new product'}
        <Link to={`/${path}/new`} className='link'>
          Add new
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={
          path === 'users'
            ? userColumns.concat(actionColumn)
            : productColumns.concat(actionColumn)
        }
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
        className='data-grid'
      />
    </div>
  );
};

export default DataTable;
