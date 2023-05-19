export function registerCarousel() {
  const carousels = document.querySelectorAll('.carousel')

  carousels.forEach(carousel => {
    const autoplay = true
    const repeat = true
    const noArrows = false
    const noBullets = false
    const duration = 5000
    let slide = carousel.querySelectorAll('.carousel__item')
    const slideTotal = slide.length - 1
    let slideCurrent = -1
    let slideInterval = null

    function initBullets() {
      if (noBullets) {
        return
      }
      const bulletContainer = document.createElement('div')
      bulletContainer.classList.add('slider__bullets')
      slide.forEach((elem, i) => {
        const bullet = document.createElement('div')
        bullet.classList.add('slider__bullets-item')
        bullet.id = `bullet-index-${i}`
        bullet.addEventListener('click', () => {
          goToIndexSlide(i)
        })
        bulletContainer.appendChild(bullet)
        elem.classList.add('proactivede')
      })
      carousel.appendChild(bulletContainer)
    }

    function initArrows() {
      if (noArrows) {
        return
      }

      const leftArrow = carousel.querySelector('.carousel__left')
      if (leftArrow) {
        leftArrow.addEventListener('click', () => {
          slideLeft()
        })
      }

      const rightArrow = carousel.querySelector('.carousel__right')
      if (rightArrow) {
        rightArrow.addEventListener('click', () => {
          slideRight()
        })
      }
    }

    function slideInitial() {
      initBullets()
      initArrows()
      setTimeout(function () {
        slideRight()
      }, 500)
    }

    function updateBullet() {
      if (!noBullets) {
        const bullets = carousel.querySelector('.slider__bullets')
        if (bullets) {
          bullets
            .querySelectorAll('.slider__bullets-item')
            .forEach((elem, i) => {
              elem.classList.remove('active')
              if (i === slideCurrent) {
                elem.classList.add('active')
              }
            })
        }
      }
      checkRepeat()
    }

    function checkRepeat() {
      const carouselRight = document.querySelector('.carousel__right')
      const carouselLeft = document.querySelector('.carousel__left')
      if (carouselLeft && carouselRight) {
        if (!repeat) {
          if (slideCurrent === slide.length - 1) {
            slide[0].classList.add('not-visible')
            slide[slide.length - 1].classList.remove('not-visible')
            if (!noArrows) {
              carouselRight.classList.add('not-visible')
              carouselLeft.classList.remove('not-visible')
            }
          } else if (slideCurrent === 0) {
            slide[slide.length - 1].classList.add('not-visible')
            slide[0].classList.remove('not-visible')
            if (!noArrows) {
              carouselLeft.classList.add('not-visible')
              carouselRight.classList.remove('not-visible')
            }
          } else {
            slide[slide.length - 1].classList.remove('not-visible')
            slide[0].classList.remove('not-visible')
            if (!noArrows) {
              carouselLeft.classList.remove('not-visible')
              carouselRight.classList.remove('not-visible')
            }
          }
        }
      }
    }

    function slideRight() {
      let proactiveSlide
      let preactiveSlide
      if (slideCurrent < slideTotal) {
        slideCurrent++
      } else {
        slideCurrent = 0
      }

      if (slideCurrent > 0) {
        preactiveSlide = slide[slideCurrent - 1]
      } else {
        preactiveSlide = slide[slideTotal]
      }
      let activeSlide = slide[slideCurrent]
      if (slideCurrent < slideTotal) {
        proactiveSlide = slide[slideCurrent + 1]
      } else {
        proactiveSlide = slide[0]
      }

      slide.forEach(elem => {
        let thisSlide = elem
        if (thisSlide.classList.contains('preactivede')) {
          thisSlide.classList.remove('preactivede')
          thisSlide.classList.remove('preactive')
          thisSlide.classList.remove('active')
          thisSlide.classList.remove('proactive')
          thisSlide.classList.add('proactivede')
        }
        if (thisSlide.classList.contains('preactive')) {
          thisSlide.classList.remove('preactive')
          thisSlide.classList.remove('active')
          thisSlide.classList.remove('proactive')
          thisSlide.classList.remove('proactivede')
          thisSlide.classList.add('preactivede')
        }
      })
      preactiveSlide.classList.remove('preactivede')
      preactiveSlide.classList.remove('active')
      preactiveSlide.classList.remove('proactive')
      preactiveSlide.classList.remove('proactivede')
      preactiveSlide.classList.add('preactive')

      activeSlide.classList.remove('preactivede')
      activeSlide.classList.remove('preactive')
      activeSlide.classList.remove('proactive')
      activeSlide.classList.remove('proactivede')
      activeSlide.classList.add('active')

      proactiveSlide.classList.remove('preactivede')
      proactiveSlide.classList.remove('preactive')
      proactiveSlide.classList.remove('active')
      proactiveSlide.classList.remove('proactivede')
      proactiveSlide.classList.add('proactive')

      updateBullet()
    }

    function slideLeft() {
      let preactiveSlide
      let proactiveSlide
      if (slideCurrent > 0) {
        slideCurrent--
      } else {
        slideCurrent = slideTotal
      }

      if (slideCurrent < slideTotal) {
        proactiveSlide = slide[slideCurrent + 1]
      } else {
        proactiveSlide = slide[0]
      }
      let activeSlide = slide[slideCurrent]
      if (slideCurrent > 0) {
        preactiveSlide = slide[slideCurrent - 1]
      } else {
        preactiveSlide = slide[slideTotal]
      }
      slide.forEach(elem => {
        let thisSlide = elem
        if (thisSlide.classList.contains('proactive')) {
          thisSlide.classList.remove('preactivede')
          thisSlide.classList.remove('preactive')
          thisSlide.classList.remove('active')
          thisSlide.classList.remove('proactive')
          thisSlide.classList.add('proactivede')
        }
        if (thisSlide.classList.contains('proactivede')) {
          thisSlide.classList.remove('preactive')
          thisSlide.classList.remove('active')
          thisSlide.classList.remove('proactive')
          thisSlide.classList.remove('proactivede')
          thisSlide.classList.add('preactivede')
        }
      })

      preactiveSlide.classList.remove('preactivede')
      preactiveSlide.classList.remove('active')
      preactiveSlide.classList.remove('proactive')
      preactiveSlide.classList.remove('proactivede')
      preactiveSlide.classList.add('preactive')

      activeSlide.classList.remove('preactivede')
      activeSlide.classList.remove('preactive')
      activeSlide.classList.remove('proactive')
      activeSlide.classList.remove('proactivede')
      activeSlide.classList.add('active')

      proactiveSlide.classList.remove('preactivede')
      proactiveSlide.classList.remove('preactive')
      proactiveSlide.classList.remove('active')
      proactiveSlide.classList.remove('proactivede')
      proactiveSlide.classList.add('proactive')

      updateBullet()
    }

    function goToIndexSlide(index: number) {
      const sliding =
        slideCurrent > index ? () => slideRight() : () => slideLeft()
      while (slideCurrent !== index) {
        sliding()
      }
    }

    slideInitial()

    if (autoplay) {
      slideInterval = setInterval(slideRight, duration)
    }
  })
}
