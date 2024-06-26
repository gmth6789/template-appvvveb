const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/admin', function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'components', 'admin.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
