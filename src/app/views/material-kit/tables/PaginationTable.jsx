import {
  Avatar,
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const subscribarList = [
  {
    image: "/assets/images/products/headphone-2.jpg",
    purchaseDate: "18 january, 2019",
    currentPrice: 1000,
    purchasePrice: 150,
    category: "Hardware",
    change: 850,
  },
  {
    image: "/assets/images/products/headphone-3.jpg",
    purchaseDate: "10 january, 2019",
    currentPrice: 400,
    purchasePrice: 300,
    category: "Hardware",
    change: 100,
  },
  {
    image: "/assets/images/products/headphone-2.jpg",
    purchaseDate: "10 january, 2019",
    currentPrice: 900,
    purchasePrice: 250,
    category: "Hardware",
    change: 650,
  },
  {
    image: "/assets/images/products/headphone-1.jpg",
    purchaseDate: "8 january, 2019",
    currentPrice: 500,
    purchasePrice: 100,
    category: "Storage",
    change: 400,
  },
  {
    image: "/assets/images/products/headphone-2.jpg",
    purchaseDate: "1 january, 2019",
    currentPrice: 300,
    purchasePrice: 200,
    category: "Hardware",
    change: 100,
  },
  {
    image: "/assets/images/products/headphone-3.jpg",
    purchaseDate: "1 january, 2019",
    currentPrice: 300,
    purchasePrice: 100,
    category: "Hardware",
    change: 200,
  },
  {
    image: "/assets/images/products/headphone-2.jpg",
    purchaseDate: "1 january, 2019",
    currentPrice: 400,
    purchasePrice: 350,
    category: "Storage",
    change: 50,
  },
  {
    image: "/assets/images/products/headphone-1.jpg",
    purchaseDate: "1 january, 2019",
    currentPrice: 500,
    purchasePrice: 200,
    category: "Hardware",
    change: 300,
  },
  {
    image: "/assets/images/products/headphone-3.jpg",
    purchaseDate: "1 january, 2019",
    currentPrice: 200,
    purchasePrice: 150,
    category: "Storage",
    change: 50,
  },
];
const Span = styled('span')(({ textcolor }) => ({
  fontSize: '13px',
  color: textcolor,
  marginLeft: '4px',
}));
const PaginationTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Product</TableCell>
            <TableCell align="center">Categrory</TableCell>
            <TableCell align="center">Purchase Date</TableCell>
            <TableCell align="center">Purchase Price</TableCell>
            <TableCell align="center">Current Price</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                <Avatar src={subscriber.image} />
                </TableCell>
                <TableCell align="center">{subscriber.category}</TableCell>
                <TableCell align="center">{subscriber.purchaseDate}</TableCell>
                <TableCell align="center">${subscriber.purchasePrice}</TableCell>
                <TableCell align="center">${subscriber.currentPrice}</TableCell>
                <TableCell align="right">
                    <Span textcolor={'#08ad6c'}>{subscriber.currentPrice}</Span>

                  
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={subscribarList.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
};

export default PaginationTable;
