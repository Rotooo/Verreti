import app from './app.js';
import cors from 'cors';

const port = 2000;

app.listen(port);
app.use(cors());

console.log('server on port', port);