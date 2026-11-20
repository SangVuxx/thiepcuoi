# HƯỚNG DẪN SỬ DỤNG THIỆP CƯỚI ONLINE - VĂN SANG & HỒNG NGỌC
*(Cập nhật chuẩn xác 100% theo mẫu thiệp in gia đình - Ngày cưới: 20/12/2026)*

Bộ mã nguồn thiệp cưới trực tuyến cao cấp được thiết kế đầy đủ 2 phiên bản độc lập:
- 🏠 **Bản Nhà Trai (`index.html`)**: **Thiệp Mời Thành Hôn** tại Tư gia Nhà Trai (*Xóm 6 Phúc Thắng, Xã Rạng Đông, Tỉnh Ninh Bình*).
- 🌸 **Bản Nhà Gái (`nha-gai.html`)**: **Thiệp Mời Vu Quy** tại Tư gia Nhà Gái (*Khu 6 Hương Xa, Xã Yên Kỳ, Tỉnh Phú Thọ*).
- 🔄 **Thanh chuyển đổi nhanh (Switcher)**: Đặt ở đầu trang giúp khách mời và hai bên gia đình chuyển đổi qua lại giữa Thiệp Nhà Trai & Thiệp Nhà Gái dễ dàng chỉ bằng 1 cú chạm.
- 🌺 **Trang trí Hoa Cẩm Tú Cầu (Hydrangea)**: Vòng hoa cẩm tú cầu vector pastel sang trọng bao quanh ấn Song Hỷ 囍 ở giữa và 2 chùm hoa góc trên 2 cánh cửa trượt gấm đỏ.
- 🚫 **Bỏ hoàn toàn chữ "Trưởng nam / Út nữ"**: Trình bày thông tin bố mẹ và quê quán trang trọng, thanh lịch.
- 💳 **Hộp mừng cưới thông minh**: Số tài khoản, ngân hàng, tên chủ tài khoản và nút sao chép STK luôn hiển thị rõ ràng. Mã QR mặc định được **thu gọn (không expand)**; chỉ khi người xem bấm vào nút **"Bấm Mở Mã QR Quét Ngân Hàng"** thì mã QR mới bung mở mượt mà.
- 👗 **Dress Code Tone Pastel**: Gợi ý bảng màu pastel nhẹ nhàng (Trắng kem, Be ấm, Xanh Sage, Hồng Pastel) chuẩn theo mẫu thiệp in.
- 🖼️ **Trọn bộ 32 ảnh cưới**: Tích hợp toàn bộ ảnh chất lượng cao từ Google Drive kèm link xem drive gốc.
- 📋 **Bảng tạo link hàng loạt (`danh-sach-khach.html`)**: Hỗ trợ chuyển đổi tạo link gửi riêng khách Nhà Trai hoặc khách Nhà Gái.

---

## 1. CÁCH XEM THIỆP TRÊN MÁY TÍNH & ĐIỆN THOẠI NGAY LẬP TỨC
- Bạn chỉ cần **nhấp đúp chuột vào file `index.html`** để mở trực tiếp trên trình duyệt (Chrome, Cốc Cốc, Edge, Firefox, Safari).
- Bấm vào con dấu sáp tròn **"Mở Thiệp"** để trải nghiệm hiệu ứng lật mở cánh thiệp và phát nhạc.

---

## 2. CÁCH CHỈNH SỬA THÔNG TIN (NGÀY GIỜ, ĐỊA ĐIỂM, SỐ TÀI KHOẢN)
Toàn bộ thông tin được tách riêng trong file **`config.js`**. Bạn mở file `config.js` bằng Notepad hoặc VS Code để sửa:

