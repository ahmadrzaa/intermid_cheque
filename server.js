const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// serve everything in this folder (html, image, js)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'cheque_bbk.html'));
});

// MAIN FIX → allow access from other computers
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Cheque app running on http://0.0.0.0:${PORT}`);
  console.log(`Open on network: http://192.168.100.177:${PORT}`);
});
