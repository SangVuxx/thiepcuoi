// ========================================================
// CẤU HÌNH THÔNG TIN THIỆP CƯỚI - VĂN SANG & HỒNG NGỌC
// Cập nhật chuẩn xác 100% theo mẫu thiệp in gia đình
// ========================================================

const WEDDING_CONFIG = {
  // 1. Thông tin Chú Rể & Nhà Trai
  groom: {
    fullName: "Vũ Văn Sang",
    shortName: "Vũ Sang",
    father: "Vũ Văn Tùng",
    mother: "Lại Thị Phượng",
    address: "Xóm 6 Phúc Thắng, Xã Rạng Đông, H. Nghĩa Hưng, T. Ninh Bình",
    phone: "0337429431",
    avatar: "images/NTD07810.jpg",
    avatarFallback: "https://lh3.googleusercontent.com/d/1wqVSMSgOSMNuvcaBRvY4ZyQBpH_RFyk4=w800",
    bank: {
      bankName: "Vietinbank",
      bankCode: "ICB",
      accountNumber: "105871060860",
      accountName: "VU VAN SANG"
    }
  },

  // 2. Thông tin Cô Dâu & Nhà Gái
  bride: {
    fullName: "Lưu Thị Hồng Ngọc",
    shortName: "Hồng Ngọc",
    father: "Lưu Mạnh Thường",
    mother: "Ngô Thị Thơm",
    address: "Khu 6 Hương Xạ, Xã Yên Kỳ, Huyện Hạ Hòa, T. Phú Thọ",
    phone: "0962262270",
    avatar: "images/NTD07890.jpg",
    avatarFallback: "https://lh3.googleusercontent.com/d/1pz0qjlUBmDudsFGDVCy4CS13uYK1nLPR=w800",
    bank: {
      bankName: "BIDV",
      bankCode: "BIDV",
      accountNumber: "2152782293",
      accountName: "LUU THI HONG NGOC"
    }
  },

  // 3. Ảnh bìa chính (Hero Couple Photo)
  heroCover: {
    url: "images/NTD07535.jpg",
    fallbackUrl: "https://lh3.googleusercontent.com/d/1hwAjqchG3nYENmPB3L_BgyZljF1CzdQV=w1200",
    caption: "The Wedding of Sang & Ngọc"
  },

  // 4. Lời trích dẫn / Lời mời từ thiệp in
  quote: {
    content: "Thân mời anh em, bạn bè và các em tới chung vui và chia sẻ khoảnh khắc ý nghĩa này cùng vợ chồng mình!",
    author: "Vũ Sang & Hồng Ngọc",
    subContent: "Sự hiện diện của bạn là niềm hạnh phúc lớn nhất của vợ chồng mình!"
  },

  // 5. Dress Code theo mẫu thiệp in
  dressCode: {
    title: "Tone pastel",
    desc: "Trang phục lịch sự, thanh lịch với các gam màu pastel nhẹ nhàng (Trắng kem, Be nhạt, Xanh sage)",
    colors: [
      { name: "Trắng kem", hex: "#FFFFFF", border: "#e0d8c8" },
      { name: "Be ấm", hex: "#EFE5D8", border: "#dcd0c0" },
      { name: "Xanh Sage", hex: "#CBD5C0", border: "#b2c0a5" },
      { name: "Hồng Pastel", hex: "#F7DFD4", border: "#e5c5b5" }
    ]
  },

  // 6. TIỆC CƯỚI TƯ GIA NHÀ TRAI (NINH BÌNH) - Chuẩn theo ảnh thiệp in
  eventGroom: {
    side: "groom",
    sideLabel: "Nhà Trai",
    invitationType: "Thiệp Mời Thành Hôn",
    title: "Tiệc Cưới Tư Gia Nhà Trai",
    subTitle: "Thân mời anh em, bạn bè và các em tới chung vui và chia sẻ khoảnh khắc ý nghĩa này cùng vợ chồng mình!",
    // Mốc thời gian bắt đầu đón khách: 08:00 sáng Chủ Nhật 20/12/2026
    solarDate: "2026-12-20T08:00:00", 
    solarDateText: "Chủ Nhật, 20 . 12 . 2026",
    lunarDateText: "Nhằm ngày 12/11 năm Bính Ngọ",
    timeText: "Vào lúc: 08:00",
    locationName: "Tư gia Nhà Trai",
    hallName: "Lễ Thành Hôn",
    address: "Xóm 6 Phúc Thắng, Xã Rạng Đông, Tỉnh Ninh Bình",
    mapUrl: "https://maps.google.com/?q=X%C3%B3m+6+Ph%C3%BAc+Th%E1%BA%AFng,+R%E1%BA%A1ng+%C4%90%C3%B4ng,+Ninh+B%C3%ACnh",
    timeline: [
      { time: "08:00", title: "Đón Tiếp Khách Mời", desc: "Đón tiếp anh em, bạn bè, người thương tới chung vui bữa cơm thân mật tại Tư gia Nhà Trai" },
      { time: "11:50", title: "Đón Dâu Về Tư Gia", desc: "Đón dâu & Đoàn nhà gái về tới tư gia Nhà Trai" },
      { time: "12:00", title: "Bắt Đầu Hôn Lễ & Khai Tiệc", desc: "Nghi thức thành hôn thiêng liêng, trao nhẫn thề nguyền và khai tiệc chúc mừng" },
      { time: "13:00", title: "Mini Game & Giao Lưu", desc: "Giao lưu âm nhạc acoustic, mini game và chụp ảnh kỷ niệm" }
    ]
  },

    // 7. TIỆC CƯỚI & LỄ VU QUY NHÀ GÁI (PHÚ THỌ) - Chuẩn 100% theo mẫu thiệp in
  eventBride: {
    side: "bride",
    sideLabel: "Nhà Gái",
    invitationType: "Thiệp Mời Vu Quy & Tiệc Mừng",
    title: "Hồng Ngọc & Vũ Sang — Lễ Vu Quy & Tiệc Mừng",
    subTitle: "Tới dự bữa cơm thân mật chung vui cùng gia đình chúng tôi mừng ngày thành hôn của con gái!",
    // Tiệc cưới chính Nhà Gái: Thứ Bảy, 19/12/2026
    solarDate: "2026-12-19T10:00:00", 
    solarDateText: "Thứ Bảy, 19 . 12 . 2026",
    lunarDateText: "Nhằm ngày 11/11 năm Bính Ngọ",
    timeText: "Tiệc Cưới Nhà Gái",
    locationName: "Nhà Hàng Sơn Tám",
    hallName: "Tiệc Mừng Vu Quy",
    address: "Khu 6, Xã Yên Kỳ, Huyện Hạ Hòa, Tỉnh Phú Thọ",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Nh%C3%A0+h%C3%A0ng+S%C6%A1n+T%C3%A1m+Khu+6+Y%C3%AAn+K%E1%BB%B3+H%E1%BA%A1+H%C3%B2a+Ph%C3%BA+Th%E1%BB%8D",
    ceremony: {
      title: "Lễ Vu Quy (Nghi thức Xuất Giá)",
      timeText: "Vào lúc: 12:00",
      solarDateText: "Chủ Nhật, 20 . 12 . 2026",
      lunarDateText: "Nhằm ngày 12/11 năm Bính Ngọ",
      locationName: "Tư gia Nhà Gái",
      address: "Khu 6 Hương Xạ, Xã Yên Kỳ, Huyện Hạ Hòa, T. Phú Thọ",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Khu+6+H%C6%B0%C6%A1ng+X%E1%BA%A1+Y%C3%AAn+K%E1%BB%B3+H%E1%BA%A1+H%C3%B2a+Ph%C3%BA+Th%E1%BB%8D"
    },
    representative: "Đại diện gia đình: Ông bà Lưu Mạnh Thường & Ngô Thị Thơm kính báo",
    subQuote: "Sự hiện diện của Quý vị là niềm vinh hạnh sâu sắc đối với gia đình chúng tôi!"
  },

  // Sự kiện mặc định (Nhà Trai)
  get event() {
    return this.eventGroom;
  },

  // Danh sách ảnh cưới trưng bày (Gallery)
  gallery: [
    {
      url: "images/NTD07535.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1hwAjqchG3nYENmPB3L_BgyZljF1CzdQV=w1200",
      caption: "Khoảnh Khắc Tinh Khôi - Trọn Vẹn Yêu Thương"
    },
    {
      url: "images/NTD07045.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1Bdjy3RpzURn_mYTgPJPxHXIsNFUwOwG0=w1200",
      caption: "Nét Đẹp Duyên Dáng - Áo Dài Tinh Khôi"
    },
    {
      url: "images/NTD07114.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1xrX-eQl37SnDOK9vSEEF7iqNsyTGO3Ld=w1200",
      caption: "Chữ Duyên Gắn Kết - Trăm Năm Hạnh Phúc"
    },
    {
      url: "images/NTD07178.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/15n84TTSk-E6Gv5LEKF6xobIuAnWHQrMm=w1200",
      caption: "Cùng Em Đi Suốt Cuộc Đời"
    },
    {
      url: "images/NTD07389.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1UkPpfjTKqcBAG7iKl32eh1QiBkR34sqp=w1200",
      caption: "Ánh Mắt Dành Riêng Cho Em"
    },
    {
      url: "images/NTD07639.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1mlKLLlBWWdFfa6mtmHFuJ4MrJjkAE-Po=w1200",
      caption: "Nắm Tay Nhau Đi Đến Muôn Nơi"
    },
    {
      url: "images/NTD07810.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1wqVSMSgOSMNuvcaBRvY4ZyQBpH_RFyk4=w1200",
      caption: "Chú Rể Văn Sang - Tự Tin & Chững Chạc"
    },
    {
      url: "images/NTD07890.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1pz0qjlUBmDudsFGDVCy4CS13uYK1nLPR=w1200",
      caption: "Cô Dâu Hồng Ngọc - Xinh Đẹp & Rạng Rỡ"
    },
    {
      url: "images/NTD07938.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1rLIyR6LsFdEOxLy2AvcsHOGuYJrrFBDG=w1200",
      caption: "Lời Hẹn Thề Nguyện Ước"
    },
    {
      url: "images/NTD08060.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1pTGxfhaA0A6gAy3pJH57Ao-bod1J7_jv=w1200",
      caption: "Bó Hoa Tình Yêu & Khúc Ca Tương Phùng"
    },
    {
      url: "images/NTD08275.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1pTo2mxIKS5f6dEQ5FxBx7at3OEYf2V9A=w1200",
      caption: "Nụ Hôn Dịu Dàng - Bình Yên Bên Anh"
    },
    {
      url: "images/NTD08282.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1gjuJ0KKwj1T5k28s1bhTvOH6UMMI5EUm=w1200",
      caption: "Khoảnh Khắc Diệu Kỳ Dưới Khăn Voan"
    },
    {
      url: "images/NTD08502.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/15HIjK7tKeynQYuTPBl5VxmN74zuC4SQM=w1200",
      caption: "She And I Are Getting Married"
    },
    {
      url: "images/NTD08513.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/15NrIYTFhHvj_z4hg-3mIsMUuDhO1g6Nj=w1200",
      caption: "Hạnh Phúc Giản Đơn & Ngọt Ngào"
    },
    {
      url: "images/NTD08724.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1M8iBtUcmxRfjiXP0h8JA06694jKAIiNJ=w1200",
      caption: "Khai Tiệc Chúc Mừng - Nâng Ly Hạnh Phúc"
    },
    {
      url: "images/NTD08762.jpg",
      fallbackUrl: "https://lh3.googleusercontent.com/d/1hwmAt98Uk8WorgDFG2bkrmCAjnO4Lqem=w1200",
      caption: "Rót Tràn Men Say Yêu Thương"
    }
  ],

  // Link trọn bộ Google Drive gốc của cô dâu chú rể
  fullDriveFolder: "https://drive.google.com/drive/folders/18ZtsyIyrCqx-SbRKkDlRDnMzlwi1JO9R",

  // Nhạc nền: Golden Hour – JVKE (bản không lời / instrumental)
  audioUrl: "https://archive.org/download/golden-hour-instrumental/golden-hour-instrumental.mp3"
};
