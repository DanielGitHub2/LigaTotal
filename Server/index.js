const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const app = express();

// Settings
const URL_ORIGEN = 'http://localhost:4200';
const PORT_AUX = 3000;

app.set('port', process.env.PORT || PORT_AUX);

// Middlewares
app.use(cors({origin: URL_ORIGEN}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));
app.use(morgan('dev'));

// Routes
app.use('/liga/', require('./routes/liga.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});