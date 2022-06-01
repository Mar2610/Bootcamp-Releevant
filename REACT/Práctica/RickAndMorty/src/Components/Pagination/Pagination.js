import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({handlePagination, count, page}) {
  const handleChange = (event, value) => {
    handlePagination(value);
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
}