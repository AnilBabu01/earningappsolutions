import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Addform from "./Addform";
import { serverInstance } from "../../../API/ServerInstance";
import Swal from "sweetalert2";
import { backendApiUrl, backendUrl } from "../../../config/config";
import "./Addslider.css";
const style2 = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  p: 2,
  boxShadow: 24,
  borderRadius: "5px",
};
export default function Addslider({ setshowadmin }) {
  const navigation = useNavigate();
  const [isData, setisData] = useState("");
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = React.useCallback(() => setOpen(false), []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getslider = () => {
    serverInstance("uploadslider", "get").then((res) => {
      if (res?.status) {
        setisData(res?.data[0]);
      }
    });
  };
  const deletesliderimg = (id) => {
    serverInstance("uploadslider", "delete", {
      id: id,
    }).then((res) => {
      if (res?.status) {
        getslider();
        Swal.fire("Great!", res?.msg, "success");
      }
    });
  };
  useEffect(() => {
    setshowadmin(true);
    getslider();
  }, [open]);
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style2}>
            <div>
              <div className="add-div-close-div1">
                <h2 style={{ textAlign: "center", marginLeft: "24%" }}>
                  Add a slider image
                </h2>
                <CloseIcon
                  style={{ marginTop: "2%", marginLeft: "13%" }}
                  onClick={() => handleClose()}
                />
              </div>
              <Addform setOpen={setOpen} />
            </div>
          </Box>
        </Fade>
      </Modal>
      <div className="main_slider">
        <h2 style={{ marginLeft: "3rem" }}>All Slider Img</h2>
        <div className="main_add_btnn_div">
          <button onClick={() => handleOpen()}>Add</button>
        </div>
        <Table sx={{ minWidth: 650, width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Img</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isData && (
              <>
                {(rowsPerPage > 0
                  ? isData &&
                    isData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : isData && isData
                ).map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <img src={`${backendUrl}${row?.imgurl} `} alt="dd" />
                    </TableCell>
                    <TableCell>
                      <div className="main_add_btnn_div">
                        <button
                          onClick={() => deletesliderimg(row?.id)}
                          style={{ width: "100%" }}
                        >
                          Delete{" "}
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={isData?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[50, 100, 150]}
                labelRowsPerPage={<span>Rows:</span>}
                labelDisplayedRows={({ page }) => {
                  return `Page: ${page}`;
                }}
                backIconButtonProps={{
                  color: "secondary",
                }}
                nextIconButtonProps={{ color: "secondary" }}
                SelectProps={{
                  inputProps: {
                    "aria-label": "page number",
                  },
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
}
