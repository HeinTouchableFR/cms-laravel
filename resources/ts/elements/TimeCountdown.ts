const DAY = 1000 * 60 * 60 * 24
const HOUR = 1000 * 60 * 60
const MINUTE = 1000 * 60

export default class TimeCountdown {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'time-countdown') {
    class TimeCountdownElement extends HTMLElement {
      timer: number | undefined
      connectedCallback() {
        const timestamp = parseInt(this.getAttribute('time') || '0', 10) * 1000
        const id = this.getAttribute('id') || ''
        const date = new Date(timestamp)
        this.updateText(date, id)
      }

      disconnectedCallback() {
        window.clearTimeout(this.timer)
      }

      updateText(date: Date, id: string) {
        const now = new Date().getTime()
        const distance = date.getTime() - now
        const days = Math.floor(distance / DAY)
        const hours = Math.floor((distance % DAY) / HOUR)
        const minutes = Math.floor((distance % HOUR) / MINUTE)
        const seconds = Math.floor((distance % MINUTE) / 1000)
        const element = document.getElementById(id)
        if (distance < 0 && element) {
          this.innerText = ''
          element.classList.add('blog-scheduled-unblur')
          return ''
        }
        let timeInterval = 1000
        if (days > 0) {
          this.innerText = `${days}j ${hours}h`
          timeInterval = HOUR
        } else if (hours > 0) {
          this.innerText = `${hours}h ${minutes}m`
          timeInterval = MINUTE
        } else {
          this.innerText = `${minutes}m ${seconds}s`
        }
        if (distance > 0) {
          this.timer = window.setTimeout(() => {
            if (window.requestAnimationFrame) {
              window.requestAnimationFrame(() => this.updateText(date, id))
            } else {
              this.updateText(date, id)
            }
          }, timeInterval)
        }
      }
    }
    customElements.define(name, TimeCountdownElement)
  }
}
