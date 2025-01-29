# HNG Stage 0

This is a simple public API built using **Epress.js** for **HNG Internship Stage 0 task**. The API returns:

- My registered email
- The current date-time in ISO 8601 format
- The GitHub URL for this project

## API Endpoint

**Base URL:** https://hng12-stage-0.onrender.com/

**Request:**

```http
GET /
```

**Response:**

```json
{
  "email": "fkariuki311@gmail.com",
  "current_datetime": "2025-01-29T17:28:15.423Z",
  "github_url": "https://github.com/Faith-K-commits/hng-stage-0"
}
```

## Installation & Running Locally

1. Clone the Repository

```sh
git clone https://github.com/Faith-K-commits/hng-stage-0.git

cd hng-stage-0
```

2. Install Dependecies

```sh
npm install
```

3. Run the Server

```sh
node index.js
```

4. Test the API

- Open `http://localhost:3000/` in your browser or use **Postman** to test the `GET` request.

## Deployment

This API is deployed on **Render** and can be accessed at:

**Live API URL:** https://hng12-stage-0.onrender.com/

## Tech Stack

- Node.js
- Express.js
- CORS for handling cross-origin requests

## Links

- GitHub Repo: https://github.com/Faith-K-commits/hng-stage-0

- Hire Node.js Developers: https://hng.tech/hire/nodejs-developers
