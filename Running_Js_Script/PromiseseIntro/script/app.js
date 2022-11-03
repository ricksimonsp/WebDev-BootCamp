const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
} 

fakeRequestCallback('books.com', function() {
    console.log('IT WORKED!')
}, function() {
    console.log('ERROR!!!')
})

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log('IT WORKED!!!!! (page1)')
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then (() => {
        console.log('IT WORKED!!!! (page2)')
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log('IT WORKED!!!! (page3)')
    })
    .catch(() => {
        console.log('OH NO, A REQUEST FAILED!!!')
    })