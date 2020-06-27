(() => {

  // Isso pega todos os botões que vc quer aplicar o efeito.
  // Ou seja, todos os botões precisam dessa classe para a animação funfar
  const buttons = Array.from(document.querySelectorAll('.js-ripple-btn'))

  function rippleAnimation(element, event) {
    var tl           = new TimelineMax();
        x            = event.offsetX,
        y            = event.offsetY,
        w            = event.target.offsetWidth,
        h            = event.target.offsetHeight,
        offsetX      = Math.abs( (w / 2) - x ),
        offsetY      = Math.abs( (h / 2) - y ),
        deltaX       = (w / 2) + offsetX,
        deltaY       = (h / 2) + offsetY,
        scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)),
        // Criei essa nova variavel que pega apenas o ripple do elemento clicado
        elRipple = element.querySelector('.js-ripple')

    tl.fromTo(elRipple, 0.5, {
      x: x,
      y: y,
      transformOrigin: '50% 50%',
      scale: 0,
      opacity: 1,
      ease: Linear.easeIn
    },{
      scale: scale_ratio,
      opacity: 1
    });

    return tl;
  }

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      rippleAnimation(button, event)
    })
  })

})()