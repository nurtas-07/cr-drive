const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const port = 8787;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.woff2':'font/woff2','.json':'application/json; charset=utf-8'};
const server = http.createServer((req,res)=>{
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname); }
  catch { res.writeHead(400);res.end('Bad request');return; }
  const file = path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return;}
  fs.stat(file,(err,stat)=>{
    if(err||!stat.isFile()){res.writeHead(404);res.end('Not found');return;}
    res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    const stream=fs.createReadStream(file);
    stream.on('error',()=>res.destroy());
    stream.pipe(res);
  });
});
server.on('error',error=>{console.error(error.code==='EADDRINUSE'?'Port 8787 is already in use. Open http://127.0.0.1:8787 or close the other server.':error.message);process.exitCode=1;});
server.listen(port,'127.0.0.1',()=>{
  console.log('\nCR Drive is ready: http://127.0.0.1:8787\n');
  console.log('Keep this window open. Press Ctrl+C to stop.\n');
  if(process.platform==='win32'){
    require('node:child_process').execFile('rundll32.exe',['url.dll,FileProtocolHandler','http://127.0.0.1:8787'],()=>{});
  }
});
