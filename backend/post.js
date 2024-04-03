const https = require('https');



let xyz = {email: "admin@example.com", password:'12345'};

// fetch("http://localhost:5000/api/users/login", {
//     method: "POST",
//     body: JSON.stringify(data)
// }).then(res => {
//     console.log("Request complete! response:", res);
// });



const data = JSON.stringify(xyz);

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/users/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.write(data)
req.end()