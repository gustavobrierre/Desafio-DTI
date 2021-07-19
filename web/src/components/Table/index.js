import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableRow,
  TablePagination,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
} from "@material-ui/core";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

const columns = [
  { id: "#" },
  { id: "id", label: "Id", minWidth: 170 },
  { id: "name", label: "Nome", minWidth: 170 },
  {
    id: "price",
    label: "Preço",
    format: (value) => "R$ " + value.toFixed(2),
  },
  {
    id: "quantity",
    label: "Quantidade",
    align: "center",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  button: {
    margin: "0% 2%",
    background: "transparent",
    border: "none",
  },
  iconDel: {
    "&:hover": {
      color: "red",
    },
  },
  iconEdit: {
    "&:hover": {
      color: "#c5b925",
    },
  },
});

export default function TableList() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get("products").then((response) => {
      setRows(response.data);
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleEdit(id) {
    const path = `/edit-product/${id}`;
    history.push(path);
  }

  async function handleDelete(rowId) {
    try {
      await api.delete(`products/${rowId}`);

      const updatedRows = rows.filter((row) => row.id !== rowId);
      setRows(updatedRows);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "#" ? (
                            <>
                              <button
                                onClick={() => {
                                  handleEdit(row.id);
                                }}
                                className={classes.button}
                              >
                                <FiEdit2 className={classes.iconEdit} />
                              </button>
                              <button
                                onClick={() => {
                                  handleDelete(row.id);
                                }}
                                className={classes.button}
                              >
                                <FiTrash2 className={classes.iconDel} />
                              </button>
                            </>
                          ) : column.format ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
