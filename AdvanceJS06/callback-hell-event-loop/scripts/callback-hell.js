// let cart = ['shoes', 'shirts', 'pen', 'tie'];


// const payNow = (price) => {
//     setTimeout(() => {
//         console.log(`You paid =  ${price}`);
//     }, 2000);
// }

// const calculateBasket = (quantity, callBack) => {

//     setTimeout(() => {
//         let price = 100 * quantity;
//         console.log(`You bill =  ${price}`);
//         callBack(price);
//     }, 2000);


// }

// const createOrder = (cart, callBack) => {
//     setTimeout(() => {

//         let quantity = cart.length;
//         console.log(`items quantity =  ${quantity}`);
//         callBack(quantity, payNow);
//     }, 2000);
// }




// createOrder(cart, calculateBasket)


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// callback hell (cons..)
// 1. code uncrollable...
// 2. horizontally scale....


// const createOrder = (cart, callBack) => {
//     setTimeout(() => {

//         let quantity = cart.length;
//         console.log(`items quantity =  ${quantity}`);
//         // callBack(quantity, payNow);

//         setTimeout(() => {
//             let price = 100 * quantity;
//             console.log(`You bill =  ${price}`);
//                 setTimeout(() => {
//                     console.log(`You paid =  ${price}`);
//                 }, 2000);
//         }, 2000);
//     }, 2000);
// }


// createOrder(cart, calculateBasket);



// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Promises.....
let cart = ['shoes', 'shirts', 'pen', 'tie'];


const payNow = (price) => {

    return new Promise((res, rej) => {
        setTimeout(() => {

            // console.log(`You paid =  ${price}`);
            if (price > 0) {
                res(price)
            } else {
                rej(new Error('payment failed...'))
            }
        }, 2000);

    })

}


const calculateBasket = (quantity) => {


    return new Promise((res, rej) => {
        setTimeout(() => {
            let price = 100 * quantity;
            // console.log(`You bill =  ${price}`);
            if (price > 0) {
                res(price)
            } else {
                rej(new Error('Failed to fetch bill...'))
            }
        }, 2000);

    })
}


const createOrder = (cart) => {

    return new Promise((res, rej) => {
        setTimeout(() => {

            let quantity = cart.length;
            if (quantity > 0) {
                res(quantity)
            } else {
                rej(new Error('Failed to fetch quantity...'))
            }

        }, 2000);

    })
}


const checkout = (cart) => {


    createOrder(cart)
        .then((res) => {
            console.log(`items quantity =  ${res}`);
            return calculateBasket(res)
        })
        .then(res => {
            console.log(`You bill =  ${res}`);
            return payNow(res);

        })
        .then(res => {
            console.log(`You paid =  ${res}`);
        })
        .catch(err => console.log(err));

}

checkout(cart)