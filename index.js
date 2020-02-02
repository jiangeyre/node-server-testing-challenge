require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 6666;

server.listen(port, () => console.log(`\n*** Listening on Port ${port} ***\n`));