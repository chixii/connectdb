// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const allowedOrigins = [
  'https://connectdb-0yav.onrender.com'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin)) {
      callback(null, true); 
    } else {
      callback(new Error('CORS blocked: Not allowed by CORS policy'));
    }
  }
};

app.use(cors(corsOptions));
const mongoUri = 'mongodb://couchspace-test:efjEyOKe4B5l49LkWspzPTJvuYwkvKbWY76wcTqHJPglF6TsKF29eXAKsAFJkKHWKzVXNXEXMfsuaGWhPC6hpA==@couchspace-test.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@couchspace-test@';

app.get('/api/check-db', async (req, res) => {
    console.log('收到檢查請求：', req.headers.origin);
    try {
        const conn = await mongoose.createConnection(mongoUri).asPromise();
        await conn.close();
        res.status(200).json({ status: 'connected' });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});

app.listen(3001, () => {
    console.log('✅ API server running on http://localhost:3001');
});
