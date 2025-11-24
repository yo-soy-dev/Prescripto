# 🩺 Prescripto — Doctor Appointment Booking Application (MERN)

A full-stack appointment booking system for doctors and hospitals built with the **MERN** stack (MongoDB, Express, React, Node.js). The app implements **three-level authentication** (Patient, Doctor, Admin), appointment management, doctor profiles, earnings view for doctors, admin controls, and **online payment gateway** integration for appointment fees.

---

## 📸 App Preview
<img width="1798" height="778" alt="image" src="https://github.com/user-attachments/assets/285c2f35-aabc-471f-864f-5d974daa3a7d" />



---

## Features

* Three distinct user roles and dashboards:

  * **Patient** — register/login, browse doctors, book/cancel appointments, view appointments and payment status.
  * **Doctor** — register/login (or be added by admin), view appointment list, update profile, view earnings/statistics.
  * **Admin** — manage doctors, appointments, view site-wide metrics, approve or reject doctor profiles.
* Secure authentication and role-based authorization.
* Appointment booking with date/time management and status tracking.
* Online payment gateway integration (e.g., Stripe / PayPal) to collect appointment fees.
* Notifications (email/SMS) hooks (optional) for appointment confirmations and reminders.
* Responsive React front-end dashboard for all roles.
* RESTful API built with Express and Node.js.
* MongoDB for persistent storage.

---

## Tech Stack

* Frontend: **React** (functional components, hooks)
* Backend: **Node.js**, **Express**
* Database: **MongoDB** (Mongoose ODM)
* Authentication: **JWT** (JSON Web Tokens) and bcrypt password hashing
* Payment: **Stripe** or **PayPal** (configurable)
* Dev tools: **Nodemon**, **ESLint**, **Prettier**

---

## Prerequisites

* Node.js (v14+ recommended)
* npm or yarn
* MongoDB instance (local or Atlas)
* Stripe or PayPal account and API keys (for payment integration)

---

## Repository Structure (recommended)

```
/client                 # React app
  /public
  /src
    /components
    /pages
    /services          # API calls (axios/fetch wrappers)
    /hooks
    /styles
    App.js
    index.js
/server                 # Express API
  /controllers
  /models              # Mongoose models (User, Doctor, Appointment, Payment)
  /routes
  /middleware          # auth, role-checks, error handling
  /utils               # helpers (email, payments)
  server.js
.env
README.md
```

---

## Getting Started — Local Development

Follow the steps below to get the project running locally.

### 1. Clone the repo

```bash
git clone <repo-url>
cd <repo-folder>
```

### 2. Backend setup

```bash
cd server
npm install
# copy .env.example -> .env and fill values
```

Add environment variables in `server/.env` (example):

```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/dbname
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=sk_test_...
CLIENT_URL=http://localhost:3000
EMAIL_SERVICE=Gmail
EMAIL_USER=you@example.com
EMAIL_PASS=app-password
```

Start backend server:

```bash
npm run dev
# or
node server.js
```

### 3. Frontend setup

```bash
cd ../client
npm install
# copy .env.example -> .env and fill values
```

Example `client/.env`:

```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

Start frontend dev server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment & Security Notes

* **Never** commit `.env` to source control. Use your CI/CD secrets store for production.
* Use HTTPS in production and set secure cookie flags if storing tokens in cookies.
* Apply rate limiting and input validation to public API endpoints to prevent abuse.

---

## Authentication & Authorization

* **Patients** register and create their profile. They can book, view, and cancel appointments.
* **Doctors** can create a profile (or be created/approved by Admin), update their profile and view appointments/earnings.
* **Admins** can manage doctor profiles, approve or deactivate doctors, and manage all appointments.
* Role-based middleware ensures only allowed roles can access particular endpoints.

---

## Payment Integration

* The project supports integration with Stripe (recommended) or PayPal. Example flow with Stripe:

  1. Patient initiates booking, selects payment.
  2. Frontend requests a payment intent from backend (`/api/payments/create-payment-intent`).
  3. Backend creates a Stripe PaymentIntent and returns client secret.
  4. Frontend completes payment with Stripe Elements and submits booking with payment status.
  5. Backend verifies payment webhook (`/api/payments/webhook`) and updates appointment/payment records.

Important: Implement webhook signature verification in production.

---

## Common API Endpoints (examples)

* `POST /api/auth/register` — register user (role: patient / doctor)
* `POST /api/auth/login` — login and receive JWT
* `GET /api/doctors` — list doctors (filter by specialization/availability)
* `GET /api/doctors/:id` — doctor profile
* `POST /api/appointments` — create appointment (protected: patient)
* `GET /api/appointments` — list user appointments (protected)
* `PATCH /api/appointments/:id/cancel` — cancel appointment
* `GET /api/doctor/appointments` — doctor view of appointments (protected: doctor)
* `GET /api/admin/doctors` — admin list doctors (protected: admin)
* `POST /api/payments/create-payment-intent` — create payment intent (Stripe)

Adjust routes and naming to match your implementation.

---

## Deployment Tips

* Use environment variables, not `.env` files, in production.
* Host backend on services like Heroku, Render, or AWS. Use managed MongoDB (Atlas) or a production-ready cluster.
* Host frontend on Vercel, Netlify, or similar and point the API URL to your backend.
* Set up database indexes for common queries (e.g., doctor availability, appointments by date).
* Use a job queue (e.g., Bull) and Redis for sending emails and processing background tasks (appointment reminders).

---

## Tests

* Add unit tests for controllers, services, and critical utilities.
* Add integration tests for the main booking flow and payment verification.

---

## TODO / Future Improvements

* Calendar integration (Google Calendar / Outlook) for doctors and patients.
* Two-factor authentication (2FA) for additional security.
* Multi-clinic support and scheduling rules.
* Admin analytics dashboard and CSV exports for billing.

---

## License & Contact

* License: MIT (or your preferred license)
* Author / Maintainer: *Your name or organization*
* Questions / Issues: open an issue in the repo or contact `you@example.com`.

---

Thank you for using this boilerplate — customize the flows, validation and payment provider to fit your hospital/clinic requirements.
