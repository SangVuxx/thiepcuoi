/* =========================================================
   LOGIC XỬ LÝ TƯƠNG TÁC THIỆP CƯỚI - VĂN SANG & HỒNG NGỌC
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const safeRun = (fn, name) => {
      try {
        if (typeof fn === "function") fn();
      } catch (err) {
        console.error("Error initializing " + name + ":", err);
      }
    };

    safeRun(initGuestPersonalization, "initGuestPersonalization");
    safeRun(renderWeddingData, "renderWeddingData");
    safeRun(initCountdown, "initCountdown");
    safeRun(initAudioPlayer, "initAudioPlayer");
    safeRun(initEnvelopeInteraction, "initEnvelopeInteraction");
    safeRun(initGalleryLightbox, "initGalleryLightbox");
    safeRun(initTactfulGiftModal, "initTactfulGiftModal");
    safeRun(initGuestbook, "initGuestbook");
    safeRun(initRSVP, "initRSVP");
    safeRun(initShareModal, "initShareModal");
    safeRun(initPetalsCanvas, "initPetalsCanvas");
    safeRun(initScrollReveal, "initScrollReveal");
  });

// 1. Cá nhân hóa tên khách mời từ đường dẫn URL (vd: ?to=Hoàng+Nam hoặc ?u=Bạn+Tuấn)
let currentGuestName = "Bạn Bè Người Thương";

function initGuestPersonalization() {
  const urlParams = new URLSearchParams(window.location.search);
  const guestParam = urlParams.get("to") || urlParams.get("u") || urlParams.get("name") || urlParams.get("guest");
  
  const openShareBtn = document.getElementById("btn-open-share");
  if (guestParam) {
    currentGuestName = guestParam.trim();
    document.title = `Thiệp Cưới Online: Văn Sang & Hồng Ngọc kính mời ${currentGuestName}`;
    // Khi gửi link riêng cho khách, ẩn hoàn toàn nút tạo link để khách không thấy
    if (openShareBtn) {
      openShareBtn.style.display = "none";
    }
  }

  const guestDisplays = document.querySelectorAll(".guest-name-display");
  guestDisplays.forEach(el => {
    el.textContent = currentGuestName;
  });

  // Tự động điền tên vào form xác nhận tham dự (RSVP)
  const rsvpNameInput = document.getElementById("rsvp-name");
  if (rsvpNameInput && guestParam) {
    rsvpNameInput.value = currentGuestName;
  }
}

// 2. Render dữ liệu từ WEDDING_CONFIG vào giao diện
function renderWeddingData() {
  const cfg = WEDDING_CONFIG;
  if (!cfg) return;

  // Tên dâu rể
  document.querySelectorAll(".groom-fullname").forEach(el => el.textContent = cfg.groom.fullName);
  document.querySelectorAll(".groom-shortname").forEach(el => el.textContent = cfg.groom.shortName);
  document.querySelectorAll(".bride-fullname").forEach(el => el.textContent = cfg.bride.fullName);
  document.querySelectorAll(".bride-shortname").forEach(el => el.textContent = cfg.bride.shortName);

  // Phụ huynh hai bên
  const groomFatherEl = document.getElementById("groom-father");
  if (groomFatherEl) groomFatherEl.textContent = "Ông: " + cfg.groom.father;
  const groomMotherEl = document.getElementById("groom-mother");
  if (groomMotherEl) groomMotherEl.textContent = "Bà: " + cfg.groom.mother;

  const brideFatherEl = document.getElementById("bride-father");
  if (brideFatherEl) brideFatherEl.textContent = "Ông: " + cfg.bride.father;
  const brideMotherEl = document.getElementById("bride-mother");
  if (brideMotherEl) brideMotherEl.textContent = "Bà: " + cfg.bride.mother;

  // Ảnh đại diện Chú Rể & Cô Dâu
  const groomAvatarEl = document.getElementById("groom-avatar-img");
  if (groomAvatarEl && cfg.groom.avatar) {
    groomAvatarEl.src = cfg.groom.avatar;
    groomAvatarEl.onerror = () => {
      groomAvatarEl.onerror = null;
      groomAvatarEl.src = cfg.groom.avatarFallback || cfg.groom.avatar;
    };
  }
  const brideAvatarEl = document.getElementById("bride-avatar-img");
  if (brideAvatarEl && cfg.bride.avatar) {
    brideAvatarEl.src = cfg.bride.avatar;
    brideAvatarEl.onerror = () => {
      brideAvatarEl.onerror = null;
      brideAvatarEl.src = cfg.bride.avatarFallback || cfg.bride.avatar;
    };
  }

  // Ảnh bìa chính (Hero Couple Photo)
  const heroCoverEl = document.getElementById("hero-cover-img");
  if (heroCoverEl && cfg.heroCover) {
    heroCoverEl.src = cfg.heroCover.url;
    heroCoverEl.onerror = () => {
      heroCoverEl.onerror = null;
      heroCoverEl.src = cfg.heroCover.fallbackUrl || cfg.heroCover.url;
    };
  }

  // Lời trích dẫn
  const quoteContent = document.getElementById("quote-text");
  if (quoteContent) quoteContent.textContent = `“${cfg.quote.content}”`;

  // Thông tin tiệc cưới
  const partyTime = document.getElementById("party-time-text");
  if (partyTime) partyTime.textContent = cfg.event.timeText;
  const partySolar = document.getElementById("party-solar-date");
  if (partySolar) partySolar.textContent = cfg.event.solarDateText;
  const partyLunar = document.getElementById("party-lunar-date");
  if (partyLunar) partyLunar.textContent = cfg.event.lunarDateText;

  const partyVenue = document.getElementById("party-venue-name");
  if (partyVenue) partyVenue.textContent = cfg.event.locationName;
  const partyHall = document.getElementById("party-hall-name");
  if (partyHall) partyHall.textContent = cfg.event.hallName;
  const partyAddress = document.getElementById("party-address-text");
  if (partyAddress) partyAddress.textContent = cfg.event.address;

  // Nút bản đồ
  const mapBtn = document.getElementById("btn-google-map");
  if (mapBtn) mapBtn.href = cfg.event.mapUrl;

  // Nút thêm vào Google Calendar
  const calBtn = document.getElementById("btn-add-calendar");
  if (calBtn) {
    const startIso = cfg.event.solarDate.replace(/-|:|\.\d\d\d/g, "");
    const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Tiệc Cưới: " + cfg.groom.shortName + " & " + cfg.bride.shortName)}&dates=${startIso}/${startIso}&details=${encodeURIComponent("Trân trọng kính mời " + currentGuestName + " tới chung vui cùng gia đình chúng mình!")}&location=${encodeURIComponent(cfg.event.locationName + ", " + cfg.event.address)}`;
    calBtn.href = calUrl;
  }

  // Render Lịch trình (Timeline)
  const timelineContainer = document.getElementById("timeline-list");
  if (timelineContainer && cfg.event.timeline) {
    timelineContainer.innerHTML = cfg.event.timeline.map((item, idx) => `
      <div class="timeline-item reveal-item reveal-left delay-${(idx % 4) + 1}">
        <div class="timeline-dot"></div>
        <div class="timeline-time">${item.time}</div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-desc">${item.desc}</div>
      </div>
    `).join("");
  }

  // Render Album Ảnh (Gallery)
  const galleryContainer = document.getElementById("gallery-grid");
  if (galleryContainer && cfg.gallery) {
    galleryContainer.innerHTML = cfg.gallery.map((item, idx) => `
      <div class="gallery-item reveal-item reveal-zoom delay-${(idx % 4) + 1}" data-index="${idx}" data-url="${item.url}" data-fallback="${item.fallbackUrl || ''}" data-caption="${item.caption || 'Văn Sang & Hồng Ngọc'}">
        <img src="${item.url}" onerror="if(this.dataset.fallback){this.onerror=null; this.src=this.dataset.fallback;}" data-fallback="${item.fallbackUrl || ''}" alt="${item.caption || 'Ảnh cưới'}" loading="lazy" />
        <div class="gallery-overlay">
          <span>${item.caption || 'Văn Sang & Hồng Ngọc'}</span>
        </div>
      </div>
    `).join("");
  }

  // Render Thông tin mừng cưới (VietQR)
}

// 3. Mở cửa trượt gấm đỏ Song Hỷ 囍 (Sliding Doors)
function initEnvelopeInteraction() {
    const sealBtn = document.getElementById("wax-seal-btn");
    const doorsOverlay = document.getElementById("envelope-overlay");

    if (!doorsOverlay) return;

    let isOpening = false;
    function openDoors(e) {
      if (isOpening || doorsOverlay.classList.contains("door-opening") || doorsOverlay.classList.contains("door-opened")) return;
      isOpening = true;

      doorsOverlay.classList.add("door-opening");

      // Phát nhạc an toàn
      try {
        playAudio();
      } catch (err) {
        console.warn("Audio autoplay err:", err);
      }

      setTimeout(() => {
        doorsOverlay.classList.add("door-opened");
        doorsOverlay.style.pointerEvents = "none";
        showToast("Chào mừng bạn tới dự hôn lễ của chúng mình!");
        // Kích hoạt chạy chữ phần Hero ngay khi mở cửa
        document.querySelectorAll(".hero-section .reveal-item").forEach(el => {
          el.classList.add("revealed");
        });
        setTimeout(() => {
          doorsOverlay.style.display = "none";
        }, 500);
      }, 850);
    }

    if (sealBtn) {
      sealBtn.addEventListener("click", openDoors);
      sealBtn.addEventListener("touchend", openDoors, { passive: true });
    }

    // Chạm vào bất kỳ vị trí nào trên màn phong bì/cánh cửa cũng mở thiệp
    doorsOverlay.addEventListener("click", openDoors);
    doorsOverlay.addEventListener("touchend", openDoors, { passive: true });
  }

// 4. Đồng hồ đếm ngược (Countdown)
function initCountdown() {
  const targetDateStr = WEDDING_CONFIG.event.solarDate;
  const targetTime = new Date(targetDateStr).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    const daysEl = document.getElementById("count-days");
    const hoursEl = document.getElementById("count-hours");
    const minsEl = document.getElementById("count-mins");
    const secsEl = document.getElementById("count-secs");

    if (distance < 0) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minsEl) minsEl.textContent = "00";
      if (secsEl) secsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = days < 10 ? "0" + days : days;
    if (hoursEl) hoursEl.textContent = hours < 10 ? "0" + hours : hours;
    if (minsEl) minsEl.textContent = mins < 10 ? "0" + mins : mins;
    if (secsEl) secsEl.textContent = secs < 10 ? "0" + secs : secs;
  }

  update();
  setInterval(update, 1000);
}

// 5. Trình phát nhạc nền (Audio Player) - Đảm bảo chạy 100% kể cả mở từ file://
let audioEl = null;
let isAudioPlaying = false;
let audioCtx = null;
let synthInterval = null;

function initAudioPlayer() {
  const musicBtn = document.getElementById("music-toggle-btn");
  audioEl = document.getElementById("wedding-audio");

  if (musicBtn) {
    musicBtn.addEventListener("click", () => {
      if (isAudioPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });
  }

  // Tự động kích hoạt âm thanh khi người dùng chạm vào bất kỳ đâu trên trang
  function onFirstInteraction() {
    if (!isAudioPlaying) {
      playAudio();
    }
    document.removeEventListener("click", onFirstInteraction);
    document.removeEventListener("touchstart", onFirstInteraction);
  }
  document.addEventListener("click", onFirstInteraction);
  document.addEventListener("touchstart", onFirstInteraction);
}

function playAudio() {
  const musicBtn = document.getElementById("music-toggle-btn");
  isAudioPlaying = true;
  if (musicBtn) musicBtn.classList.add("playing");

  if (audioEl) {
    audioEl.play().then(() => {
      // Đã phát thành công bài hát mp3
      stopSynth();
    }).catch((err) => {
      console.warn("Audio element blocked on file://, falling back to Web Audio synth melody:", err);
      // Dự phòng phát giai điệu Golden Hour (JVKE)
      playSynthMelody();
    });
  } else {
    playSynthMelody();
  }
}

function pauseAudio() {
  const musicBtn = document.getElementById("music-toggle-btn");
  isAudioPlaying = false;
  if (musicBtn) musicBtn.classList.remove("playing");

  if (audioEl) {
    audioEl.pause();
  }
  stopSynth();
}

function stopSynth() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
}

function playSynthMelody() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    // Giai điệu piano mở đầu đặc trưng của Golden Hour – JVKE
        const notes = [
          { f: 392.00, d: 0.22 }, // G4
          { f: 493.88, d: 0.22 }, // B4
          { f: 587.33, d: 0.22 }, // D5
          { f: 783.99, d: 0.22 }, // G5
          { f: 739.99, d: 0.22 }, // F#5
          { f: 587.33, d: 0.22 }, // D5
          { f: 493.88, d: 0.22 }, // B4
          { f: 392.00, d: 0.22 }, // G4
          { f: 329.63, d: 0.22 }, // E4
          { f: 392.00, d: 0.22 }, // G4
          { f: 493.88, d: 0.22 }, // B4
          { f: 659.25, d: 0.22 }, // E5
          { f: 587.33, d: 0.22 }, // D5
          { f: 493.88, d: 0.22 }, // B4
          { f: 392.00, d: 0.22 }, // G4
          { f: 329.63, d: 0.22 }  // E4
        ];

        let noteIdx = 0;
        function playNote() {
          if (!isAudioPlaying) return;
          const note = notes[noteIdx % notes.length];
          noteIdx++;

          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();

          osc.type = 'triangle'; // Âm thanh piano hộp nhạc nhẹ nhàng
          osc.frequency.setValueAtTime(note.f, audioCtx.currentTime);

          gain.gain.setValueAtTime(0.09, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);

          osc.connect(gain);
          gain.connect(audioCtx.destination);

          osc.start();
          osc.stop(audioCtx.currentTime + 0.35);
        }

        stopSynth();
        playNote();
        synthInterval = setInterval(playNote, 220);
  } catch (err) {
    console.warn("Synth error:", err);
  }
}

// 6. Quản lý Tab Ngân hàng & Tự động tạo VietQR

function initTactfulGiftModal() {
  const modal = document.getElementById("gift-modal");
  const closeBtn = document.getElementById("gift-modal-close");
  const btnGroom = document.getElementById("btn-open-gift-groom");
  const btnBride = document.getElementById("btn-open-gift-bride");
  const copyBtn = document.getElementById("gift-modal-copy-btn");

  let currentModalSide = "groom";

  function openModal(side) {
currentModalSide = side;
const info = side === "groom" ? WEDDING_CONFIG.groom : WEDDING_CONFIG.bride;
const bank = info.bank;

const titleEl = document.getElementById("gift-modal-title");
const subTitleEl = document.getElementById("gift-modal-subtitle");
const iconEl = document.getElementById("gift-modal-icon");
const bankNameEl = document.getElementById("gift-modal-bank-name");
const bankAccEl = document.getElementById("gift-modal-bank-acc");
const bankOwnerEl = document.getElementById("gift-modal-bank-owner");
const qrImg = document.getElementById("gift-modal-qr-img");

if (titleEl) titleEl.textContent = `Mừng Cưới Đến ${info.shortName}`;
if (subTitleEl) subTitleEl.textContent = side === "groom" ? "Tư gia Nhà Trai (Ninh Bình)" : "Tư gia Nhà Gái (Phú Thọ)";
if (iconEl) iconEl.textContent = side === "groom" ? "🎁" : "🌸";
if (bankNameEl) bankNameEl.textContent = bank.bankName;
if (bankAccEl) bankAccEl.textContent = bank.accountNumber;
if (bankOwnerEl) bankOwnerEl.textContent = bank.accountName;

let code = bank.bankCode || "MB";
if (code.toLowerCase() === "vietinbank" || code.toLowerCase() === "viettinbank") code = "ICB";
const memo = encodeURIComponent(`Mung cuoi ${WEDDING_CONFIG.groom.shortName} ${WEDDING_CONFIG.bride.shortName}`);
const qrUrl = `https://img.vietqr.io/image/${code}-${bank.accountNumber}-compact.jpg?amount=&accountName=${encodeURIComponent(bank.accountName)}&addInfo=${memo}`;

if (qrImg) qrImg.src = qrUrl;
if (modal) modal.classList.add("active");
  }

  function closeModal() {
if (modal) modal.classList.remove("active");
  }

  if (btnGroom) btnGroom.addEventListener("click", () => openModal("groom"));
  if (btnBride) btnBride.addEventListener("click", () => openModal("bride"));
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  if (modal) {
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
  }

  if (copyBtn) {
copyBtn.addEventListener("click", () => {
  const target = currentModalSide === "bride" ? WEDDING_CONFIG.bride.bank : WEDDING_CONFIG.groom.bank;
  navigator.clipboard.writeText(target.accountNumber).then(() => {
showToast(`Đã sao chép STK ${target.accountNumber} (${target.bankName})`);
  }).catch(() => {
showToast("Không thể tự động sao chép, vui lòng copy thủ công!");
  });
});
  }
}


// 7. Lightbox xem ảnh to
function initGalleryLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const gallery = document.getElementById("gallery-grid");

  if (!modal || !modalImg) return;

  let currentIndex = 0;
  const galleryItems = WEDDING_CONFIG.gallery || [];

  function showImage(idx) {
    if (!galleryItems.length) return;
    currentIndex = (idx + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentIndex];
    modalImg.src = item.url;
    modalImg.onerror = () => {
      modalImg.onerror = null;
      modalImg.src = item.fallbackUrl || item.url;
    };
    if (modalCaption) {
      modalCaption.textContent = item.caption || `Ảnh ${currentIndex + 1}/${galleryItems.length}`;
    }
  }

  if (gallery) {
    gallery.addEventListener("click", (e) => {
      const item = e.target.closest(".gallery-item");
      if (!item) return;
      const idx = parseInt(item.getAttribute("data-index"), 10);
      showImage(isNaN(idx) ? 0 : idx);
      modal.classList.add("active");
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showImage(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showImage(currentIndex + 1);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target === modalImg) {
      modal.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") modal.classList.remove("active");
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  });
}

// 8. Sổ lưu bút trực tuyến (Guestbook)
const INITIAL_WISHES = [
  { name: "Thu Trang", time: "Hôm nay", message: "Chúc hai bạn trăm năm hạnh phúc, mãi mãi ngọt ngào và thấu hiểu nhau như những ngày đầu!" },
  { name: "Minh Quân & Nhóm Bạn Thân", time: "Hôm qua", message: "Cuối cùng thì ông bạn chí cốt cũng chịu lên xe hoa! Chúc Văn Sang & Hồng Ngọc sớm đón thiên thần nhỏ nhé!" },
  { name: "Linh Đan", time: "2 ngày trước", message: "Cô dâu xinh đẹp tuyệt trần! Chúc hai bạn một đời an yên, cùng nhau vượt qua mọi thử thách của cuộc sống." }
];

function initGuestbook() {
  const form = document.getElementById("wish-form");
  const listEl = document.getElementById("wishes-list");

  let wishes = JSON.parse(localStorage.getItem("wedding_wishes") || "null");
  if (!wishes || !wishes.length) {
    wishes = INITIAL_WISHES;
    localStorage.setItem("wedding_wishes", JSON.stringify(wishes));
  }

  function renderWishes() {
    if (!listEl) return;
    listEl.innerHTML = wishes.map((w, idx) => `
      <div class="wish-item reveal-item reveal-up delay-${(idx % 3) + 1}">
        <div class="wish-item-header">
          <span class="wish-sender-name">${escapeHtml(w.name)}</span>
          <span class="wish-time">${w.time}</span>
        </div>
        <div class="wish-content">${escapeHtml(w.message)}</div>
      </div>
    `).join("");
  }

  renderWishes();

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("wish-name");
      const msgInput = document.getElementById("wish-message");

      const name = nameInput.value.trim() || "Người bạn giấu tên";
      const message = msgInput.value.trim();

      if (!message) {
        showToast("Vui lòng nhập lời chúc nhé!");
        return;
      }

      // Gửi dữ liệu tới Netlify Forms để lưu vào hệ thống
      try {
        const formData = new FormData(form);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        }).catch(err => console.log("Netlify Form wish submit:", err));
      } catch (e) {
        console.log(e);
      }

      wishes.unshift({
        name: name,
        time: "Vừa xong",
        message: message
      });

      localStorage.setItem("wedding_wishes", JSON.stringify(wishes));
      renderWishes();
      msgInput.value = "";
      showToast("Cảm ơn bạn đã gửi lời chúc yêu thương!");
    });
  }
}

// 9. Xác nhận tham dự (RSVP)
function initRSVP() {
  const form = document.getElementById("rsvp-form");
  if (!form) return;

  const successBox = document.getElementById("rsvp-success-box");
  const successDesc = document.getElementById("rsvp-success-desc");
  const zaloBtn = document.getElementById("btn-zalo-rsvp-notify");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("rsvp-name").value.trim();
    const phone = document.getElementById("rsvp-phone").value.trim();
    const count = document.getElementById("rsvp-count").value;
    const status = document.querySelector('input[name="rsvp_status"]:checked')?.value || "Tham dự";

    // 1. Gửi lên Netlify Forms
    try {
      const formData = new FormData(form);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      }).catch(err => console.log("Netlify RSVP submit:", err));
    } catch (e) {
      console.log(e);
    }

    // 2. Lưu vào trình duyệt
    const rsvpData = { name, phone, count, status, date: new Date().toISOString() };
    const saved = JSON.parse(localStorage.getItem("wedding_rsvps") || "[]");
    saved.push(rsvpData);
    localStorage.setItem("wedding_rsvps", JSON.stringify(saved));

    // 3. Hiển thị thông báo thành công và nút Zalo gửi về chú rể
    showToast("Đã ghi nhận phản hồi! Rất hân hạnh được đón tiếp bạn.");
    
    if (successBox) {
      successBox.style.display = "block";
      const statusText = status === "Tham dự" ? `chắc chắn tham dự (${count} người)` : "rất tiếc không thể đến";
      if (successDesc) {
        successDesc.innerHTML = `Đã ghi nhận: <strong>${name}</strong> - ${statusText}.`;
      }
      if (zaloBtn) {
        const zaloText = encodeURIComponent(`Chào Sang, mình là ${name} (${phone || 'bạn'}). Mình vừa xác nhận trên thiệp cưới online: ${statusText} nhé!`);
        zaloBtn.href = `https://zalo.me/0337429431?text=${zaloText}`;
      }
    }

    form.reset();
  });
}

// 10. Modal tạo đường dẫn gửi bạn bè
function initShareModal() {
  const openBtn = document.getElementById("btn-open-share");
  const modal = document.getElementById("share-modal");
  const closeBtn = document.getElementById("share-modal-close");
  const friendNameInput = document.getElementById("friend-name-input");
  const previewGuestTitle = document.getElementById("preview-guest-title");
  const linkBox = document.getElementById("share-result-link");
  const copyLinkBtn = document.getElementById("btn-copy-link");
  const copyZaloBtn = document.getElementById("btn-copy-zalo-msg");
  const prefixChips = document.querySelectorAll("#prefix-chips .btn-prefix");

  if (!modal) return;

  let currentPrefix = "";

  // Bấm nút mở modal
  if (openBtn) openBtn.addEventListener("click", () => modal.classList.add("active"));

  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  // Chọn tiền tố xưng hô
  prefixChips.forEach(chip => {
    chip.addEventListener("click", () => {
      prefixChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentPrefix = chip.getAttribute("data-prefix") || "";
      updateLink();
    });
  });

  function getCombinedName() {
    const raw = friendNameInput ? friendNameInput.value.trim() : "";
    if (!raw) return currentPrefix ? `${currentPrefix.trim()}` : "Bạn Bè Người Thương";
    return `${currentPrefix}${raw}`;
  }

  function updateLink() {
    const fullName = getCombinedName();
    if (previewGuestTitle) {
      previewGuestTitle.textContent = `Thân Mời: ${fullName}`;
    }

    const currentUrl = window.location.href.split("?")[0].replace("danh-sach-khach.html", "index.html");
    const shareUrl = `${currentUrl}?to=${encodeURIComponent(fullName)}`;
    if (linkBox) linkBox.textContent = shareUrl;
    return { fullName, shareUrl };
  }

  if (friendNameInput) {
    friendNameInput.addEventListener("input", updateLink);
  }
  updateLink();

  // Copy link
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", () => {
      const { shareUrl } = updateLink();
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast("Đã sao chép link thiệp cá nhân hóa!");
      });
    });
  }

  // Copy tin nhắn Zalo kèm link
  if (copyZaloBtn) {
    copyZaloBtn.addEventListener("click", () => {
      const { fullName, shareUrl } = updateLink();
      const zaloMsg = `Thân gửi ${fullName}, chúng mình xin gửi thiệp cưới online mời bạn tới chung vui cùng gia đình chúng mình nhé: ${shareUrl} . Rất mong được đón tiếp bạn!`;
      navigator.clipboard.writeText(zaloMsg).then(() => {
        showToast(`Đã copy tin nhắn Zalo cho "${fullName}"!`);
      });
    });
  }
}

// 11. Toast thông báo
function showToast(msg) {
  let toast = document.getElementById("toast-notice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// 12. Hiệu ứng hoa & lá sage bay nhẹ nhàng (Canvas)
function initPetalsCanvas() {
  const canvas = document.getElementById("petals-canvas");
  if (!canvas || typeof canvas.getContext !== "function") return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const TOTAL = 28;
  const particles = [];

  const COLORS = [
    "rgba(168, 28, 48, 0.78)",  // Cánh hoa hồng đỏ nhung
    "rgba(195, 35, 55, 0.82)",  // Cánh hoa đỏ ruby rực rỡ
    "rgba(255, 255, 255, 0.92)", // Cánh hoa trắng tinh khôi
    "rgba(218, 165, 32, 0.75)"  // Hạt bụi vàng kim sa lấp lánh
  ];

  for (let i = 0; i < TOTAL; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 9 + 5,
      speedX: Math.random() * 1.2 - 0.6,
      speedY: Math.random() * 1.1 + 0.6,
      rotation: Math.random() * 360,
      spin: Math.random() * 1.8 - 0.9,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      sway: Math.random() * 0.02 + 0.005,
      swayOffset: Math.random() * 100
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += Math.sin((p.y + p.swayOffset) * p.sway) * 0.9 + p.speedX;
      p.rotation += p.spin;

      if (p.y > height + 25) {
        p.y = -25;
        p.x = Math.random() * width;
      }
      if (p.x > width + 25) p.x = -25;
      if (p.x < -25) p.x = width + 25;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(p.size * 0.8, -p.size * 0.8, p.size * 1.6, 0);
      ctx.quadraticCurveTo(p.size * 0.8, p.size * 0.8, 0, 0);
      ctx.fill();

      ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// 12. Hiệu ứng cuộn màn hình chữ chạy ra (Scroll Reveal Animations)
function initScrollReveal() {
  document.body.classList.add("scroll-reveal-ready");
  const items = document.querySelectorAll(".reveal-item");

  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.12
  });

  items.forEach(el => observer.observe(el));
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
