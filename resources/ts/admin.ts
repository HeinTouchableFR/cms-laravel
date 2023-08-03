import '../css/admin.scss'
import FileManager from '@/elements/FileManager'
import '@grafikart/drop-files-element'
import DatePickerElement from '@/elements/DatePicker'
import AutosaveBlurElement from '@/elements/AutosaveBlur'
import InputAttachmentElement from '@/elements/InputAttachment'
import ItemSorterElement from '@/elements/ItemSorter'
import { Editor } from '@/elements/Editor'
import Spotlight from '@/elements/Spotlight'
import { slugify } from '@/functions/functions'

DatePickerElement.defineElement()
AutosaveBlurElement.defineElement()
InputAttachmentElement.defineElement()
ItemSorterElement.defineElement()
Spotlight.defineElement()

customElements.define('file-manager', FileManager)
const editor = new Editor()
window.editor = editor

const titleField = <HTMLInputElement>document.getElementById('title')
if (titleField) {
  titleField.addEventListener('input', function () {
    const slugField = <HTMLInputElement>document.getElementById('slug')
    slugField.value = slugify(titleField.value)
  })
}
