const http = require('http')
//import http from 'note:http'


http.createServer((req, res) =>{
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'})


    
    
    res.write('basta de holas')
   
    res.end()
})
.listen(8080)

console.log('escuchando el puerto ', 8080)