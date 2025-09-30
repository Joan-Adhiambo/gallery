const express = require('express');
const router = express.Router();
const uuid = require('uuid');
let upload = require('./upload');
const url = require('url');
let Image = require('../models/images');

// Home route - fetch all images
router.get('/', async (req, res) => {
  try {
    const images = await Image.find({});
    res.render('index', { images, msg: req.query.msg });
  } catch (err) {
    console.error('Error fetching images:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Upload route
router.post('/upload', (req, res) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        return res.redirect(`/?msg=${err}`);
      }

      if (!req.file) {
        return res.redirect('/?msg=Error: No file selected!');
      }

      // Create new image
      const newImage = new Image({
        name: req.file.filename,
        size: req.file.size,
        path: 'images/' + req.file.filename,
      });

      // Save to database
      await newImage.save();

      res.redirect('/?msg=File uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      res.redirect('/?msg=Error uploading file');
    }
  });
});

module.exports = router;


