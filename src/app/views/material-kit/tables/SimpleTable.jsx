import React from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  Icon,
  TableRow
} from "@material-ui/core";

const subscribarList = [
  {
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD."
  },
  {
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD."
  },
  {
    name: "james cassegne",
    date: "8 january, 2019",
    amount: 5000,
    status: "close",
    company: "Collboy Tech LTD."
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  }
];

const SimpleTable = () => {
  return (
    <div className="w-100 overflow-auto">
      <Table style={{ whiteSpace: "pre" }}>
        <TableHead>
          <TableRow>
            <TableCell className="px-0">Name</TableCell>
            <TableCell className="px-0">Company</TableCell>
            <TableCell className="px-0">Start Date</TableCell>
            <TableCell className="px-0">Status</TableCell>
            <TableCell className="px-0">Amount</TableCell>
            <TableCell className="px-0">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              <TableCell className="px-0 capitalize" align="left">
                {subscriber.name}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {subscriber.company}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {subscriber.date}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {subscriber.status}
              </TableCell>
              <TableCell className="px-0 capitalize">
                ${subscriber.amount}
              </TableCell>
              <TableCell className="px-0">
                <IconButton>
                  <Icon color="error">close</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SimpleTable;
