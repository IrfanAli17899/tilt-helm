const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const APP_NAME = process.env.APP_NAME || 'default';
const POD_ID = process.env.HOSTNAME || 'local';

app.get('/', (req, res) => {
  res.status(200).send(`Hello ${APP_NAME}! (Pod: ${POD_ID})`);
});

app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    app_name: APP_NAME,
    pod: POD_ID
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} with Pod: ${POD_ID}`);
}); 