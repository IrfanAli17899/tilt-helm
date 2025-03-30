const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send(`Hello ${process.env.APP_NAME}!`);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy: ' + process.env.APP_NAME });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 