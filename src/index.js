const express = require('express');

const routes = require('./routes');

const app = express();
app.use(routes);

app.listen(5555, () => {
  console.log('✅ Server sarted at http://localhost:5555');
});