```javascript
const WEDDING_CONFIG = {
  // 1. Chú rể & Cô dâu:
  groom: {
    fullName: "Vũ Văn Sang",
    shortName: "Vũ Sang",
    father: "Vũ Văn Tùng",
    mother: "Lại Thị Phượng",
    address: "Xóm 6 Phúc Thắng, X. Rạng Đông, T. Ninh Bình",
    phone: "0337429431",
    bank: {
      bankName: "Vietinbank",
      bankCode: "ICB",
      accountNumber: "105871060860",
      accountName: "VU VAN SANG"
    }
  },
  bride: {
    fullName: "Lưu Thị Hồng Ngọc",
    shortName: "Hồng Ngọc",
    father: "Lưu Mạnh Thường",
    mother: "Ngô Thị Thơm",
    address: "Khu 6 Hương Xa, X. Yên Kỳ, T. Phú Thọ",
    phone: "0962262270",
    bank: {
      bankName: "BIDV",
      bankCode: "BIDV",
      accountNumber: "2152782293",
      accountName: "LUU THI HONG NGOC"
    }
  },

  // 2. Tiệc cưới Nhà Trai (Ninh Bình):
  eventGroom: {
    timeText: "Vào lúc: 08:00",
    solarDateText: "Chủ Nhật, 20 . 12 . 2026",
    locationName: "Tư gia Nhà Trai",
    address: "Xóm 6 Phúc Thắng, Xã Rạng Đông, Tỉnh Ninh Bình"
  },

  // 3. Tiệc cưới Nhà Gái (Phú Thọ):
  eventBride: {
    timeText: "Vào lúc: 07:30",
    solarDateText: "Chủ Nhật, 20 . 12 . 2026",
    locationName: "Tư gia Nhà Gái",
    address: "Khu 6 Hương Xa, Xã Yên Kỳ, Tỉnh Phú Thọ"
  }

  // 3. Album ảnh cưới:
  gallery: [
    { url: "đường_dẫn_ảnh_1.jpg", caption: "Lời chú thích" },
    ...
  ]
};
```

---

## 3. CÁCH THAY ẢNH CỦA BẠN VÀO THIỆP
- Bạn có thể tạo thư mục `images/` trong cùng thư mục này và bỏ các ảnh cưới của hai bạn vào đó (ví dụ: `images/anh1.jpg`, `images/anh2.jpg`).
- Sau đó trong `config.js`, đổi đường dẫn ảnh thành: `images/anh1.jpg`.

---

## 4. CÁCH ĐƯA LÊN MẠNG MIỄN PHÍ ĐỂ GỬI LINK QUA ZALO / MESSENGER
Để bạn bè có thể xem thiệp mọi lúc mọi nơi trên điện thoại, bạn có thể đưa lên web hoàn toàn **miễn phí 100% vĩnh viễn** bằng 1 trong các cách sau:

