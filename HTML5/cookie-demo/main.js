const express = require('express')
const app = express()

app.listen(3000, err => {
    if (err) {
        return console.log(err)
    }
    console.log('---- 打开 http://localhost:3000 吧----')
})

app.get('/', (req, res) => {
    res.cookie('testName0','testValue0')
    res.cookie('testName1','testValue1')
    res.cookie('testName2','testValue2')
    res.cookie('testName3','testValue3',{
        expires: new Date(Date.now()+10000)
    })
    res.send('<h1>hello world!</h1>')
})
