import React from "react";
import "../../sass/pages/movieDetail.scss";
import { Box, Skeleton, Stack } from "@mui/material";

export const SkeletonDetail = () => {
	return (
		<Box>
			<Stack spacing={2} direction='row' width='100%' alignItems='stretch'>
				<Skeleton variant='rounded' width={185} height={270} />

				<Stack rowGap='10px' width='520px'>
					<Skeleton width='70%' />
					<Skeleton sx={{ marginBottom: "15px" }} width='50%' />
					<Skeleton width='80%' />
					<Skeleton width='60%' />
					<Skeleton width='70%' />
					<Skeleton width='90%' />
					<Skeleton width='60%' />
					<Skeleton width='50%' />
					<Skeleton width='55%' />
				</Stack>

				<Skeleton variant='rounded' width={490} height={270} />
			</Stack>
			<Skeleton width={300} height={50} />
			<Stack mt={2} mb={2} direction='row' justifyContent='center'>
				<Skeleton width={300} />
			</Stack>
			<Stack direction='column'>
				<Skeleton width='100%' />
				<Skeleton width='100%' />
				<Skeleton width='100%' />
				<Skeleton width='60%' />
			</Stack>
		</Box>
	);
};
