# TikTok Video Downloader

A simple and responsive TikTok Video Downloader built with **React.js**. This app allows users to paste a TikTok video URL and download the video without a watermark in HD quality using the RapidAPI endpoint. Note: This downloader currently supports only PC browsers.

## ✨ Features

- Paste and fetch TikTok videos using a public URL.
- Download videos in HD without a watermark.
- Display author nickname, video title, and engagement stats:
  - Likes
  - Comments
  - Bookmarks
  - Shares
- Responsive and clean UI with Tailwind CSS.
- Error handling and loading states.

## 📦 Technologies Used

- React.js (Vite)
- Tailwind CSS
- RapidAPI (TikTok Video No Watermark API)
- HTML5 Video Player

## 🚀 Getting Started

### 1️⃣ Clone the repository

```sh
git clone https://github.com/leezii03/TikTok-Downloader.git
cd tiktok-video-downloader
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
```sh
VITE_API_KEY=your_rapidapi_key
VITE_API_URL=https://tiktok-video-no-watermark2.p.rapidapi.com
```

### 4️⃣ Run the project
```sh
npm run dev
```

### 5️⃣ Folder Structure
```sh
src/
├── components/
│   └── TikTokFetcher.jsx
├── App.jsx
├── main.jsx
└── ...
```