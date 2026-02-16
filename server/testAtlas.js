// testAtlas.js
import mongoose from "mongoose";
import 'dotenv/config.js';

mongoose.connect(process.env.MONGODB_URI, { dbName: 'quickshow' })
  .then(() => {
    console.log('✅ Atlas connection OK');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Atlas connection FAILED:', err.message);
    process.exit(1);
  });
