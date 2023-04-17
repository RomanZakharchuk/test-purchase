
import { useSelector } from 'react-redux';
import { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';

const Pagination = () => {
  const purchases = useSelector(state => state.purchases.purchases);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className='flex justify-center'>
      <TablePagination
        component="div"
        count={purchases.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ color: 'var(--color)' }}
        nextIconButtonProps={{ style: { color: 'var(--color)' } }}
        backIconButtonProps={{ style: { color: 'var(--color)' } }}
      />
    </div>
  )
}

export { Pagination };