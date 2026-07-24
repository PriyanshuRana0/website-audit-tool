import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAudit = async () => {
    setLoading(true);
    setError("");
    setReport(null);

    try {
      const response = await axios.post("http://localhost:5000/api/audit", {
        url,
      });

      setReport(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>🌐 Website Audit Tool</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button onClick={handleAudit}>Audit</button>
      </div>

      {loading && <p>Analyzing website...</p>}

      {error && <p className="error">{error}</p>}

      {report && (
        <div className="card">
          <h2>Audit Report</h2>

          <div className="row">
            <span>HTTP Status</span>
            <span>{report.status}</span>
          </div>

          <div className="row">
            <span>Response Time</span>
            <span>{report.responseTime}</span>
          </div>

          <div className="row">
            <span>Page Title</span>
            <span>{report.title}</span>
          </div>

          <div className="row">
            <span>Meta Description</span>
            <span>{report.metaDescription}</span>
          </div>

          <div className="row">
            <span>H1 Count</span>
            <span>{report.h1Count}</span>
          </div>

          <div className="row">
            <span>Images Missing Alt</span>
            <span>{report.missingAltImages}</span>
          </div>

          <div className="row">
            <span>Word Count</span>
            <span>{report.wordCount}</span>
          </div>
        </div>
      )}

      <footer className="footer">
  Built for{" "}
  <a
    href="https://digitalheroesco.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Digital Heroes Training Task
  </a>
</footer>

    </div>
  );
}

export default App;