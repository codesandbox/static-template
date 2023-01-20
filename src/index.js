document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const square = document.createElement('div')
  const img = document.createElement('img')
  body.append(square)
  body.append(img)

  img.setAttribute('src', 'src/images/bella.png')

  console.log(img)
})
