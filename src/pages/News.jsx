import React, { useState } from "react";
import "../sass/pages/news.scss";
import {
	dataBlogMovie,
	dataHotMovie,
} from "../components/subcomponents/Datafake";
import { Voucher } from "../components";

function ItemBlogMovie({ item }) {
	return (
		<div className='item24h_item'>
			<img src={item.image} alt='' />
			<div className='item24h_right'>
				<div className='item24h_right_title'>{item.title}</div>
				<div className='item24h_right_time'>{item.time}</div>
				<div className='item24h_right_time'>{item.content}</div>
			</div>
		</div>
	);
}
function ItemHotMovie({ item }) {
	return (
		<div className='item24h_item'>
			<img src={item.image} alt='' />
			<div className='item24h_right'>
				<div className='item24h_right_title'>{item.title}</div>

				<div className='item24h_right_time'>{item.content}</div>
			</div>
		</div>
	);
}
export const News = () => {
	const [review, setReView] = useState(true);
	const [hotmovie, setHotmovie] = useState(false);
	const [vocher, setVocher] = useState(false);

	return (
		<div className='news'>
			<div className='main'>
				<div className='tag_movie'>
					<div>
						<div className='menu24h'>
							<ul>
								<li
									onClick={() => {
										setReView(true);
										setHotmovie(false);
										setVocher(false);
									}}
									style={review ? { color: "orange" } : null}
								>
									Movie Reviews
								</li>
								<li
									onClick={() => {
										setReView(false);
										setVocher(false);
										setHotmovie(true);
									}}
									style={hotmovie ? { color: "orange" } : null}
								>
									Hot movies
								</li>
								<li
									onClick={() => {
										setVocher(true);
										setReView(false);
										setHotmovie(false);
									}}
									style={vocher ? { color: "orange" } : null}
								>
									Vochers
								</li>
								{/* <li>Career</li>
                <li>promotion</li> */}
								<li className='dkdn'>Fixgo - by UTE Student</li>
							</ul>
						</div>
						<div className='themain24h'>
							{vocher ? (
								<Voucher />
							) : (
								<>
									<div className='main24htrai'>
										{review ? (
											<>
												<div className='title'>Movie Review</div>
												<div className='main24htrai_1'>
													<div className='left_trai'>
														<img
															src='https://cdn.galaxycine.vn/media/2022/8/14/preview-black-adam-dwayne-johnson-thanh-phan-anh-hung-cuc-suc-6_1660454758375.jpg'
															alt=''
														/>
														<div className='title24h'>
															[Review] "Black Adam" is one of the best DC
															superhero films to date
														</div>
														<div className='noidung24h'>
															Throughout the rest of its running time, “Black
															Adam” leans into the inevitability of Adam’s
															evolution toward good-guy status, condensing the
															transformation of the title character in the first
															two “Terminator” films (there are even comic bits
															where people try to teach Adam sarcasm and the
															Geneva Conventions). "Black Adam" then stirs in
															dollops of a macho sentimentality that used to be
															common in old Hollywood dramas about loners who
															needed to get involved in a cause to reset their
															moral compasses or recognize their worth.
														</div>
													</div>
													<div className='right_trai'>
														<img
															src='https://cdn.galaxycine.vn/media/2022/8/6/alienoid-cuoc-chien-xuyen-khong-bom-tan-vuot-qua-moi-gioi-han-tuong-tuong-1_1659803666009.jpg'
															alt=''
														/>
														<div className='title24hx'>
															[Review] Mortal Kombat 2 Gets Major Filming Update
															As Production Settles On A Location
														</div>
														<div className='noidung24hx'>
															[Review] The White Lotus’ Fred Hechinger Replacing
															Barry Keoghan In Gladiator 2
														</div>
														<div className='noidung24hx'>
															[Review] Eddie Murphy In Talks For New Pink
															Panther Movie
														</div>
														<div className='noidung24hx'>
															[Preview] Humanity Is Locked In A Battle With AI
															In The Trailer For Gareth Edwards’ The Creator
														</div>
													</div>
												</div>
												<div className='title'>Movie Blog</div>
												<div className='main24htrai_2'>
													{dataBlogMovie.map((item, index) => (
														<ItemBlogMovie key={index} item={item} />
													))}
												</div>
												<div className='main24htrai_3'>
													<iframe
														width='800'
														height='450'
														src='https://www.youtube.com/embed/M25zXBIUVr0'
														title='YouTube video player'
														frameborder='0'
														allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
														allowfullscreen
													></iframe>
												</div>
											</>
										) : (
											<>
												<div className='title' style={{ marginBottom: "10px" }}>
													Hot Movie
												</div>
												{dataHotMovie.map((item, index) => (
													<ItemHotMovie key={index} item={item} />
												))}
											</>
										)}
										{/* hot movie */}
									</div>
									<div className='main24hphai'>
										<img
											src='https://64.media.tumblr.com/f14da695c8d48b26368ed984db8f9b8a/tumblr_nqx83r5hqP1qczmzbo1_500.gif'
											alt=''
										/>
										<div className='chudehot'>HOT TOPIC</div>
										<div className='taghot'>
											<button>
												<i class='fa-regular fa-circle-dot'></i>&ensp;"Juan
												Wick": Danny Trejo Pitches
											</button>
											<button>
												<i class='fa-regular fa-circle-dot'></i>&ensp;World
												anime
											</button>
											<button>
												<i class='fa-regular fa-circle-dot'></i>&ensp;"Cool Wins
												Every Time!"
											</button>
											<button>
												<i class='fa-regular fa-circle-dot'></i>&ensp; Smith &
												Martin Lawrence Scene
											</button>
											<button>
												<i class='fa-regular fa-circle-dot'></i>&ensp;Star Wars
												Boss "In Full Support" Of Hollywood's Writers Strike
											</button>
										</div>
										<div className='chudegachduoi'>much discussion</div>
										<div className='thethaoluannhieu'>
											<div className='so'>1</div>
											<div className='noidungso'>
												Fast X Opening Weekend Box Office Falls Behind F9
												Despite Strong Day 1
											</div>
										</div>
										<div className='thethaoluannhieu'>
											<div className='so'>2</div>
											<div className='noidungso'>
												Fast X's Secret Returning Character Actor Breaks Silence
												On Return After 4 Movie Absence
											</div>
										</div>
										<div className='thethaoluannhieu'>
											<div className='so'>3</div>
											<div className='noidungso'>
												MCU Iron Man, Captain America & Thor Get Classic
												Comics-Accurate Costumes In New Fan Art
											</div>
										</div>
										<div className='thethaoluannhieu'>
											<div className='so'>4</div>
											<div className='noidungso'>
												FAST X (2023) "That Was My Idea": Fast X's Shocking
												Death Had Upset One Star, Reveals Director
											</div>
										</div>
										<div className='chudexanh'>EVocher</div>
										<div className='thegioithieu24hx'>
											<div className='item_thegioithieux'>
												<img
													src='https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg'
													alt=''
												/>
												<div>VNPAY-QR</div>
											</div>
											<div className='item_thegioithieux'>
												<img
													src='https://cdn.galaxycine.vn/media/2022/10/5/300x450-gc_1664939520575.jpg'
													alt=''
												/>
												<div>VNPAY-QR</div>
											</div>
										</div>
										<div className='thegioithieu24h'>
											<div className='item_thegioithieu'>
												<img
													src='https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg'
													alt=''
												/>
												<div>VNPAY-QR</div>
											</div>
											<div className='item_thegioithieu'>
												<img
													src='https://cdn.galaxycine.vn/media/2022/10/5/300x450-gc_1664939520575.jpg'
													alt=''
												/>
												<div>VNPAY-QR</div>
											</div>
											<div className='item_thegioithieu'>
												<img
													src='https://cdn.galaxycine.vn/media/2022/10/27/back2shool-digital-300x450-1663573378238_1666859670287.jpg'
													alt=''
												/>
												<div>VNPAY-QR</div>
											</div>
											<div className='item_thegioithieu'>
												<img
													src='https://cdn.galaxycine.vn/media/2022/9/21/glx-vani-1200x1800_1663745251301.jpg'
													alt=''
												/>
												<div>VNPAY-QR</div>
											</div>
											<div className='item_thegioithieu'>
												<img
													src='https://cdn.galaxycine.vn/media/2022/9/21/glx-vani-1200x1800_1663745251301.jpg'
													alt=''
												/>
												<div>VNPAY-QR</div>
											</div>
											<div className='item_thegioithieu'>
												<img
													src='https://cdn.galaxycine.vn/media/2022/9/21/glx-vani-1200x1800_1663745251301.jpg'
													alt=''
												/>
												<div>VNPAY-QR</div>
											</div>
										</div>
									</div>
								</>
							)}
						</div>
					</div>
				</div>

				<div
					className='tag_movie'
					style={{ marginTop: "10px", borderTop: "1px solid gray" }}
				>
					<div className='title'>Fixgo Cinema</div>
					<div>
						<br />
						The world of cinema is like a growing piece of land that expands
						every day. Coming to cinema, the deeper you go, the more new aspects
						you will discover.
						<br />
						<br />
						Someone will be interested in a director role. Want to understand
						what directors need to do, what causes and motivates them to stick
						with the profession. Sometimes he also wants to know why those
						filmmakers are able to create so many interesting stories.
						<br />
						<br />
						Talking about actors, the private life of stars is always something
						that makes the public curious. They change houses, buy more
						supercars..., even their love life has problems. All of these are
						news that always appeal to people.
						<br />
						<br />
						A work is playing in theaters and is being talked about everywhere.
						You wonder if you should follow the crowd to try the experience, but
						now you need a suggestion or the most objective advice, what to do?
						<br />
						<br />
						You accidentally see an old movie, feel it is too great, even more
						surprised when in the past the film has swept countless awards. Now
						when you want to better understand the message of the film, the
						secret stories behind the scenes. What to do? <br />
						<br />
						Why do directors use such camera angles on the film, why is this
						actor able to play so well? Find the answer here now. Welcome to the
						movie library Fixgo Cinema, which provides articles on classic
						movies, interesting behind-the-scenes information of great movies
						and blockbusters playing at Fixgo Cinema.
					</div>
				</div>
			</div>
		</div>
	);
};
