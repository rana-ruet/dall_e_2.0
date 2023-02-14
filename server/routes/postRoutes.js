import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as clouninary } from 'cloudinary';

import Post from '../database/model/Post.js';

dotenv.config();

const router = express.Router();

clouninary.config({
  cloud_name: process.env.CLOUNINARY_CLOUD_NAME,
  api_key: process.env.CLOUNINARY_API_KEY,
  api_secret: process.env.CLOUNINARY_API_SECRET,
});

// CREATE A POST
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await clouninary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

// Get all Post
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
