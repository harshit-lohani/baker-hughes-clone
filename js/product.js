function productSlideLeft() {
    const slider = document.querySelector(".product-spotlight-slider")
    const productCard = document.querySelector(".product-card")
    const width = productCard.offsetWidth + 32
    let offset = slider.scrollLeft - width
    // console.log(width)
    if (offset >= 0) {
        offset = parseInt(offset / width) * width;
        // console.log(offset)

    } else {
        offset = 0
    }
    // console.log(offset)
    slider.scrollLeft = offset
    // console.log(productCard.offsetWidth)
    // console.log(slider.scrollLeft)
}

function productSlideRight() {
    const slider = document.querySelector(".product-spotlight-slider")
    const productCard = document.querySelector(".product-card")
    const width = productCard.offsetWidth + 32
    let offset = slider.scrollLeft + width
    if (offset <= slider.offsetWidth + 100) {
        offset = parseInt(offset / width) * width;
        // console.log(offset)
    }
    slider.scrollLeft = offset
    // console.log(productCard.offsetWidth)
    // console.log(slider.scrollLeft)
}