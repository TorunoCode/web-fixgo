import {
	Autocomplete,
	Button,
	Grid,
	Modal,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../constants";
import "../sass/pages/bookingHistory.scss";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 450,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	borderRadius: "10px",
};

export const BookingHistory = () => {
	const [data, setData] = useState([]);
	const [pageSize, setPageSize] = useState(5);
	const [open, setOpen] = useState(false);
	const [idBillSecleted, setIdBillSecleted] = useState("");

	const [idSeats, setIdSeat] = useState([]);
	console.log("idSeats:", idSeats);

	const idUser = useSelector((state) => state.auth.login?.currentUser.data._id);

	const listSeat =
		data?.find((item) => item.idBill === idBillSecleted)?.listItem ?? [];

	useEffect(() => {
		const fetchUsers = async () => {
			const { data } = await axios.get(
				`${BASE_URL}/api/movies/historyBooking/${idUser}`
			);
			setData(data.reverse());
		};
		fetchUsers();
	}, []);

	const columns = useMemo(
		() => [
			{ field: "idBill", headerName: "ID", width: 140 },
			{ field: "movie", headerName: "MOVIE NAME", width: 200 },
			{ field: "cinema", headerName: "CINEMA", width: 130 },
			{ field: "date", headerName: "DATE", width: 100 },
			{ field: "session", headerName: "SESSION", width: 100 },
			{
				// field: "listItem",
				headerName: "SEAT",
				width: 200,
				valueGetter: (item) => item.row.listItem.map((item) => item.number),
			},
			{ field: "createDate", headerName: "CREATE", width: 100 },
			{
				field: "actions",
				type: "actions",
				headerName: "Actions",
				width: 100,
				cellClassName: "actions",
				getActions: (item) => {
					return [
						<GridActionsCellItem
							icon={<Button sx={{ width: "50px" }}>Refund</Button>}
							className='textPrimary'
							onClick={() => {
								setOpen(true);
								console.log(item);
								setIdBillSecleted(item.id);
							}}
						/>,
					];
				},
			},
		],
		[]
	);

	const handleRefund = () => {
		setOpen(false);
		console.log("");
	};

	return (
		<div className='container_bh' style={{ padding: "20px 0" }}>
			<Modal open={open} onClose={() => setOpen(false)}>
				<Grid sx={style} direction='column' container rowGap={1}>
					<Typography fontSize={25} color='orange' fontWeight={600}>
						Attention !
					</Typography>
					<Typography fontSize={18}>
						<b>If the ticket is valid for less than 2 days</b> Refunds only when
						someone buys your ticket back
					</Typography>
					<Typography fontSize={18}>
						<b>If the ticket is valid for 2 days or more</b> Instant refund
					</Typography>
					<Typography fontSize={18}>
						<b>Refund fee:</b> 10%
					</Typography>

					<Autocomplete
						multiple
						id='tags-outlined'
						options={listSeat ?? []}
						getOptionLabel={(option) => option.number}
						// defaultValue={listSeat[0] ?? []}
						onChange={(event, value) => {
							// console.log("value:", value);
							// console.log("event:", event);
							setIdSeat(value.map((item) => item.id));
						}}
						filterSelectedOptions
						renderInput={(params) => (
							<TextField
								{...params}
								label='filterSelectedOptions'
								placeholder='Favorites'
							/>
						)}
					/>

					<Stack alignItems='center'>
						<Button
							onClick={handleRefund}
							sx={{
								border: "1px solid orange",
								color: "orange",
								fontWeight: "600",
							}}
						>
							Confirm refund
						</Button>
					</Stack>
				</Grid>
			</Modal>
			<div className='main'>
				<div className='title'>Recent Booking History</div>
				<div
					style={{
						marginTop: 20,
						marginBottom: 20,
						width: "100%",
						borderRadius: "10px",
						border: "1px solid gray",
						boxShadow: "1px 1px 5px 0 gray",
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
							borderRadius: "10px",
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
