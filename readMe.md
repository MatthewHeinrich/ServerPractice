Emirp Node/Express intro
---

[ ] set up folders

Root folder

Server
server/public/
server/public/scripts
server/public/vendors
server/public/styles

[ ] init git
[ ] add .gitignore (in root folder, add .DS_Store & node_modules)
[ ] add index.html to "server/public" folder
[ ] add client.js to "server/public/scripts" folder
[ ] add Jquery.js to "server/public/scripts" folder
[ ] create server.js file in "server" folder
[ ] npm install express ( installs node modules )
[ ] edit server.js
[ ] edit server.js (require express, set up express static)
[ ] npm init -- y ( this will initialize an npm project & will use default names)
[ ] update server.js:

```
// require express to make a server
const express = require( 'express' );
// our app
const app = express();
// tell the server to use "server/public" as the root of the website
express.static( 'server/public' );
// tell our app to spin up and listen
app.listen( 5000, ()=>{
    console.log( 'sever is up' );
})

```