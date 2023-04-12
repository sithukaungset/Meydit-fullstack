const express = require('express');
const router = express.Router();
const multer = require('multer');

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

// Handle POST request for creating a new job
router.post('/', upload.array('images'), (req, res) => {
  // Save job data to your database
  // req.body contains the form data
  // req.files contains the uploaded images

  // Replace the following with actual database logic
  console.log('Job posted:', req.body);
  console.log('Uploaded images:', req.files);

  res.status(201).json({ message: 'Job posted successfully!' });
});

module.exports = router;
