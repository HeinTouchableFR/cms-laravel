import '../css/admin.scss'
import FileManager from '@heintouchable/filemanager'
import '@grafikart/drop-files-element'
import DatePickerElement from '@elements/DatePicker'
import AutosaveBlurElement from '@elements/AutosaveBlur'
import InputAttachmentElement from '@elements/InputAttachment'
import ItemSorterElement from '@elements/ItemSorter'
import preactCustomElement from "@functions/preact";
import {Spotlight} from "@components/Spotlight";

DatePickerElement.defineElement()
AutosaveBlurElement.defineElement()
InputAttachmentElement.defineElement()
ItemSorterElement.defineElement()
preactCustomElement("spotlight-bar", Spotlight)

customElements.define('file-manager', FileManager)
