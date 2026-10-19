const express = require('express')
const app = express()

require('dotenv').config() // Default looks in root dir of project

// Or to make sure of location or not in the root folder
// require('dotenv').config({ path: path.resolve(__dirname, '.env') })
// If you have problems with .env it's usually because it can't find the .env file. Add debug
// It will tell you where its trying to load the file from
//require('dotenv').config({debug:true})



const PORT = process.env.PORT || 5000        // Provide default if env var isn't there
const PASSWORD = process.env.PASS   // No default this time
const API_IP = process.env.IP || '127.0.0.1'

app.get('/all', (req, res) => {
  console.log("Dump my app environment vars object: ", process.env) // Output all the inherited system and process vars
 //console.log("Dump my app environment vars formatted text: ", JSON.stringify(process.env, null, 2)) // Output all the inherited system and process vars

  // Can't set an env var in terminal to be read by debugger as they are different processes as is each terminal. 
  // Needs to run in the terminal to see this as in same process, or need to set in launch.json to pass env vars into the debug session
  console.log(`Value of TONY is ${process.env.TONY}`)
  res.json(process.env)
})

app.get('/app', (req, res) => {
  const envVars = `Port is: ${PORT}, User password is ${PASSWORD}, API IP is ${API_IP}`
  console.log(envVars)

  // Can't set an env var in terminal to be read by int debugger as they are different processes as is each terminal. 
  // Needs to run in the terminal to see this as in same process, or need to set in launch.json to pass env vars into the debug session
  res.send(envVars)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
