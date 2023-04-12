const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Add a new job
router.post('/', upload.array('images'), async (req, res) => {
  try {
    // Save the job to the database
    // Example: await Job.create({ ...req.body, images: req.files.map(file => file.path) });

    res.status(201).json({ message: 'Job posted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error posting the job. Please try again.' });
  }
});

module.exports = router;