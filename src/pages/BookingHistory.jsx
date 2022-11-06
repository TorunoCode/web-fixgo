import React, { useState, useEffect, useMemo } from "react";
import "../sass/pages/bookingHistory.scss";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const BookingHistory = () => {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        "https://backend-boo.herokuapp.com/api/movies"
      );
      setData(data);
    };
    fetchUsers();
  }, []);
  console.log(data);
  const columns = useMemo(
    () => [
      { field: "_id", headerName: "ID", width: 200 },
      { field: "name", headerName: "NAME", width: 240 },
      { field: "genre", headerName: "CATEGORY", width: 160 },
      {
        field: "isActive",
        headerName: "Active",
        width: 100,
        type: "boolean",
        // edittable: true,
      },
    ],
    []
  );
  return (
    <div className="container_bh">
      <div className="main">
        <div className="title">Hi, Hàn Vân Tịch</div>
        <div className="form_list">
          <div className="row_1">Recent Booking History</div>
          <div className="row_2">
            <div className="text">Ticket ID</div>
            <div className="text">Movie name</div>
            <div className="text">Seat</div>
            <div className="text">Departure</div>
            <div className="text">Price</div>
            <div className="text">Booked</div>
          </div>
        </div>
        <div
          style={{
            height: 500,
            width: "100%",
            border: "1px solid gray",
            "box-shadow": "1px 1px 5px 0 gray",
            background: "white",
            // color: "red",
          }}
        >
          <DataGrid
            rows={data}
            getRowId={(row) => row._id}
            columns={columns}
            rowsPerPageOptions={[5, 10, 20]}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            // getRowClassName={(params) =>
            //   params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
            // }
          />
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
