const form = require('./form');
const upload = require('./upload');
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    upload(req);

    let imgs = fs.readdirSync('./resizes').map(file =>{
      return `
        <div class="gallery">
          <img src="/images/${file}" alt="${file}" />
        </div>
      `;
    });

    const css = `
      <style>
        div.gallery {
          margin: 5px;
          border: 1px solid #ccc;
          float: left;
          width: 180px;
        }
        
        div.gallery:hover {
          border: 1px solid #777;
        }
        
        div.gallery img {
          width: 100%;
          height: auto;
        }
      </style>
    `;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><head></head><body>');    
    res.write(css);
    res.write('<h1>File uploaded ....</h1>');
    res.write(imgs.join(' '));
    res.write('</body></html>');
    res.end();
  
  } else if (req.url.match(/\/images\/*/g)) {

    let filename = req.url.slice(8, req.url.length);
    fileToLoad = fs.readFileSync('./resizes/' + filename);
    res.writeHead(200, {'Content-Type':  'image/jpeg' });
    res.end(fileToLoad, 'binary');
  
  } else {
    return form(res);
  }
}).listen(8080);