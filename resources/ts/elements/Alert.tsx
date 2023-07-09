export default class Alert {
  /**
   * Affiche un message flash flottant sur la page
   */
  static flash(
    message: string,
    type: string = 'success',
    duration: number = 3,
  ) {
    if (!customElements.get('alert-message')) {
      //preactCustomElement('alert-message', AlertComponent, null, null)
    }
    const alert = document.createElement('alert-message')
    if (duration) {
      alert.setAttribute('duration', duration.toString())
    }
    alert.setAttribute('type', type)
    alert.setAttribute('is-floating', 'true')
    alert.innerText = message
    document.body.appendChild(alert)
  }
}
