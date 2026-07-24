# Website Audit Tool

A full-stack web application that analyzes websites and generates an audit report with SEO and performance-related information.

The tool checks website details such as HTTP status, response time, page title, meta description, H1 tags, missing image alt attributes, and word count.

---

## Live Demo

Frontend:

https://website-audit-tool-nine.vercel.app/

Backend:

https://website-audit-tool-pk19.onrender.com/api/audit

---

## Features

- Website URL analysis
- HTTP status checking
- Response time calculation
- Page title extraction
- Meta description extraction
- H1 tag count
- Missing image alt detection
- Word count analysis

---

## Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Cheerio
- Axios
- CORS

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Installation

### Clone Repository

```bash
git clone https://github.com/PriyanshuRana0/website-audit-tool.git
cd website-audit-tool
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

### Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Endpoint

### POST `/api/audit`

Request:

```json
{
  "url": "https://example.com"
}
```

Returns website audit information including status code, response time, title, metadata, headings, images, and word count.

---

## Project Structure

```
website-audit-tool/
│
├── frontend/
│
├── backend/
│
└── README.md
```

---

## Author

Priyanshu Rana
