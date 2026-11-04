import {spawnSync} from 'node:child_process';
import {readFileSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
for(const args of [['build'],['build','--ssr','src/entry-server.jsx','--outDir','.sites-runtime/ssr']]){
 const result=spawnSync(process.execPath,['node_modules/vite/bin/vite.js',...args],{stdio:'inherit'});
 if(result.status!==0)process.exit(result.status??1);
}
const {render}=await import(pathToFileURL(resolve('.sites-runtime/ssr/entry-server.js')));
const path='dist/index.html';
let html=readFileSync(path,'utf8');
html=html.replace('<div id="root"></div>',()=>`<div id="root">${render()}</div>`);
writeFileSync(path,html);
console.log('Pre-rendered Russian landing page for fast first paint and search indexing.');
