# Website Audit Tool

A full-stack web application that audits any website URL and generates a report with useful SEO and webpage metrics.

The application accepts a website URL, fetches the webpage, parses its HTML, and returns information such as HTTP status, response time, page title, meta description, H1 count, images missing alt text, and approximate word count.

---

## Live Demo

**Frontend**

https://website-audit-tool-nine.vercel.app/

**Backend API**

https://website-audit-tool-pk19.onrender.com/api/audit

---

## Features

- Analyze any valid website URL
- HTTP status detection
- Response time measurement
- Page title extraction
- Meta description extraction
- H1 tag counting
- Images missing alt text detection
- Approximate word count
- Input validation
- Graceful error handling for invalid URLs
- Timeout handling
- Non-HTML response detection

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
- Axios
- Cheerio
- CORS

### Testing

- Jest
- Supertest

### Deployment

- Vercel (Frontend)
- Render (Backend)

---

## Project Structure

```
website-audit-tool/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── tests/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/PriyanshuRana0/website-audit-tool.git

cd website-audit-tool
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend Setup

Open another terminal.

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

## API Contract

### Endpoint

```
POST /api/audit
```

### Request Body

```json
{
  "url": "https://example.com"
}
```

### Success Response

```json
{
  "url": "https://example.com",
  "status": 200,
  "responseTime": "180 ms",
  "title": "Example Domain",
  "metaDescription": "Example description",
  "h1Count": 1,
  "missingAltImages": 0,
  "wordCount": 120
}
```

### Error Responses

#### Missing URL

```json
{
  "error": "URL is required."
}
```

#### Invalid URL

```json
{
  "error": "Invalid URL."
}
```

#### Non-HTML Response

```json
{
  "error": "URL does not point to an HTML page."
}
```

#### Request Timeout

```json
{
  "error": "Request timed out."
}
```

#### Server Error

```json
{
  "error": "Failed to audit website."
}
```

---

## Running Tests

The project includes automated tests using **Jest** and **Supertest**.

Implemented test cases:

- Successful website audit (Happy Path)
- Invalid URL
- Missing URL

Run the tests:

```bash
cd backend

npm test
```

Example output:

```
PASS tests/audit.test.js

✓ should return audit report for a valid URL
✓ should return 400 for invalid URL
✓ should return 400 when URL is missing
```

---

## Design Decisions

### 1. Separate Frontend and Backend

The application was designed with separate React and Express applications. This separation improves maintainability, allows the API to be reused independently, and enables separate deployment of the frontend and backend.

### 2. HTML Parsing with Cheerio

Cheerio was selected because it provides a lightweight and efficient way to parse HTML without requiring a browser environment. It simplifies extracting page titles, meta descriptions, headings, images, and text content.

### 3. Graceful Error Handling

The application validates user input before making network requests and returns meaningful error messages for invalid URLs, request timeouts, and non-HTML responses instead of allowing the application to crash. This improves reliability and user experience.

---

## Future Improvements

If given more development time, I would:

- Add SEO scoring.
- Include accessibility analysis.
- Detect broken links.
- Analyze Open Graph and Twitter meta tags.
- Add Lighthouse performance metrics.
- Improve the dashboard with charts and visual indicators.
- Cache audit results to reduce repeated network requests.

---

## AI Usage

AI tools were used to understand implementation approaches, review code structure, improve error handling, and assist with documentation. All suggestions were reviewed, adapted, tested, and integrated into the project based on my own implementation decisions.

---

## Author

**Priyanshu Rana**

GitHub: https://github.com/PriyanshuRana0

---

## Credits

Built for **Digital Heroes Training Task**

https://digitalheroesco.com
