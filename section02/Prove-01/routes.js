const fs = require ('fs');
const users = [];
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
    res.write('<a href="./users">See list of users</a>')
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
    users.forEach(element => {
        res.write('<li>')
        res.write(element)
        res.write('</li>')
    });
    res.write('</ul>')
    res.write('<a href="/">Go Back to Form</a>')
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
        users.push(userName);
        });
        res.statusCode =302;        
        res.setHeader('Location', '/');
        return res.end();
    };

};

exports.handler = requestHandler;
