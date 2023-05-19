import '../css/admin.scss'
import FileManager from '@heintouchable/filemanager'
import Spotlight from '@elements/Spotlight'
import '@grafikart/drop-files-element'
import DatePickerElement from '@elements/DatePicker'
import AutosaveBlurElement from '@elements/AutosaveBlur'
import InputAttachmentElement from '@elements/InputAttachment'
import ItemSorterElement from '@elements/ItemSorter'

DatePickerElement.defineElement()
AutosaveBlurElement.defineElement()
Spotlight.defineElement()
InputAttachmentElement.defineElement()
ItemSorterElement.defineElement()

customElements.define('file-manager', FileManager)
