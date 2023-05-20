import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Skeleton } from "@mui/material";
import { BASE_URL } from "../../constants";

export const TopStory = () => {
	//
	const words = [
		{
			id: 0,
			value: "Avatar: The Way Of Water Is Coming To Disney+ In June",
			at: "a",
		},
		{
			id: 1,
			value: `Mission: Impossible – Dead Reckoning Part One Trailer Teases Ethan Hunt’s ‘Ultimate Objective’ And Action Galore`,
			at: "2023-05-15",
		},
		{
			id: 2,
			value: "Disney+ To Add The First Four Indiana Jones Movies Worldwide",
			at: "2023-05-14",
		},
		{
			id: 3,
			value:
				"Empire VIP Event: Spider-Man: Across The Spider-Verse Screening And Q&A",
			at: "2023-05-5",
		},
	];

	const [wordData, setWordData] = useState(words[0]);
	const [i, setI] = useState(0);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			if (i === 0) {
				setWordData(words[0]);
				setI((i) => i + 1);
			}

			if (i < words.length && i !== 0) {
				setWordData(words[i]);
				setI((i) => i + 1);
			}

			if (i === words.length) {
				setWordData(words[0]);
				setI(1);
			}
		}, 3000);
		return () => {
			clearTimeout(timer);
		};
	}, [i]);

	return (
		<div>
			<Container disableGutters>
				<Grid
					container
					fontSize='16px'
					padding={"20px 0 0 0"}
					// justifyContent={w1024 ? "flex-start" : "center"}
					// display={display ? "" : w1024 ? "flex" : "none"}
				>
					<Typography color='orange' fontWeight='bold'>
						TOP STORIES
					</Typography>

					{!wordData ? (
						<Skeleton sx={{ marginLeft: "10px" }} width={200} />
					) : (
						<>
							<Typography marginLeft='10px' color='white'>
								<i>{wordData?.value}</i>
							</Typography>
							<Box color='#999' margin='3px 7px 0 10px'>
								<i class='fa-regular fa-clock'></i>
							</Box>
							<Typography color='#999' fontSize={12} pt='2px'>
								{format(wordData?.at)}
							</Typography>
						</>
					)}
				</Grid>
			</Container>
		</div>
	);
};
