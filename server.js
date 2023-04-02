const http = require('http');
const fs   = require('fs').promises;
const path = require('path');

const server = http.createServer(async (req,rep)=>{
  // console.log(__dirname);
  try {
    if (req.method === 'GET') {
      if (req.url==='/') {
        const data = await fs.readFile(path.join(__dirname, 'index.html'),'utf-8');
        rep.writeHead(200, {'Content-Type':'text/html; utf-8'});
        rep.write(data);
        return rep.end(`<script>const A = confirm('다음 페이지로 이동?'); if (A === true) {location.href = './index02.html'}</script>`);
      } else if (req.url.includes('index.html')) {
        const data = await fs.readFile(path.join(__dirname, 'index.html'),'utf-8');
        rep.writeHead(200, {'Content-Tpye':'text/html; charset=utf-8'});
        rep.write(data);
        return rep.end();
      } 
      try {
        const data = await fs.readFile(path.join(__dirname, req.url));
        return rep.end(data);
      }
      catch (err) {
        console.error(err);
      }};
    rep.writeHead(404, {'Content-Type':'text/plain; utf-8'});
    return rep.end('NOT FOUND');
  }
  catch (err) {
    console.error(err);
    rep.writeHead(500, {'Content-Type':'text/plain; charset=utf-8'});
    return rep.end(err.massage);
  }
  })
  .listen(2080, (err)=>{
    if (err) {throw err}else{console.log('2080포트 개방')}
  })