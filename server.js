const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let courses = [];
let registrations = [];
// Add Course API
app.get('/add-course', (req, res) => {
    const course = req.query.course;

    if (!course) {
        return res.send("Please provide a course name");
    }

    courses.push(course);

    res.send(`Course "${course}" added successfully`);
});

// NEW: View Course List API
app.get('/courses', (req, res) => {
    res.json(courses);
});

// Register Student API (v2)
app.get('/register', (req, res) => {
    const student = req.query.student;
    const course = req.query.course;

    if (!student || !course) {
        return res.send("Please provide both student and course");
    }

    registrations.push({ student, course });

    res.send(`Student "${student}" registered for course "${course}"`);
});

app.get('/courses', (req, res) => {
    res.json({
        totalCourses: courses.length,
        totalRegistrations: registrations.length,
        registrations: registrations
    });
});

app.listen(3000,'0.0.0.0',() => {
    console.log("Server running on port 3000");
});