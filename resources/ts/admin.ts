import '../css/admin.scss'
import FileManager from '@heintouchable/filemanager'
import '@grafikart/drop-files-element'
import DatePickerElement from '@/elements/DatePicker'
import AutosaveBlurElement from '@/elements/AutosaveBlur'
import InputAttachmentElement from '@/elements/InputAttachment'
import ItemSorterElement from '@/elements/ItemSorter'
import { Editor } from '@/elements/Editor'

DatePickerElement.defineElement()
AutosaveBlurElement.defineElement()
InputAttachmentElement.defineElement()
ItemSorterElement.defineElement()
//preactCustomElement('spotlight-bar', Spotlight, null, null)

customElements.define('file-manager', FileManager)
const editor = new Editor()
window.editor = editor
