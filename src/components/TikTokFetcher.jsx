import { useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

const TikTokFetcher = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    if (!url.trim()) return;

    setLoading(true);
    setError("");
    setData(null);

    const encodedUrl = encodeURIComponent(url);
    const fetchUrl = `${apiUrl}?url=${encodedUrl}&hd=1`;

    try {
      const response = await fetch(fetchUrl, {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
        },
      });

      const result = await response.json();

      if (result && result.data) {
        setData(result.data);
      } else {
        setError("No data found.");
      }
    } catch (err) {
      setError("Failed to fetch data.");
    }

    setLoading(false);
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 10000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num.toString();
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow p-6 space-y-4">
      <h1 className="text-2xl font-semibold text-gray-800 text-center">
        TikTok Video Downloader
      </h1>

      <form action="">
        <input
          type="text"
          placeholder="Paste TikTok video link..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          className="w-full bg-blue-600  mt-4 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          onClick={handleFetch}
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {data && (
        <div className="mt-6 bg-white shadow-md rounded-xl overflow-hidden pb-4">
          <video src={data.play} controls className="w-full" />

          <div className="p-4 space-y-2">
            <h2 className="text-lg font-semibold text-gray-700">
              {data.author.nickname}
            </h2>
            <p className="text-gray-700 text-[16px] font-semibold">
              {data.title}
            </p>
          </div>

          <div className="flex gap-6 px-4">
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="red"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                />
              </svg>
              {formatNumber(data.digg_count)}
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chat-left"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              </svg>
              {data.comment_count}
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bookmark"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
              </svg>
              {formatNumber(data.collect_count)}
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              </svg>
              {data.share_count}
            </p>
          </div>
          <div className="px-4 mt-4">
            <a
              href={data.play}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
            >
              Download Video
            </a>
            <a
              href={data.play}
              download
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TikTokFetcher;
