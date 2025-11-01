# Student Record System

A full-stack web application for managing student records built with Angular frontend and Node.js/Express backend.

## Features

- ✅ Add new students
- ✅ View all students in a table
- ✅ Edit existing student information
- ✅ Delete students
- ✅ Responsive design
- ✅ Form validation
- ✅ Error handling

## Tech Stack

**Frontend:**
- Angular 20
- TypeScript
- HTML5/CSS3
- Responsive design

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Angular CLI

## Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd student-record-system
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```
MONGO_URI=mongodb://127.0.0.1:27017/studentdb
PORT=5000
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Start the Angular development server:
```bash
ng serve
```

## Usage

1. Make sure MongoDB is running
2. Start the backend server (runs on http://localhost:5000)
3. Start the frontend server (runs on http://localhost:4200)
4. Open your browser and navigate to http://localhost:4200

## API Endpoints

- `GET /api/students` - Get all students
- `POST /api/students` - Create a new student
- `GET /api/students/:id` - Get student by ID
- `PUT /api/students/:id` - Update student by ID
- `DELETE /api/students/:id` - Delete student by ID

## Student Data Structure

```json
{
  "_id": "ObjectId",
  "name": "String (required)",
  "rollNumber": "String (required)",
  "department": "String (optional)",
  "year": "Number (optional)",
  "semester": "String (optional)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## Troubleshooting

**Frontend not loading:**
- Check if Angular CLI is installed: `ng version`
- Make sure you're in the frontend directory when running `ng serve`

**Backend connection issues:**
- Verify MongoDB is running
- Check the MONGO_URI in your .env file
- Ensure port 5000 is not being used by another application

**CORS errors:**
- The backend includes CORS middleware, but if you encounter issues, check the frontend is running on port 4200

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request