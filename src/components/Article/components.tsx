import { Table, TableBody, TableCell, TableCellProps, TableContainer, TableHead, TableHeadProps, TableProps, TableRow } from '@mui/material';
import Link from '../Link';

const components = {
  table: (props: TableProps) => (
    <TableContainer>
      <Table {...props} sx={{
        width: 'auto',
      }} />
    </TableContainer>
  ),
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  th: (props: TableCellProps) => (
    <TableCell {...props} sx={{
      textAlign: 'center',
    }} />
  ),
  td: TableCell,
  a: Link,
}

export default components;