
const delayColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayColorChange('red', 1000, () => {
    delayColorChange('orange', 1000, () => {
        delayColorChange('yellow', 1000, () => {
            delayColorChange('green', 1000, () => {
                delayColorChange('blue', 1000, () => {
                    
                })
            })
        })
    })
})

