"use client";

import { useState } from "react";

export default function FetchButton() {
  const [data, setData] = useState<{ result?: string; photo?: string; error?: string } | null>(null);

  const handleFetch = async () => {
    try {
      const res = await fetch("/api/db");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
      setData({ error: "Failed to fetch from server." });
    }
  };

  return (
    <div className="p-4 border rounded max-w-md mx-auto">
      <button
        onClick={handleFetch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fetch Data
      </button>

      {data && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          {data.error && <p className="text-red-600 font-semibold">{data.error}</p>}
          {data.result && <p className="font-semibold">{data.result}</p>}
          {data.photo && (
            <div className="mt-2">
              <img
                src={data.photo}
                alt="Dog photo"
                className="rounded shadow-md max-w-xs"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
