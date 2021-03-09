// require express to make a server
const express = require( 'express' );
// our app
const app = express();
// tell the server to use "server/public" as the root of the website
app.use( express.static( 'server/public' ) );
// tell our app to spin up and listen
app.listen( 5000, ()=>{
    console.log( 'sever is up' );
})
