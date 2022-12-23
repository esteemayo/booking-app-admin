import useFetch from 'hooks/useFetch';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';

import './table.scss';

const List = () => {
  const { data } = useFetch('/users?new');
  console.log(data)

  const rows = [
    {
      id: 1143155,
      product: 'Acer Nitro 5',
      img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'John Smith',
      date: '1 March',
      amount: 785,
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 2235235,
      product: 'Playstation 5',
      img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Michael Doe',
      date: '1 March',
      amount: 900,
      method: 'Online Payment',
      status: 'Pending',
    },
    {
      id: 2342353,
      product: 'Redragon S101',
      img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'John Smith',
      date: '1 March',
      amount: 35,
      method: 'Cash on Delivery',
      status: 'Pending',
    },
    {
      id: 2357741,
      product: 'Razer Blade 15',
      img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Jane Smith',
      date: '1 March',
      amount: 920,
      method: 'Online',
      status: 'Approved',
    },
    {
      id: 2342355,
      product: 'ASUS ROG Strix',
      img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Harold Carol',
      date: '1 March',
      amount: 2000,
      method: 'Online',
      status: 'Pending',
    },
  ];

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='table-cell' style={{ fontSize: '1.6rem' }}>
              User ID
            </TableCell>
            <TableCell className='table-cell' style={{ fontSize: '1.6rem' }}>
              Name
            </TableCell>
            <TableCell className='table-cell' style={{ fontSize: '1.6rem' }}>
              Username
            </TableCell>
            <TableCell className='table-cell' style={{ fontSize: '1.6rem' }}>
              Date
            </TableCell>
            <TableCell className='table-cell' style={{ fontSize: '1.6rem' }}>
              Country
            </TableCell>
            <TableCell className='table-cell' style={{ fontSize: '1.6rem' }}>
              Email Address
            </TableCell>
            <TableCell className='table-cell' style={{ fontSize: '1.6rem' }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='table-cell' style={{ fontSize: '1.3rem' }}>
                {row.id}
              </TableCell>
              <TableCell className='table-cell' style={{ fontSize: '1.3rem' }}>
                <div className='cell-wrapper'>
                  <img src={row.img} alt='' className='image' />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='table-cell' style={{ fontSize: '1.3rem' }}>
                {row.customer}
              </TableCell>
              <TableCell className='table-cell' style={{ fontSize: '1.3rem' }}>
                {row.date}
              </TableCell>
              <TableCell className='table-cell' style={{ fontSize: '1.3rem' }}>
                {row.amount}
              </TableCell>
              <TableCell className='table-cell' style={{ fontSize: '1.3rem' }}>
                {row.method}
              </TableCell>
              <TableCell className='table-cell' style={{ fontSize: '1.3rem' }}>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
