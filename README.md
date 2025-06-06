# TikTok Video Downloader

A simple and responsive TikTok Video Downloader built with **React.js**. This app allows users to paste a TikTok video URL and download the video without a watermark in HD quality using the RapidAPI endpoint.

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

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/tiktok-video-downloader.git
cd tiktok-video-downloader

npm install

VITE_API_KEY=your_rapidapi_key
VITE_API_URL=https://tiktok-video-no-watermark2.p.rapidapi.com

npm run dev

src/
├── components/
│   └── TikTokFetcher.jsx
├── App.jsx
├── main.jsx
└── ...