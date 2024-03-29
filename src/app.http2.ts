import fs from 'fs';
import http2 from 'http2';

const server = http2.createSecureServer({
    key:fs.readFileSync('./keys/server.key'),
    cert:fs.readFileSync('./keys/server.crt')
}, (req,res) => {

    console.log(req.url);

    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(`<h1>${req.url}</h1>`);
    // res.end();

    // const data = {
    //     name: 'Jhon Doe',
    //     age: 30,
    //     city:'New york'
    // };

    // res.writeHead(200,{'Content-Type': 'application/json'});
    // res.end(JSON.stringify(data));

    if( req.url === '/'){
        const htmlFile= fs.readFileSync('./public/index.html','utf-8');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end( htmlFile );
        return;
    } 
    
    if(req.url?.endsWith('.css')){
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.end();
    }else if(req.url?.endsWith('.js')){
        res.writeHead(404, {'Content-Type': 'application/javascript'});
        res.end();
    }

    try{
        const responseContent = fs.readFileSync(`./public${ req.url }`, 'utf-8');
        res.end(responseContent);
    }catch(error){
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.end();
    }
    
});


server.listen(8080, () => {
    console.log('Server running in port 8080');

})
