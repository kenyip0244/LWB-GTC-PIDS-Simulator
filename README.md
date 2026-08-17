# LWB GTC PIDS Simulator

A web-based simulator replicating the Passenger Information Display System (PIDS) of Long Win Bus (LWB) at the Hong Kong International Airport Ground Transportation Centre (GTC).

*(For the Traditional Chinese version, please scroll down / 繁體中文版本請見下方)*

---

## 🌟 Features

* **Real-time ETA:** Fetches live Estimated Time of Arrival data directly from the KMB/LWB Open API, refreshing every 15 seconds.
* **Accurate UI Replication:** Highly restores the physical display layout, including the signature orange/blue/white color scheme, 3x5 grid system, and bilingual destinations.
* **Auto-Pagination:** Automatically cycles through routes every 10 seconds if the data exceeds one page.
* **Performance Optimized:** Utilizes `localStorage` to cache Stop IDs, significantly reducing initial load times and redundant API calls.
* **Fullscreen Mode:** Double-click anywhere on the screen to toggle true fullscreen for an immersive display experience.

## 🛠️ Tech Stack

* **HTML5** (Structure)
* **CSS3** (Styling & CSS Variables, Grid Layout)
* **Vanilla JavaScript** (ES6+, Async/Await, Fetch API)

## 🚀 How to Use

This project requires no build tools or server backend.
1. Clone or download this repository.
2. Open https://kenyip0244.github.io/LWB-GTC-PIDS-Simulator/ in any modern web browser (Chrome, Edge, Safari, Firefox).
3. **Double-click** the screen to enter Fullscreen mode.

## 📡 Data Source

* [DATA.GOV.HK - KMB Route, Bus Stop and ETA data](https://data.gov.hk/tc-data/dataset/hk-td-tis_21-kmb-route-stop-eta)

## ⚠️ Disclaimer

This is a fan-made project created for educational and simulation purposes only. It is not affiliated with, endorsed, or sponsored by Long Win Bus Company Limited (LWB) or The Kowloon Motor Bus Co. (1933) Ltd (KMB). All ETA data is provided by the Open API and its accuracy is not guaranteed.

---
---

# 龍運巴士機場地面運輸中心顯示屏模擬器

這是一個基於網頁的模擬器，完美還原了香港國際機場地面運輸中心（GTC）的龍運巴士（LWB）乘客資訊顯示屏（PIDS）。

---

## 🌟 功能特色

* **實時預報 (ETA)：** 直接串接九巴 / 龍運開放資料 API，每 15 秒自動刷新最新預計開出時間。
* **高度還原 UI：** 完美復刻實體顯示屏排版，包含經典的橙白藍配色、3×5 網格佈局以及中英雙語目的地資訊。
* **自動輪播：** 當運作路線超過一頁時，系統會每 10 秒自動翻頁。
* **效能優化：** 導入 `localStorage` 快取技術，自動記憶站點 ID，大幅減少冗餘的 API 請求與載入時間。
* **全螢幕模式：** 在畫面上雙擊滑鼠左鍵即可切換全螢幕，適合實體螢幕展示。

## 🛠️ 技術棧

* **HTML5** (結構)
* **CSS3** (樣式佈局、CSS 變數、網格系統)
* **Vanilla JavaScript** (原生 JS 邏輯處理、Async/Await、Fetch API)

## 🚀 使用方法

此專案為純前端網頁，無需安裝任何依賴套件或後端伺服器。
1. 下載或 Clone 此儲存庫。
2. 使用任何現代瀏覽器（Chrome, Edge, Safari, Firefox）開啟 https://kenyip0244.github.io/LWB-GTC-PIDS-Simulator/。
3. 在畫面上 **雙擊（Double Click）** 即可進入全螢幕模式。

## 📡 資料來源

* [資料一線通：九巴路線、巴士站及預計到站時間數據](https://data.gov.hk/tc-data/dataset/hk-td-tis_21-kmb-route-stop-eta)

## ⚠️ 免責聲明

本專案為愛好者製作之模擬器，僅供學術交流與模擬展示之用，與「龍運巴士有限公司」及「九龍巴士（一九三三）有限公司」並無任何官方聯繫、贊助或背書關係。所有班次資料均來自政府開放數據 API，開發者不保證其資料之絕對準確性。
