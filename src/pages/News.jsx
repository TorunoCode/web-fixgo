import React, { useState } from "react";
import "../sass/pages/news.scss";
import {
  dataBlogMovie,
  dataHotMovie,
} from "../components/subcomponents/Datafake";
import Voucher from "../components/subcomponents/Voucher";

function ItemBlogMovie({ item }) {
  return (
    <div className="item24h_item">
      <img src={item.image} alt="" />
      <div className="item24h_right">
        <div className="item24h_right_title">{item.title}</div>
        <div className="item24h_right_time">{item.time}</div>
        <div className="item24h_right_time">{item.content}</div>
      </div>
    </div>
  );
}
function ItemHotMovie({ item }) {
  return (
    <div className="item24h_item">
      <img src={item.image} alt="" />
      <div className="item24h_right">
        <div className="item24h_right_title">{item.title}</div>

        <div className="item24h_right_time">{item.content}</div>
      </div>
    </div>
  );
}
const News = () => {
  const [review, setReView] = useState(true);
  const [hotmovie, setHotmovie] = useState(false);
  const [vocher, setVocher] = useState(false);

  return (
    <div className="news">
      <div className="main">
        <div className="tag_movie">
          <div>
            <div className="menu24h">
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
                <li className="dkdn">Fixgo - Fan cuồng Cúc Tịnh Y</li>
              </ul>
            </div>
            <div className="themain24h">
              {vocher ? (
                <Voucher />
              ) : (
                <>
                  {" "}
                  <div className="main24htrai">
                    {review ? (
                      <>
                        <div className="title">Movie Review</div>
                        <div className="main24htrai_1">
                          <div className="left_trai">
                            <img
                              src="https://cdn.galaxycine.vn/media/2022/8/14/preview-black-adam-dwayne-johnson-thanh-phan-anh-hung-cuc-suc-6_1660454758375.jpg"
                              alt=""
                            />
                            <div className="title24h">
                              [Review] Black Adam: Cứu Tinh Cho Vũ Trụ DC Mở
                              Rộng?
                            </div>
                            <div className="noidung24h">
                              Với kinh phí 200 triệu $, Black Adam gánh trên vai
                              trách nhiệm nặng nề – phục hưng vũ trụ DC mở rộng
                              sau hàng núi khó khăn. Wonder Woman 1984 thất bại,
                              Bagirl “ra chuồng gà”, The Flash gặp nguy cơ khỏi
                              chiếu vì Ezra Miller lắm tài nhiều tật... Đến cả
                              thương hiệu tỷ đô Aquaman cũng lao đao phải dời
                              lịch chiếu vì Amber Heard thua Johnny Depp trong
                              vụ kiện tụng đình đám gần đây.
                            </div>
                          </div>
                          <div className="right_trai">
                            <img
                              src="https://cdn.galaxycine.vn/media/2022/8/6/alienoid-cuoc-chien-xuyen-khong-bom-tan-vuot-qua-moi-gioi-han-tuong-tuong-1_1659803666009.jpg"
                              alt=""
                            />
                            <div className="title24hx">
                              [Review] Alienoid Cuộc Chiến Xuyên Không: Bom Tấn
                              Vượt Qua Mọi Giới Hạn Tưởng Tượng!
                            </div>
                            <div className="noidung24hx">
                              [Review] Cười: Lời Nguyền Sẽ Không Dừng Lại!
                            </div>
                            <div className="noidung24hx">
                              [Review] Cô Gái Từ Quá Khứ: Đạp Đổ Hoàn Toàn Gái
                              Già Lắm Chiêu?
                            </div>
                            <div className="noidung24hx">
                              [Preview] Black Panther Wakanda Forever: T’Challa
                              Hi Sinh Trong Trận Chiến Với Atlantis?
                            </div>
                          </div>
                        </div>
                        <div className="title">Movie Blog</div>
                        <div className="main24htrai_2">
                          {dataBlogMovie.map((item, index) => (
                            <ItemBlogMovie key={index} item={item} />
                          ))}
                        </div>
                        <div className="main24htrai_3">
                          <iframe
                            width="800"
                            height="450"
                            src="https://www.youtube.com/embed/red9YvYlPWg"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="title" style={{ marginBottom: "10px" }}>
                          Hot Movie
                        </div>
                        {dataHotMovie.map((item, index) => (
                          <ItemHotMovie key={index} item={item} />
                        ))}
                      </>
                    )}
                    {/* hot movie */}
                  </div>
                  <div className="main24hphai">
                    <img
                      src="https://64.media.tumblr.com/f14da695c8d48b26368ed984db8f9b8a/tumblr_nqx83r5hqP1qczmzbo1_500.gif"
                      alt=""
                    />
                    <div className="chudehot">CHỦ ĐỀ HOT</div>
                    <div className="taghot">
                      <button>
                        <i class="fa-regular fa-circle-dot"></i>&ensp;Đón chờ
                        các siêu phẩm rạp cận tết 2022
                      </button>
                      <button>
                        <i class="fa-regular fa-circle-dot"></i>&ensp;Thế giới
                        anime
                      </button>
                      <button>
                        <i class="fa-regular fa-circle-dot"></i>&ensp;Tất tần
                        tật về Spider Man
                      </button>
                      <button>
                        {" "}
                        <i class="fa-regular fa-circle-dot"></i>&ensp;Sự khác
                        biệt giữa Marvel và DC
                      </button>
                      <button>
                        {" "}
                        <i class="fa-regular fa-circle-dot"></i>&ensp;Chùm siêu
                        anh hùng DC ra mắt năm 2022
                      </button>
                    </div>
                    <div className="chudegachduoi">THẢO LUẬN NHIỀU</div>
                    <div className="thethaoluannhieu">
                      <div className="so">1</div>
                      <div className="noidungso">
                        Ezra Miller Chìm Trong Scandal, Tương Lai Nào Cho The
                        Flash Và DCEU?
                      </div>
                    </div>
                    <div className="thethaoluannhieu">
                      <div className="so">2</div>
                      <div className="noidungso">
                        Chi Tiết Đoạn Phim Doctor Strange 2 Trình Chiếu Tại
                        Comic Con
                      </div>
                    </div>
                    <div className="thethaoluannhieu">
                      <div className="so">3</div>
                      <div className="noidungso">
                        Bóc Trứng Phục Sinh Doctor Strange In The Multiverse Of
                        Madness!
                      </div>
                    </div>
                    <div className="thethaoluannhieu">
                      <div className="so">4</div>
                      <div className="noidungso">
                        Trailer Thor: Love And Thunder Tiết Lộ Kẻ Sát Thần Đáng
                        Sợ
                      </div>
                    </div>
                    <div className="chudexanh">EVocher</div>
                    <div className="thegioithieu24hx">
                      <div className="item_thegioithieux">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg"
                          alt=""
                        />
                        <div>VNPAY-QR Tặng Deal Cực Cháy</div>
                      </div>
                      <div className="item_thegioithieux">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/10/5/300x450-gc_1664939520575.jpg"
                          alt=""
                        />
                        <div>Tung Deal IELTS - Phê Cùng Bom Tấn</div>
                      </div>
                    </div>
                    <div className="thegioithieu24h">
                      <div className="item_thegioithieu">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg"
                          alt=""
                        />
                        <div>VNPAY-QR Tặng Deal Cực Cháy</div>
                      </div>
                      <div className="item_thegioithieu">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/10/5/300x450-gc_1664939520575.jpg"
                          alt=""
                        />
                        <div>Tung Deal IELTS - Phê Cùng Bom Tấn</div>
                      </div>
                      <div className="item_thegioithieu">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/10/27/back2shool-digital-300x450-1663573378238_1666859670287.jpg"
                          alt=""
                        />
                        <div>Fixgo Cinema - Back To School 2022</div>
                      </div>
                      <div className="item_thegioithieu">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/9/21/glx-vani-1200x1800_1663745251301.jpg"
                          alt=""
                        />
                        <div>
                          Vani chào sân: Giảm ngay 40,000 VNĐ trên giá vé xem
                          phim tại hệ thống rạp Galaxy Cinema toàn quốc.
                        </div>
                      </div>
                      <div className="item_thegioithieu">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/9/21/glx-vani-1200x1800_1663745251301.jpg"
                          alt=""
                        />
                        <div>
                          Vani chào sân: Giảm ngay 40,000 VNĐ trên giá vé xem
                          phim tại hệ thống rạp Galaxy Cinema toàn quốc.
                        </div>
                      </div>
                      <div className="item_thegioithieu">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/9/21/glx-vani-1200x1800_1663745251301.jpg"
                          alt=""
                        />
                        <div>
                          Vani chào sân: Giảm ngay 40,000 VNĐ trên giá vé xem
                          phim tại hệ thống rạp Galaxy Cinema toàn quốc.
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div
          className="tag_movie"
          style={{ marginTop: "10px", borderTop: "1px solid gray" }}
        >
          <div className="title">Fixgo Cinema</div>
          <div>
            <br />
            Thế giới điện ảnh được ví như một vùng đất đang phát triển mở rộng
            mỗi ngày. Nói đến điện ảnh thì càng đi sâu sẽ càng khám phá ra nhiều
            khía cạnh mới.
            <br />
            <br />
            Sẽ có người thích thú với vai trò của đạo diễn. Muốn hiểu rõ xem đạo
            diễn cần làm những công việc gì, nguyên nhân và động lực gì khiến họ
            gần bó làm nghề. Bên cũng có lúc lại muốn biết lý do vì sao những
            nhà làm phim kia lại có thể sáng tạo nhiều câu chuyện thú vị đến
            thế.
            <br />
            <br />
            Nói về diễn viên, đời tư của các ngôi sao luôn là điều khiến công
            chúng tò mò. Họ thay đổi nhà cửa, mua thêm siêu xe..., thậm chí là
            cuộc sống tình cảm có vấn đề. Tất cả đều là những tin tức luôn hấp
            dẫn mọi người.
            <br />
            <br />
            Một tác phẩm đang chiếu tại rạp chiếu phim và được bàn tán khắp nơi.
            Bạn tự hỏi rằng nó có hay không, có nên cuốn theo số đông để thử
            trải nghiệm, nhưng giờ bạn cần một lời gợi ý hoặc một lời khuyên
            khách quan nhất, phải làm sao?
            <br />
            <br />
            Bạn vô tình xem được một thước phim cũ, cảm thấy nó quá tuyệt vời,
            càng bất ngờ hơn khi trong quá khứ phim từng càn quét vô số giải
            thưởng. Giờ đây khi muốn hiểu rõ hơn về thông điệp của phim, những
            câu chuyện bí mật phía sau hậu trường. Liệu phải làm thế nào? <br />
            <br />
            Tại sao các đạo diễn lại sử dụng góc máy như thế kia trên phim, vì
            sao người diễn viên này lại có thể đóng đạt như vậy? Tìm câu trả lời
            ở đâu bây giờ. Chào mừng bạn đến thư viện điện ảnh Fixgo Cinema, nơi
            cung cấp các bài viết về những thước phim kinh điển, thông tin hậu
            trường thú vị của những phim hay và các bom tấn đang chiếu tại Fixgo
            Cinema.
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
