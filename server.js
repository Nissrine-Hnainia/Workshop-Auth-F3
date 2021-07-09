console.clear()
//1-require express
const express = require('express')

//5-require the db
const connectDB = require('./config/connectDB')

//8-require the user route
const userRoutes = require('./routes/api/userRoutes')

//2-init app
const app = express()

//7-app level middleware
app.use(express.json())

//6-connect the db
connectDB()

//9-route level midd
app.use('/api/users', userRoutes)

//3-create the port
const PORT = 6532


//4-listen to the port
app.listen(PORT, err => err? console.log(err): console.log(`App listening on port ${PORT} `))