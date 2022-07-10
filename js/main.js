const prev = document.querySelector('#btn-prev'),
      next = document.querySelector('#btn-next'),
      slides = document.querySelectorAll('.slide')
      dots = document.querySelectorAll('.dot')
        

let index = 0

const activeSlide = n => {
  for (slide of slides) {
      slide.classList.remove('active')
  }
  slides[n].classList.add('active')
}

const activeDot = n => {
  for (dot of dots) {
      dot.classList.remove('active')
  }
  dots[n].classList.add('active')
}


const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0
    activeSlide(index)
  } else {
    index++
    prepareCurrSlide(index)
  }
}

const prepareCurrSlide = ind =>{
  activeSlide(index)
  activeDot(index)
}

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1
    prepareCurrSlide(index)
  } else {
    index--
    prepareCurrSlide(index)
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () =>{
    index = indexDot
    prepareCurrSlide(index)
    console.log('click')

  })
})


next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)
