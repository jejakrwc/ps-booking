// =================================================
// ✅ DATA BOOKING & KONFIGURASI (file terpisah: data-booking.js)
// =================================================
const waNumber = "6282389224224"; // Ganti nomor WA kamu

const bookedData = [
  { date: "2025-10-25", start: "18:00", duration: 2, room: "VIP 1" },
  { date: "2025-10-25", start: "18:00", duration: 2, room: "VIP 2" },
  { date: "2025-10-25", start: "18:00", duration: 2, room: "VVIP 1" },
  { date: "2025-10-25", start: "15:00", duration: 1, room: "Reguler 3" },
  { date: "2025-10-25", start: "10:00", duration: 2, room: "Smoking 11" },
];

const priceList = {
  Reguler: { PS4: 10000, PS5: 15000 },
  Smoking: { PS4: 12000, PS5: 17000 },
  VIP: { PS4: 20000, PS5: 25000 },
  VVIP: { PS4: 75000, PS5: 75000 },
};

const roomsByConsole = {
  PS4: [
    { group: "Reguler", list: ["Reguler 1", "Reguler 2", "Reguler 6", "Reguler 7", "Reguler 8"] },
    { group: "Smoking", list: ["Smoking 10", "Smoking 11", "Smoking 12", "Smoking 13"] },
    { group: "VIP", list: ["VIP 1", "VIP 2", "VIP 3", "VIP 4"] },
    { group: "VVIP", list: ["VVIP 1"] },
  ],
  PS5: [
    { group: "Reguler", list: ["Reguler 3", "Reguler 4"] },
    { group: "Smoking", list: ["Smoking 9"] },
    { group: "VIP", list: ["VIP 5", "VIP 6"] },
    { group: "VVIP", list: ["VVIP 1"] },
  ],
};
