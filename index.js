//  const dateString = '12-02-1984'
// var birthday = +new Date(dateString);
//   const s =  ~~((Date.now() - birthday) / (31557600000));
// console.log(s)

function transform(v){
  return `dim-${v}`;
}

function prom(v){
  if(v !== 2){
  return Promise.resolve(v);
  }
  return Promise.reject('error man')
}

const s = [1, 2, 3].reduce(async (acc, r) => {
    const accumulator = await acc;
  console.log('asdas', accumulator)
    const rs = await prom(r).catch(e => {
      
      console.log(e)
      return e;
    });
    const ts = transform(rs);
   console.log('ass', ts)
  
    // accumulator.push(ts);
  
  return Promise.resolve([...accumulator, ts]);
  }, Promise.resolve([]));


// console.log(s)
Promise.resolve(s).then(data => {
  console.log('ji ', data);
})
.catch(error => {
  console.log('dk ', error)
})
