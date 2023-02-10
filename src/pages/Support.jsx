import React from "react";
import "../sass/pages/support.scss";
import { useEffect } from "react";

const Support = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);
  return (
    <div className="support">
      <div className="main">
        <div className="tag_movie">
          <div>
            <div className="menu24h"></div>
            <div className="themain24h">
              <div className="main24htrai">
                <div className="titlex">Contact us</div>
                <div className="fanpage">
                  <div className="textx">
                    <i class="fa-brands fa-square-facebook"></i>&nbsp;Fanpage
                    Facebook
                  </div>
                  <div className="text">
                    <i class="fa-solid fa-phone"></i>&nbsp;Tel:&nbsp;
                    <a href="tel:0862956946">0862 956 946</a>
                    {/* <br />
                    Tel 2:&nbsp;<a href="tel:0862956946">0862 956 946</a> <br />
                    Tel 3:&nbsp;<a href="tel:0862956946">0862 956 946</a> */}
                  </div>{" "}
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100089819840953&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1620897148361329"
                    width="340"
                    height=""
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                  <div className="text">
                    <i class="fa-solid fa-map-location"></i>&nbsp;Location:
                    Trường Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh, Đường
                    Võ Văn Ngân, Linh Chiểu, Thủ Đức, Thành phố Hồ Chí Minh
                  </div>
                </div>
                <div className="title">
                  Questions and suggestions (bị load chậm)
                </div>
                <div className="plugincmt">
                  <div
                    class="fb-comments"
                    href="https://www.youtube.com/channel/UCC43krXpGPTFYR6H8L8f4rA"
                    width=""
                    numposts="5"
                  ></div>
                </div>
              </div>
              <div className="main24hphai">
                <img
                  className="img"
                  src="https://i.vietgiaitri.com/2021/9/3/money-heist-tung-nong-15-phut-dau-chua-gi-da-co-canh-giuong-chieu-giao-su-bi-tra-tan-da-man-khong-loi-thoat-a16-6003819.gif"
                  alt=""
                />
                <div className="chudehot">CHỦ ĐỀ HOT</div>
                <div className="taghot">
                  <button>
                    <i class="fa-regular fa-circle-dot"></i>&ensp;Đón chờ các
                    siêu phẩm rạp cận tết 2022
                  </button>
                  <button>
                    <i class="fa-regular fa-circle-dot"></i>&ensp;Thế giới anime
                  </button>
                  <button>
                    <i class="fa-regular fa-circle-dot"></i>&ensp;Tất tần tật về
                    Spider Man
                  </button>
                  <button>
                    {" "}
                    <i class="fa-regular fa-circle-dot"></i>&ensp;Sự khác biệt
                    giữa Marvel và DC
                  </button>
                  <button>
                    {" "}
                    <i class="fa-regular fa-circle-dot"></i>&ensp;Chùm siêu anh
                    hùng DC ra mắt năm 2022
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
              </div>
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

export default Support;
