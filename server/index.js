const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3030;
const cors = require('cors')
const ctrl = require('./controller')
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is listening on port: ${port}`));

app.get('/api/messages', ctrl.refresh);
app.post('/api/messages', ctrl.create);
app.put('/api/messages/:id', ctrl.update);
app.delete('/api/messages/:id', ctrl.delete);
app.put('/api/messages/fav/:id', ctrl.favorite);


