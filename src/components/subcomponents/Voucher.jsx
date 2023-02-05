import React from "react";
import "../../sass/components/subcomponents/vocher.scss";
import { dataVocher } from "./Datafake";

function ItemPosts({ item }) {
  return (
    <div className="item_posts">
      <img src={item.imagePost} alt="" />
      <div className="imgtitle">
        <img src={item.imgTitle} alt="" />
        <div className="imgtitle_right">
          <div className="title_itemx">{item.titlePost}</div>
          <div className="cucduoititle">
            <div className="cucxanh">100% Free </div>
            <div className="cucxam">Vip Level 2</div>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <i class="fa-regular fa-hand-point-right"></i>&nbsp;Lưu mã ngay thôi
          !!!
        </li>
        <li>
          <i class="fa-regular fa-hand-point-right"></i>&nbsp;Còn chần chừ gì
          nữa @@ <br></br>Nhanh tay kẻo hết mã nào ae{" <33333 "}
        </li>
      </ul>
    </div>
  );
}
// function ItemApp({ item }) {
//   return (
//     <div className="imgtitle">
//       <img src={item.imgTitle} alt="" />
//       <div className="imgtitle_right">
//         <div className="title_item">{item.titlePost}</div>
//         <div className="cucduoititle">
//           <div className="cucxanh">Miễn phí</div>
//           <div className="cucxam">Nhập vai</div>
//         </div>
//       </div>
//     </div>
//   );
// }
const Voucher = () => {
  return (
    <div>
      <div className="mainVocher">
        <div className="fixfont-family">
          <div className="mainVocher_right">
            <div className="title_Vocher">New promotion</div>
            <div className="viewgamenoibat">
              {dataVocher.map((item, index) => (
                <ItemPosts key={index} item={item} />
              ))}
            </div>

            <div className="vocher_nentang">
              <div className="title_Vocher">Website Fixgo on platform</div>
              <div className="menu_nentang">
                <ul>
                  <li>
                    <i class="fa-brands fa-app-store-ios"></i>&ensp;Ios
                    (Iphone-ipad)&ensp;<i class="fa-solid fa-caret-down"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-android"></i>&ensp;Android&nbsp;
                    <i class="fa-solid fa-caret-down"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-windows"></i>&ensp;Windowns&nbsp;
                    <i class="fa-solid fa-caret-down"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-apple"></i>&ensp;Macos&nbsp;
                    <i class="fa-solid fa-caret-down"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mainVocher_left">
            <div className="list_anh">
              <img src="https://gos3.ibcdn.com/bms-og-1516256430.gif" alt="" />
              <img
                src="https://cdn.zoutons.com/images/originals/coupon-category/Events_Deals_1588268877.gif"
                alt=""
              />
              <img
                src="https://www.jobberman.com.gh/discover/wp-content/uploads/2019/05/Bonanza-FB-post.gif"
                alt=""
              />
            </div>
            {/* <div className="title_Vocher">Phim xem nhiều</div>
            <div className="item_app">
              {dataVocher.map((item, index) => (
                <ItemApp key={index} item={item} />
              ))}
            </div> */}
            <div className="title_Vocherx">Recent Hot News</div>
            <div className="list_xemnhieutuanqua">
              <div className="thethaoluannhieu">
                <div className="sox">1</div>
                <div className="noidungsox">
                  Ezra Miller Chìm Trong Scandal, Tương Lai Nào Cho The Flash Và
                  DCEU?
                </div>
              </div>
              <div className="thethaoluannhieu">
                <div className="sox">2</div>
                <div className="noidungsox">
                  Chi Tiết Đoạn Phim Doctor Strange 2 Trình Chiếu Tại Comic Con
                </div>
              </div>
              <div className="thethaoluannhieu">
                <div className="sox">3</div>
                <div className="noidungsox">
                  Bóc Trứng Phục Sinh Doctor Strange In The Multiverse Of
                  Madness!
                </div>
              </div>
              <div className="thethaoluannhieu">
                <div className="sox">4</div>
                <div className="noidungsox">
                  Trailer Thor: Love And Thunder Tiết Lộ Kẻ Sát Thần Đáng Sợ
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="thecach"></div>
      </div>
    </div>
  );
};

export default Voucher;
