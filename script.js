/* Function who's returning Promise in N seconds */
const movePlayer = (direction, delay) => {
  return new Promise((resolve, reject) => {
    if (direction === '' || isNaN(delay)) {
      reject('Player stops')
    } else {
      console.log('Player is looking at the map...')
      setTimeout(() => {
        resolve(`Player goes ${direction}`)
      }, delay * 1000)
    }
  })
}

/* No async / await : Lot of callbacks */
movePlayer('right', 3)
  .then(res => {
    console.log(res)
    return movePlayer('left', 5)
  })
  .then(res => {
    console.log(res)
    console.log('Player has reached the target')
  })

/* Using async / await */
const doAsync = async () => {
  try {
    const firstMove = await movePlayer('right', 3)
    console.log(firstMove)

    const secondMove = await movePlayer('left', 5)
    console.log(secondMove)

    console.log('VM71 sse-hooks.js:1 Player has reached the target')
  } catch (error) {
    console.log(error)
  }
}

doAsync()
