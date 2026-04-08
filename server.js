const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let courses = [];

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

app.listen(3000, () => {
    console.log("Server running on port 3000");
});