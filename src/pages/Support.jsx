import React from "react";
import "../sass/pages/support.scss";
import { useEffect } from "react";

export const Support = () => {
	useEffect(() => {
		if (window.FB) {
			window.FB.XFBML.parse();
		}
	}, []);
	return (
		<div className='support'>
			<div className='main'>
				<div className='tag_movie'>
					<div>
						<div className='menu24h'></div>
						<div className='themain24h'>
							<div className='main24htrai'>
								<div className='titlex'>Contact us</div>
								<div className='fanpage'>
									<div className='textx'>
										<i class='fa-brands fa-square-facebook'></i>&nbsp;Fanpage
										Facebook
									</div>
									<div className='text'>
										<i class='fa-solid fa-phone'></i>&nbsp;Tel:&nbsp;
										<a href='tel:0862956946'>0862 956 946</a>
									</div>
									<iframe
										src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100089819840953&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1620897148361329'
										width='340'
										height=''
										frameborder='0'
										allowfullscreen='true'
										allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
									></iframe>
									<div className='text'>
										<i class='fa-solid fa-map-location'></i>&nbsp;Location: Ho
										Chi Minh City University of Technical Education, Vo Van Ngan
										Street, Linh Chieu, Thu Duc, Ho Chi Minh City
									</div>
								</div>
								<div className='title'>Questions and suggestions</div>
								<div className='plugincmt'>
									<div
										class='fb-comments'
										href='https://www.youtube.com/channel/UCC43krXpGPTFYR6H8L8f4rA'
										width=''
										numposts='5'
									></div>
								</div>
							</div>
							<div className='main24hphai'>
								<img
									className='img'
									src='https://i.vietgiaitri.com/2021/9/3/money-heist-tung-nong-15-phut-dau-chua-gi-da-co-canh-giuong-chieu-giao-su-bi-tra-tan-da-man-khong-loi-thoat-a16-6003819.gif'
									alt=''
								/>
								<div className='chudehot'>HOT TOPIC</div>
								<div className='taghot'>
									<button>
										<i class='fa-regular fa-circle-dot'></i>&ensp;"Juan Wick":
										Danny Trejo Pitches
									</button>
									<button>
										<i class='fa-regular fa-circle-dot'></i>&ensp;World anime
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
										<i class='fa-regular fa-circle-dot'></i>&ensp;Star Wars Boss
										"In Full Support" Of Hollywood's Writers Strike
									</button>
								</div>
								<div className='chudegachduoi'>much discussion</div>
								<div className='thethaoluannhieu'>
									<div className='so'>1</div>
									<div className='noidungso'>
										Fast X Opening Weekend Box Office Falls Behind F9 Despite
										Strong Day 1
									</div>
								</div>
								<div className='thethaoluannhieu'>
									<div className='so'>2</div>
									<div className='noidungso'>
										Fast X's Secret Returning Character Actor Breaks Silence On
										Return After 4 Movie Absence
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
										FAST X (2023) "That Was My Idea": Fast X's Shocking Death
										Had Upset One Star, Reveals Director
									</div>
								</div>
							</div>
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
