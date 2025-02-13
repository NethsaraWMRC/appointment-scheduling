# Appointment Booking System

## Overview
This is a full-stack appointment booking system that allows users to:
- Sign up and log in using JWT authentication.
- Select a date from a calendar and fetch available time slots.
- Book an appointment by filling out a form.
- View their booked appointments.
- Cancel appointments if needed.

The application is built using **React (Frontend)** and **Spring Boot (Backend)**.

## Tech Stack
### Frontend
- **React**: For building the user interface.
- **Material UI (MUI)**: For designing components and styling.
- **Axios**: For making API requests to the backend.

### Backend
- **Spring Boot**: For handling business logic and API requests.
- **Spring Security & JWT**: For authentication and authorization.
- **Spring Data JPA**: For database operations.
- **MySQL**: As the database.

## Setup and Run Instructions
### 1. Clone the Repository
```sh
git clone https://github.com/your-repo-link.git
cd your-repo-folder
```

### 2. Setting Up the Frontend
```sh
cd frontend
npm install  # Install dependencies
npm start    # Run the frontend
```

### 3. Setting Up the Backend
1. Open a terminal and navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Ensure you have **Java 17+** installed.
3. Set up the database connection in `application.properties` (PostgreSQL/MySQL or use H2 for testing).
4. Run the backend using:
   ```sh
   mvn spring-boot:run
   ```

The backend will start running on `http://localhost:8080` and the frontend on `http://localhost:3000`.

## Features
- **User Authentication:** Secure login/signup using JWT authentication.
- **Appointment Booking:** Select date and time slots for booking an appointment.
- **Booking Form:** Enter required details before confirming the appointment.
- **Appointment Management:** View and cancel existing appointments.
- **Protected Routes:** Certain pages are accessible only for logged-in users.

## Future Enhancements
- **Email Notifications:** Send appointment confirmations via email.
- **Admin Dashboard:** Allow admins to manage users and appointments.
- **Better UI/UX:** Improve user interface and responsiveness.
- **Calendar Sync:** Sync appointments with Google Calendar.

---
🚀 Enjoy building with the Appointment Booking System!

