import { useState } from "react";
import "./App.css";

const mFetch = (id, delay) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`API Call ${id} completed.`), delay)
  );

function App() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState([]);
  const [isFetching, setLoading] = useState(false);

  const fetchApis = async () => {
    const fetchs = [
      mFetch(1, 3000),
      mFetch(2, 5000),
      mFetch(3, 2000),
      mFetch(4, 4000),
      mFetch(5, 1500),
    ];

    const totalCalls = fetchs.length;
    let completed = 0;

    setProgress(0);
    setStatus([]);
    setLoading(true);

    const updateProgress = (completed, totalCalls) => {
      const newProgress = Math.floor((completed / totalCalls) * 100);
      setProgress(newProgress);
    };

    fetchs.forEach((apiCall) => {
      console.log(apiCall);
      apiCall
        .then((result) => {
          setStatus((prev) => [...prev, result]);
        })
        .finally(() => {
          completed++;
          updateProgress(completed, totalCalls);
          if (completed === totalCalls) {
            setLoading(false);
          }
        });
    });
  };

  return (
    <div className="App">
      <h1>Concurrent API Fetch Example</h1>
      <button
        onClick={fetchApis}
        disabled={isFetching}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: isFetching ? "not-allowed" : "pointer",
          backgroundColor: isFetching ? "#ccc" : "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        {isFetching ? "Fetching..." : "Fetch APIs"}
      </button>
      <div>
        <strong>Progress: </strong> {progress}%
        <div
          style={{
            width: "100%",
            height: "20px",
            background: "#e0e0e0",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: progress === 100 ? "green" : "blue",
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <strong>Status:</strong>
        <ul>
          {status.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
