# LWB GTC PIDS Simulator / 龍運巴士機場地面運輸中心顯示屏模擬器

A web & desktop simulator replicating the Passenger Information Display System (PIDS) of Long Win Bus (LWB) at the Hong Kong International Airport Ground Transportation Centre (GTC).  
這是一個支援網頁與桌面端的模擬器，高度還原香港國際機場地面運輸中心（GTC）的龍運巴士（LWB）乘客資訊顯示屏（PIDS）。

---

## 🌐 Web Version / 線上網頁版

Try the live web version directly in your browser without installing anything:  
無需安裝任何軟體，直接透過瀏覽器開啟線上體驗：

👉 **[Live Demo / 線上預覽](https://kenyip0244.github.io/LWB-GTC-PIDS-Simulator/)**

* **Tip:** Double-click anywhere on the screen to toggle full-screen mode for the best display experience.  
* **提示：** 在網頁畫面上按滑鼠雙擊，即可切換為全螢幕顯示模式。

---

## 📥 Desktop Downloads / 桌面版下載

Pre-built binaries for Windows, macOS, and Linux are automatically compiled via GitHub Actions:  
已透過 GitHub Actions 自動編譯全平台安裝檔，可至 **[Releases 發布頁面](https://github.com/kenyip0244/LWB-GTC-PIDS-Simulator/releases)** 下載：

| Platform / 作業系統 | File Format / 檔案格式 | Description / 說明 |
| :--- | :--- | :--- |
| **Windows** | `.exe` (Setup / Portable) | 支援 Windows 10 / 11 安裝檔與免安裝版本 |
| **macOS** | `.dmg` / `.zip` | 支援 Intel 與 Apple Silicon (M 系列) 晶片 |
| **Linux** | `.deb` / `.zip` | 支援 Debian / Ubuntu 等 Linux 發行版 |

---

## 🌟 Features / 功能特色

### English
* **Real-time ETA:** Direct integration with KMB/LWB Open API, updating ETA dynamically every 15 seconds.
* **Pixel-Accurate UI:** Authentic replication of the physical GTC display, featuring the signature orange/blue theme, 3×5 grid layout, and bilingual typography.
* **Auto-Pagination:** Automatically cycles through active routes every 10 seconds if route data exceeds one page (15 items).
* **Caching & Performance:** Uses `localStorage` to cache airport terminal Stop IDs, eliminating redundant network queries on reload.
* **Fullscreen Experience:** Double-click anywhere or press `F11` to toggle borderless fullscreen mode.

### 繁體中文
* **實時抵站預報 (ETA)：** 直接串接九巴與龍運政府開放數據 API，每 15 秒自動刷新最新開出時間。
* **高精度介面復刻：** 完美還原實體顯示屏細節，包含標誌性橙/白/藍配色、3×5 網格佈局與中英雙語目的地排版。
* **自動輪播分頁：** 當出發班次超過一頁（15 條路線）時，每 10 秒自動翻頁輪播。
* **快取與載入優化：** 導入 `localStorage` 機場站點 ID 快取機制，避免重複下載站點清單，實現秒開載入。
* **全螢幕模式：** 畫面上按滑鼠雙擊或按下鍵盤 `F11` 即可切換全螢幕顯示。

---

## 🛠️ Tech Stack / 技術棧

* **Frontend:** HTML5, CSS3 (CSS Grid, Flexbox, CSS Variables), Vanilla JavaScript (ES6+, Async/Await, Fetch API)
* **Desktop Runtime:** [Electron](https://www.electronjs.org/)
* **Packaging & CI/CD:** [Electron Forge](https://www.electronforge.io/), GitHub Actions

---

## 💻 Local Development / 本地開發與手動打包

### Prerequisites / 前置需求
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* Git

### Installation & Run / 安裝與啟動

```bash
# 1. Clone the repository / 下載專案
git clone [https://github.com/kenyip0244/LWB-GTC-PIDS-Simulator.git](https://github.com/kenyip0244/LWB-GTC-PIDS-Simulator.git)
cd LWB-GTC-PIDS-Simulator

# 2. Install dependencies / 安裝套件
npm install

# 3. Run desktop app locally / 本地啟動桌面程式
npm start

```

### Build Executables / 手動編譯安裝檔

```bash
# Package for current OS / 編譯當前作業系統的安裝檔
npm run make

```

---

## 📡 Data Source / 資料來源

* [DATA.GOV.HK - KMB Route, Bus Stop and ETA data](https://www.google.com/search?q=https://data.gov.hk/tc-data/dataset/hk-td-tis_21-kmb-route-stop-eta) / 資料一線通：九巴及龍運路線、巴士站及預計到站時間數據

---

## ⚠️ Disclaimer / 免責聲明

**EN:** This project is a non-commercial simulator created for educational and enthusiast purposes only. It is not affiliated with, authorized, maintained, or endorsed by Long Win Bus Company Limited (LWB) or The Kowloon Motor Bus Co. (1933) Ltd (KMB).

**ZH:** 本專案為非商業性愛好者模擬器，僅供學術研究與個人展示之用。本專案與「龍運巴士有限公司」及「九龍巴士（一九三三）有限公司」無任何官方關聯、授權或背書。
