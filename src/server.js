const http = require('http');
const responses = require('./responses.js'); //import shit from responses.js

const port = process.env.PORT || process.env.NODE_PORT || 3000;


const onRequest = (request, response) =>{
    console.log(request.url);

    if(request.url === '/page2'){
        responses.getClient2(request, response);
    }
    else if(request.url === '/message'){
        responses.getMessage(request, response);
    }
    else{
        responses.getIndex(request, response);
    }
};

http.createServer(onRequest).listen(port, ()=>{
    console.log(`listning on 127.0.0.1:${port}`);
});

//adding this comment to make a push