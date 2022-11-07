import React, { useState } from "react";
import "../sass/pages/event.scss";
import {
  dataBlogMovie,
  dataHotMovie,
} from "../components/subcomponents/datafake/dataBlogMovie";
//a
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
const Event = () => {
  const [review, setReView] = useState(true);
  return (
    <div className="event">
      <div className="main">
        <div className="tag_movie">
          <div>
            <div className="menu24h">
              <ul>
                <li onClick={() => setReView(!review)}>Movie Reviews</li>
                <li onClick={() => setReView(!review)}>Hot movie</li>
                <li>Career</li>
                <li>promotion</li>
                <li className="dkdn">Fixgo - Fan cuồng Cúc Tịnh Y</li>
              </ul>
            </div>
            <div className="themain24h">
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
                          [Review] Black Adam: Cứu Tinh Cho Vũ Trụ DC Mở Rộng?
                        </div>
                        <div className="noidung24h">
                          Với kinh phí 200 triệu $, Black Adam gánh trên vai
                          trách nhiệm nặng nề – phục hưng vũ trụ DC mở rộng sau
                          hàng núi khó khăn. Wonder Woman 1984 thất bại, Bagirl
                          “ra chuồng gà”, The Flash gặp nguy cơ khỏi chiếu vì
                          Ezra Miller lắm tài nhiều tật... Đến cả thương hiệu tỷ
                          đô Aquaman cũng lao đao phải dời lịch chiếu vì Amber
                          Heard thua Johnny Depp trong vụ kiện tụng đình đám gần
                          đây.
                        </div>
                      </div>
                      <div className="right_trai">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/8/6/alienoid-cuoc-chien-xuyen-khong-bom-tan-vuot-qua-moi-gioi-han-tuong-tuong-1_1659803666009.jpg"
                          alt=""
                        />
                        <div className="title24hx">
                          [Review] Alienoid Cuộc Chiến Xuyên Không: Bom Tấn Vượt
                          Qua Mọi Giới Hạn Tưởng Tượng!
                        </div>
                        <div className="noidung24hx">
                          [Review] Cười: Lời Nguyền Sẽ Không Dừng Lại!
                        </div>
                        <div className="noidung24hx">
                          [Review] Cô Gái Từ Quá Khứ: Đạp Đổ Hoàn Toàn Gái Già
                          Lắm Chiêu?
                        </div>
                        <div className="noidung24hx">
                          [Preview] Black Panther Wakanda Forever: T’Challa Hi
                          Sinh Trong Trận Chiến Với Atlantis?
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
                    <div className="title">Hot Movie</div>
                    {dataHotMovie.map((item, index) => (
                      <ItemHotMovie key={index} item={item} />
                    ))}
                  </>
                )}
                {/* hot movie */}
              </div>

              <div className="main24hphai">
                <img
                  src="https://cdn.tgdd.vn/2022/07/banner/380X215-380x215.gif"
                  alt=""
                />
                <div className="chudehot">CHỦ ĐỀ HOT</div>
                <div className="taghot">
                  <button>
                    <i class="fa-regular fa-circle-dot"></i>&ensp;Mẹo không phải
                    ai cũng biết
                  </button>
                  <button>
                    <i class="fa-regular fa-circle-dot"></i>&ensp;Thế giới phụ
                    kiện
                  </button>
                  <button>
                    <i class="fa-regular fa-circle-dot"></i>&ensp;Tất tần tật về
                    IOS 16
                  </button>
                  <button>
                    {" "}
                    <i class="fa-regular fa-circle-dot"></i>&ensp;Thế giới đồng
                    hồ
                  </button>
                  <button>
                    {" "}
                    <i class="fa-regular fa-circle-dot"></i>&ensp;Samsung
                    Unpacked 2022 có gì ?
                  </button>
                </div>
                <div className="chudegachduoi">THẢO LUẬN NHIỀU</div>
                <div className="thethaoluannhieu">
                  <div className="so">1</div>
                  <div className="noidungso">
                    Ezra Miller Chìm Trong Scandal, Tương Lai Nào Cho The Flash
                    Và DCEU?
                  </div>
                </div>
                <div className="thethaoluannhieu">
                  <div className="so">2</div>
                  <div className="noidungso">
                    Chi Tiết Đoạn Phim Doctor Strange 2 Trình Chiếu Tại Comic
                    Con
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
                    Trailer Thor: Love And Thunder Tiết Lộ Kẻ Sát Thần Đáng Sợ
                  </div>
                </div>

                <div className="chudexanh">EVocher</div>
                <div className="fixanh">
                  <img
                    src="https://cdn.tgdd.vn/Files/2022/08/02/1452676/minigame-tim-hieu-the-he-gap-dot-pha-3_1280x720-300x200.jpg"
                    alt=""
                  />
                </div>
                <div className="title24hx">
                  Nhập mã SPPMWG giảm 10% tối đa 100K khi thanh toán qua ví
                  ShopeePay
                </div>
                <div className="thegioithieu24h">
                  <div className="item_thegioithieu">
                    <img
                      src="https://cdn.tgdd.vn/Files/2022/08/02/1452699/dien-thoai-vivo-giam-gia-1_1280x720-300x200.jpg"
                      alt=""
                    />
                    <div>
                      Tất tần tật các mẫu smartphone Vivo tinh tế, sang trọng
                      đang giảm giá cực ngon
                    </div>
                  </div>
                  <div className="item_thegioithieu">
                    <img
                      src="https://cdn.tgdd.vn/Files/2022/08/02/1452809/itelisw-41-501_1280x720-300x200.jpg"
                      alt=""
                    />
                    <div>
                      Bạn còn nhớ Itel ISW-41 - mẫu smartwatch giá rẻ giảm sốc
                      300K kèm quà ngon
                    </div>
                  </div>
                  <div className="item_thegioithieu">
                    <img
                      src="https://cdn.tgdd.vn/Files/2022/08/01/1452422/dien-thoai-samsung-doc-quyen-1_1280x720-300x200.jpg"
                      alt=""
                    />
                    <div>
                      Smartphone độc quyền nhà Samsung giảm sốc tới nóc, SamFans
                      tậu ngay đi
                    </div>
                  </div>
                  <div className="item_thegioithieu">
                    <img
                      src="https://cdn.tgdd.vn/Files/2022/07/31/1452322/realme85g-281_1280x720-300x200.jpg"
                      alt=""
                    />
                    <div>
                      Điện thoại Realme 5G giá rẻ nhất đang có ưu đãi trả góp
                      0%, sắm cực dễ dàng
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tag_movie">
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

export default Event;
