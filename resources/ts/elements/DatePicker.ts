import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

export default class DatePicker {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'date-picker') {
    class DatePickerElement extends HTMLInputElement {
      flatpickr: any
      connectedCallback() {
        const hour = this.getAttribute('hour')
        const defaultHour = hour ? parseInt(hour, 10) : undefined
        this.flatpickr = flatpickr(this, {
          locale: {
            firstDayOfWeek: 1,
            weekdays: {
              shorthand: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
              longhand: [
                'Dimanche',
                'Lundi',
                'Mardi',
                'Mercredi',
                'Jeudi',
                'Vendredi',
                'Samedi',
              ],
            },
            months: {
              shorthand: [
                'Janv',
                'Févr',
                'Mars',
                'Avr',
                'Mai',
                'Juin',
                'Juil',
                'Août',
                'Sept',
                'Oct',
                'Nov',
                'Déc',
              ],
              longhand: [
                'Janvier',
                'Février',
                'Mars',
                'Avril',
                'Mai',
                'Juin',
                'Juillet',
                'Août',
                'Septembre',
                'Octobre',
                'Novembre',
                'Décembre',
              ],
            },
            rangeSeparator: ' au ',
            weekAbbreviation: 'Sem',
            scrollTitle: 'Défiler pour augmenter la valeur',
            toggleTitle: 'Cliquer pour basculer',
            time_24hr: true,
            ordinal(nth) {
              if (nth > 1) {
                return ''
              }
              return 'er'
            },
          },
          altFormat: 'd F Y H:i',
          dateFormat: 'Y-m-d H:i:s',
          altInput: true,
          enableTime: true,
          defaultHour: defaultHour,
          onClose: () => {
            this.dispatchEvent(new Event('blur'))
          },
        })
      }

      disconnectedCallback() {
        this.flatpickr.destroy()
      }
    }
    customElements.define(name, DatePickerElement, { extends: 'input' })
  }
}
