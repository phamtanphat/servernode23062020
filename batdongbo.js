// let a = 5
// console.log(a)

// updateA(b => console.log(b))
// function updateA(callback){
//     setTimeout(() => {
//         a = 10
//         callback(a)
//     },1000)
// }
const request = require('request');


// function getCityTemp(cityName ){
    // return new Promise((resolve , reject) => {
    //     const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`
    //     request(URL , {json : true}, function (error, response, body) {
    //         if(error) return reject(error)
    //         if(body.message) return reject("City not found")
    //         if(body.main.temp) return resolve(body.main.temp)
    //     });
    // })
// }
// getCityTemp("Hanoi")
// .then(temp => console.log(temp))
// .catch(error => console.log(error))

function cong(a , b){
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
        request(URL , {json : true}, function (error, response, body) {
            if(error) return reject(error)
            if(!body.success) return reject(body.message)
            if(body.success) return resolve(body.message)
        });
    })
}
function tru(a , b){
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
        request(URL , {json : true}, function (error, response, body) {
            if(error) return reject(error)
            if(!body.success) return reject(body.message)
            if(body.success) return resolve(body.message)
        });
    })
}
function nhan(a , b){
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`
        request(URL , {json : true}, function (error, response, body) {
            if(error) return reject(error)
            if(!body.success) return reject(body.message)
            if(body.success) return resolve(body.message)
        });
    })
}
function chia(a , b){
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`
        request(URL , {json : true}, function (error, response, body) {
            if(error) return reject(error)
            if(!body.success) return reject(body.message)
            if(body.success) return resolve(body.message)
        });
    })
}

// cong(5 , 5)
// .then(tong => tru(tong , 1))
// .then(hieu => console.log(hieu))
// .catch(error => console.log(error))

async function tinhToan(){
    try {
        const tong = await cong(5,5)
        const hieu = await tru(tong , 5)
        console.log(hieu)
    } catch (error) {
        console.log(error)
    }
}
tinhToan()