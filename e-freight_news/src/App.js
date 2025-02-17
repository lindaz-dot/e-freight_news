import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";

const App = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("/news_data.json")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  const filterNews = category === "All" ? news : news.filter((n) => n.category === category);

  const downloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      ["Title,Link,Date,Category", ...news.map(n => `${n.title},${n.link},${n.date},${n.category}`)].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "news_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Freight Electrification News</h1>
      <div className="flex gap-4 mb-4">
        <select
          className="p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Industry News">Industry News</option>
          <option value="Policy">Policy</option>
        </select>
        <button onClick={downloadCSV} className="flex items-center gap-2">
          <Download size={16} /> Download CSV
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterNews.map((item, index) => (
          <div key={index} className="p-4 shadow-lg">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.date} - {item.category}</p>
              <a href={item.link} target="_blank" className="text-blue-500 mt-2 block">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
