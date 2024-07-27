import express from 'express';
const app = express()
const port = process.env.PORT || '3200'
import web from './routes/web.js'
import devtrio from './routes/devtrio.js'
import myLogger from './middlewares/logger-middleware.js';

// Set Template Engine
app.set('view engine', 'ejs')



// Application Level Middlware
// app.use(myLogger)
// app.use('/about', myLogger)

// load routes
app.use('/', web)
app.use('/', devtrio)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})