import React from "react";
import "../../sass/components/subcomponents/vocher.scss";
import { dataVocher } from "./Datafake";

function ItemPosts({ item }) {
	return (
		<div className='item_posts'>
			<img src={item.imagePost} alt='' />
			<div className='imgtitle'>
				<img src={item.imgTitle} alt='' />
				<div className='imgtitle_right'>
					<div className='title_itemx'>{item.titlePost}</div>
					<div className='cucduoititle'>
						<div className='cucxanh'>100% Free </div>
						<div className='cucxam'>Vip Level 2</div>
					</div>
				</div>
			</div>
			<ul>
				<li>
					<i class='fa-regular fa-hand-point-right'></i>&nbsp;Save code now !!!
				</li>
				<li>
					<i class='fa-regular fa-hand-point-right'></i>&nbsp;Save code now
					!!!Click now
				</li>
			</ul>
		</div>
	);
}

export const Voucher = () => {
	return (
		<div>
			<div className='mainVocher'>
				<div className='fixfont-family'>
					<div className='mainVocher_right'>
						<div className='title_Vocher'>New promotion</div>
						<div className='viewgamenoibat'>
							{dataVocher.map((item, index) => (
								<ItemPosts key={index} item={item} />
							))}
						</div>

						<div className='vocher_nentang'>
							<div className='title_Vocher'>Website Fixgo on platform</div>
							<div className='menu_nentang'>
								<ul>
									<li>
										<i class='fa-brands fa-app-store-ios'></i>&ensp;Ios
										(Iphone-ipad)&ensp;<i class='fa-solid fa-caret-down'></i>
									</li>
									<li>
										<i class='fa-brands fa-android'></i>&ensp;Android&nbsp;
										<i class='fa-solid fa-caret-down'></i>
									</li>
									<li>
										<i class='fa-brands fa-windows'></i>&ensp;Windowns&nbsp;
										<i class='fa-solid fa-caret-down'></i>
									</li>
									<li>
										<i class='fa-brands fa-apple'></i>&ensp;Macos&nbsp;
										<i class='fa-solid fa-caret-down'></i>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='mainVocher_left'>
						<div className='list_anh'>
							<img src='https://gos3.ibcdn.com/bms-og-1516256430.gif' alt='' />
							<img
								src='https://cdn.zoutons.com/images/originals/coupon-category/Events_Deals_1588268877.gif'
								alt=''
							/>
							<img
								src='https://www.jobberman.com.gh/discover/wp-content/uploads/2019/05/Bonanza-FB-post.gif'
								alt=''
							/>
						</div>
						{/* <div className="title_Vocher">Phim xem nhiều</div>
            <div className="item_app">
              {dataVocher.map((item, index) => (
                <ItemApp key={index} item={item} />
              ))}
            </div> */}
						<div className='title_Vocherx'>Recent Hot News</div>
						<div className='list_xemnhieutuanqua'>
							<div className='thethaoluannhieu'>
								<div className='sox'>1</div>
								<div className='noidungsox'>
									Thor 5 Poster Imagines Chris Hemsworth's Hero In A Much Darker
									MCU Movie
								</div>
							</div>
							<div className='thethaoluannhieu'>
								<div className='sox'>2</div>
								<div className='noidungsox'>
									Quentin Tarantino Announces The Death Of OUATIH's Rick Dalton
								</div>
							</div>
							<div className='thethaoluannhieu'>
								<div className='sox'>3</div>
								<div className='noidungsox'>
									Tom Holland's Spidey Is Hunted By Kraven In MCU Spider-Man 4
									Fan Poster
								</div>
							</div>
							<div className='thethaoluannhieu'>
								<div className='sox'>4</div>
								<div className='noidungsox'>
									Disney Reverses Removal Of One Disney Plus Documentary After
									Online Backlash
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='thecach'></div>
			</div>
		</div>
	);
};
