const fs = require ('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;


if (url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome</h1>');
    res.write('<form action="/create-user" method="POST">');
    res.write('<input type="text" name="userName"><br>');
    res.write('<label for="userName">User Name</label><br>');
    res.write('<button type="submit">Send</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
}

if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write('<body>');
    res.write('<h1>Users</h1>');
    res.write('<ul>')
    res.write('<li>')
    res.write('Bob')
    res.write('</li>')
    res.write('<li>')
    res.write('Carol')
    res.write('</li>')
    res.write('<li>')
    res.write('Steve')
    res.write('</li>')
    res.write('<li>')
    res.write('Demi')
    res.write('</li>')
    res.write('</ul>')
    res.write('</body>');
    res.write('</html>');
    return res.end
    
}
if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data',(chunk)=>{
        body.push(chunk)
    });
    req.on('end',() =>{
        const parsedBody = Buffer.concat(body).toString();
        const userName = parsedBody.split('=')[1];
        console.log(userName);
        });
        res.statusCode =302;        
        res.setHeader('Location', '/');
        return res.end();
        

    };
   
    



res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>MyFirst Page</title></head>');
res.write('<body><h1>Hello from my Node.js Server</h1></body>');
res.write('</html>');
res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'some hard coded text'
// };

exports.handler = requestHandler;
// exports.someText = 'some hard coded text';