const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const style = fs.readFileSync(`${__dirname}/../client/style.css`);

/*
const sendPage = (request, response, page) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(page);
    response.end();

};
*/

const serveFile = (request, response, content, mimeType) =>{
    response.writeHead(200, {'Content-Type':mimeType})
    response.write(content);
    response.end();
}

/* const getCSS = (request, response) =>{
    response.writeHead(200,{'Content-Type':'text/css'});
    response.write(style);
    response.end();
}*/
const getCSS = (request, response) => serveFile(request, response, style, "text/css");

/*
const getMessage = (request, response) =>{
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('What did you expect to find here?');
    response.end();
}*/

const getMessage = (request, response) => 
    serveFile(request, response, 'What did you expect to find here?', `text/plain`);

/*
const getIndex = (request, response) => {
    sendPage(request, response, index)
};*/

const getIndex = (request, response) => serveFile(request, response, index, "text/html");

/*
const getClient2 = (request, response) => {
    sendPage(request, response, client2)

};*/
const getClient2 = (request, response) => serveFile(request, response, client2, "text/html");

module.exports = {
    getIndex,
    getClient2,
    getMessage,
    getCSS
}
//test