### Cách 1: Dùng Vercel hoặc Netlify (Dễ nhất - Chỉ mất 1 phút)
1. Truy cập [app.netlify.com/drop](https://app.netlify.com/drop) (hoặc [vercel.com](https://vercel.com)).
2. Kéo thả cả thư mục `Thiệp cưới` này thả vào trang web.
3. Trang web sẽ tạo cho bạn 1 đường link ngay lập tức (Ví dụ: `https://thiepcuoi-vansang-hongngoc.netlify.app`).

### Cách 2: Dùng GitHub Pages
1. Tạo 1 repository trên GitHub (ví dụ: `thiep-cuoi`).
2. Tải toàn bộ các file (`index.html`, `style.css`, `script.js`, `config.js`) lên.
3. Vào **Settings** -> **Pages** -> Bật chế độ GitHub Pages tại nhánh `main`. Bạn sẽ có link dạng: `https://tên_bạn.github.io/thiep-cuoi/`.

---

## 5. CÁCH TẠO LINK GỬI RIÊNG CHO TỪNG BẠN BÈ

Để mỗi người bạn nhận được một chiếc thiệp có khắc tên riêng của mình, bạn có 3 cách cực kỳ dễ:

### Cách 1: Thêm trực tiếp vào đuôi đường link (Nhanh nhất)
Ví dụ link thiệp của bạn là: `https://thiepcuoi.netlify.app/`
- Muốn gửi cho **Hoàng Nam**: gửi link `https://thiepcuoi.netlify.app/?to=Hoàng Nam`
- Muốn gửi cho **Hải Yến**: gửi link `https://thiepcuoi.netlify.app/?to=Hải Yến`
- Muốn gửi cho **Anh Tuấn & Gia Đình**: gửi link `https://thiepcuoi.netlify.app/?to=Anh Tuấn & Gia Đình`
- Muốn gửi cho **Vợ chồng bạn Minh**: gửi link `https://thiepcuoi.netlify.app/?to=Vợ chồng bạn Minh`
*(Trình duyệt và Zalo/Messenger tự động nhận diện tiếng Việt có dấu, khoảng trắng rất mượt mà).*

---

### Cách 2: Dùng nút "Tạo Link Gửi Bạn Bè" ngay trên trang web
1. Mở trang [index.html](file:///c:/Users/sangv/Downloads/Thi%E1%BB%87p%20c%C6%B0%E1%BB%9Bi/index.html).
2. Bấm vào nút màu xanh **"Tạo Link Gửi Bạn Bè"** (hoặc bấm thẳng vào ô tên khách trên bìa thiệp).
3. Chọn xưng hô nhanh (Bạn, Anh, Chị, Em, Gia đình...) và gõ tên bạn bè.
4. Bấm **"Copy kèm tin Zalo"** hoặc **"Copy Link"** để dán sang khung chat Zalo/Messenger gửi cho bạn bè.

---

### Cách 3: Dùng công cụ "Tạo danh sách hàng loạt" (Cho 50 - 100 bạn bè)
Nếu bạn có danh sách nhiều bạn bè trong Excel hoặc Zalo:
1. Mở file [danh-sach-khach.html](file:///c:/Users/sangv/Downloads/Thi%E1%BB%87p%20c%C6%B0%E1%BB%9Bi/danh-sach-khach.html).
2. Dán danh sách tên bạn bè (mỗi người 1 dòng).
3. Bấm **"🚀 Tạo Danh Sách Link Thiệp"**.
4. Hệ thống sẽ sinh ra toàn bộ danh sách kèm nút:
   - 💬 **Copy Tin Zalo** (tự động đính kèm câu mời lịch sự và đánh dấu "Đã gửi").
   - 🔗 **Copy Link riêng**.
   - 👁️ **Xem thử thiệp** của từng người.
   - Thống kê chi tiết đã gửi bao nhiêu người, còn bao nhiêu người chưa gửi để bạn không lo bị sót khách!

---

## 6. CÁCH XEM DANH SÁCH BẠN BÈ ĐÃ XÁC NHẬN THAM GIA (RSVP) & LỜI CHÚC

Khi bạn bè nhận thiệp và bấm **"Gửi Xác Nhận"** hoặc gửi lời chúc, bạn có thể xem lại theo 2 cách rất tiện lợi:

### Cách 1: Xem trực tiếp trên trang quản trị Netlify (Có nút xuất file Excel)
1. Đăng nhập vào trang web quản lý: [app.netlify.com](https://app.netlify.com).
2. Bấm vào trang web thiệp cưới của bạn.
3. Ở menu thanh bên trái, bấm vào mục **Forms** (Biểu mẫu):
   - **`rsvp`**: Chứa toàn bộ thông tin xác nhận tham dự (Họ và tên, Số điện thoại, Đi mấy người, Có đến dự hay bận).
   - **`wishes`**: Chứa toàn bộ lời chúc tốt đẹp bạn bè gửi vào sổ lưu bút.
4. Bấm nút **"Download CSV"** để tải về file Excel danh sách khách tham dự, cực kỳ tiện lợi để lên số lượng mâm cỗ và xếp bàn tiệc!
5. *Mẹo*: Bạn có thể vào **Site configuration** -> **Notifications** -> **Form submissions** để cài đặt gửi Email thông báo về máy mỗi khi có bạn bè bấm xác nhận!

### Cách 2: Nhận tin nhắn thông báo trực tiếp qua Zalo
- Ngay sau khi khách bấm "Gửi Xác Nhận", trên thiệp cưới sẽ hiện nút: **"💬 Báo Tin Thêm Cho Chú Rể Qua Zalo"**.
- Khách bấm vào là Zalo sẽ tự soạn sẵn tin nhắn gửi đến số của Chú Rể (**0337429431**), bạn sẽ nhận được tin nhắn xác nhận tức thì trên điện thoại!


