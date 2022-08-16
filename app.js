const express = require('express')
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const connectDB = require('./config/db')
//load env config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

//logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Handlebars Helpers
// const {
//     formatDate,
//     stripTags,
//     truncate,
//     editIcon,
//     select,
//   } = require('./helpers/hbs')

//handlebars

app.engine(
    'hbs',
    exphbs({
    //   helpers: {
    //     formatDate,
    //     stripTags,
    //     truncate,   
    //     editIcon,
    //     select,
    //   },
      defaultLayout: 'main',
      extname: '.hbs',
    })
  )
  app.set('view engine', '.hbs')

//routes 
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 5151

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))