import express from 'express';
import { join } from 'path';

const app = express();

app.listen(8080, () => {
    console.info('Running on port 8080');
});

// Routes
app.use('/api/v1', require('./api/v1').router);
app.use('/assets', express.static(join(__dirname, '../assets')));
