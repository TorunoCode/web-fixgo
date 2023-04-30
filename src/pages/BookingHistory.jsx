import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import "../sass/pages/bookingHistory.scss";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { BASE_URL } from "../constants";

export const BookingHistory = () => {
	const [data, setData] = useState([]);
	const [pageSize, setPageSize] = useState(5);
	const idUser = useSelector((state) => state.auth.login?.currentUser.data._id);

	useEffect(() => {
		const fetchUsers = async () => {
			const { data } = await axios.get(
				`${BASE_URL}/api/movies/historyBooking/${idUser}`
			);
			setData(data);
		};
		fetchUsers();
	}, []);

	const columns = useMemo(
		() => [
			{ field: "idBill", headerName: "ID", width: 150 },
			{ field: "movie", headerName: "MOVIE NAME", width: 200 },
			{ field: "cinema", headerName: "CINEMA", width: 150 },
			{ field: "date", headerName: "DATE", width: 100 },
			{ field: "session", headerName: "SESSION", width: 100 },
			{ field: "listItem", headerName: "SEAT", width: 200 },
			{ field: "createDate", headerName: "CREATE", width: 100 },
		],
		[]
	);
	return (
		<div className='container_bh'>
			<div className='main'>
				<div className='title'>Recent Booking History</div>
				<div
					style={{
						marginTop: 20,
						marginBottom: 20,
						width: "100%",
						border: "1px solid gray",
						"box-shadow": "1px 1px 5px 0 gray",
						background: "white",
						// color: "red",
					}}
				>
					<DataGrid
						autoHeight
						rows={data}
						getRowId={(row) => row.idBill}
						columns={columns}
						rowsPerPageOptions={[5, 10, 20]}
						pageSize={pageSize}
						onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
						sx={{
							boxShadow: 2,
							border: 2,
							borderColor: "orange",
							"& .MuiDataGrid-cell:hover": {
								color: "orange",
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
};
