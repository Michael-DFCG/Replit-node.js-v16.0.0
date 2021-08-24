require('./index.ts');
const node = process.version
console.log(node)
try {
  console.log('[CATCH] niente apposto')
}
catch(r){
 console.log('[CATCH] ',r)
}

