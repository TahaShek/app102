// const express=require('express');
// const app =express();
// const PORT=3222;


// app.get('PORT', (req, res) => {
//     res.send('Hello World!')
//   })

// app.listen(PORT,()=>{

//     console.log(`port is a ${PORT}`);
//     console.log(process.env)
// })

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on por ${port}`)
})