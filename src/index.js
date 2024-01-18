const express = require('express');

const app = express();

app.listen(5555, () => {
  console.log('✅ Server sarted at http://localhost:5555');
})