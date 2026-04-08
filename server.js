const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let courses = [];

// Add Course API (v1)
app.get('/add-course', (req, res) => {
    const course = req.query.course;

    if (!course) {
        return res.send("Please provide a course name");
    }

    courses.push(course);

    res.send(`Course "${course}" added successfully`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});