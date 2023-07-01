const searchMatrix = (matrix, target) => {
    let res = false

    matrix.forEach(el => {
        el.forEach(i => {
            if (res) return true
            res = target === i ? true : false
        })
    })

    return res
}