export function registerSlider() {
  const sliders = document.querySelectorAll('.slider')

  sliders.forEach(slider => {
    const autoplay = slider.getAttribute('autoplay')
    const duration = parseInt(slider.getAttribute('duration') ?? '0', 10) * 1000
    let slideInterval = null
    let current: Element | null = null

    function initArrows() {
      const prev = slider.querySelector('.slider__prev')
      if (!prev) {
        return
      }
      prev.addEventListener('click', prevSlide)

      const next = slider.querySelector('.slider__next')
      if (!next) {
        return
      }
      next.addEventListener('click', nextSlide)
    }

    function initSlider() {
      const firstItem = slider.querySelector<HTMLElement>('.slider__item')
      if (!firstItem) {
        return
      }
      firstItem.classList.add('slider__item-active')
      current = firstItem
    }

    initSlider()
    initArrows()

    function nextSlide() {
      if (!current) {
        return
      }
      current.classList.remove('slider__item-active')
      if (current.nextElementSibling) {
        current = current.nextElementSibling
        current.classList.add('slider__item-active')
      } else {
        current = slider.querySelector('.slider__item:first-child')
        if (!current) {
          return
        }
        current.classList.add('slider__item-active')
      }
    }

    function prevSlide() {
      if (!current) {
        return
      }
      current.classList.remove('slider__item-active')
      if (current.previousElementSibling) {
        current = current.previousElementSibling
        current.classList.add('slider__item-active')
      } else {
        current = slider.querySelector('.slider__item:last-child')
        if (!current) {
          return
        }
        current.classList.add('slider__item-active')
      }
    }

    if (autoplay) {
      slideInterval = setInterval(nextSlide, duration)
    }
  })
}
