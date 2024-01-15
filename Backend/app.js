const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Servidor node js ok!');
});
server.listen(port, hostname, () => {
  console.log(`servidor ejecutandose en http://${hostname}:${port}/`);
});

/*** API con Graphql** */

var {graphql, buildSchema} = require("graphql");
var schema = buildSchema(`
  type Query {
    producto: String

  }
`);

var rootValue = {
  producto: ()=>{
    return "zapatos de piel de cocodrilo"
  }
}

graphql({
    schema,
    source: "{producto}",
    rootValue,
}).then((response)=>{console.log(response)})
.catch((err)=>{console.log(err)})