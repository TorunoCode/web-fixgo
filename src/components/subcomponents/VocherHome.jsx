import React from "react";
import "../../sass/components/subcomponents/vocherHome.scss";
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
            <div className="cucxanh">Miễn phí</div>
            <div className="cucxam">Nhập vai</div>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <i class="fa-regular fa-hand-point-right"></i>&nbsp;Tổng hợp 10 điện
          thoại chơi Gunny Origin mượt mà, đáng mua nhất
        </li>
        <li>
          <i class="fa-regular fa-hand-point-right"></i>&nbsp;WOW và SUPER cái
          nào ngon hơn trong Gunny Orgin? Top SUPER
        </li>
      </ul>
    </div>
  );
}
function ItemApp({ item }) {
  return (
    <div className="imgtitle">
      <img src={item.imgTitle} alt="" />
      <div className="imgtitle_right">
        <div className="title_item">{item.titlePost}</div>
        <div className="cucduoititle">
          <div className="cucxanh">Miễn phí</div>
          <div className="cucxam">Nhập vai</div>
        </div>
      </div>
    </div>
  );
}
const VocherHome = () => {
  return (
    <div>
      <div className="mainVocherHome">
        <div className="fixfont-family">
          <div className="mainVocher_right">
            {/* <div className="title_Vocher">New promotion</div> */}
            <div className="viewgamenoibat">
              {dataVocher.map((item, index) => (
                <ItemPosts key={index} item={item} />
              ))}
            </div>

            {/* <div className="vocher_nentang">
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
            </div> */}
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
            </div>
            <div className="title_Vocherx">Tin hot gần đây</div>
            <div className="list_xemnhieutuanqua">
              <div className="thethaoluannhieu">
                <div className="sox">1</div>
                <div className="noidungsox">
                  Tuyển tập TOP 5 chiếc iPhone pin trâu nhất 2022 thỏa thích sử
                  dụng cả ngày dài!
                </div>
              </div>
              <div className="thethaoluannhieu">
                <div className="sox">2</div>
                <div className="noidungsox">
                  Gọi tên TOP 5 điện thoại Samsung pin trâu đáng mua nhất 2022
                  tại TGDĐ
                </div>
              </div>
              <div className="thethaoluannhieu">
                <div className="sox">3</div>
                <div className="noidungsox">
                  Đừng bỏ qua loạt iPhone giảm giá ngon, đáng sắm nhất chương
                  trình sale tại TGDĐ!
                </div>
              </div>
              <div className="thethaoluannhieu">
                <div className="sox">4</div>
                <div className="noidungsox">
                  5 mẫu smartwatch đáng mua ở giá dưới 2 triệu, một số mẫu có
                  thể nghe gọi trực tiếp
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="thecach"></div>
      </div>
    </div>
  );
};

export default VocherHome;
