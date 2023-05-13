import "../css/admin.scss";
import FileManager from "@heintouchable/filemanager";
import {
    DatePickerElement,
    AutosaveBlurElement,
    InputAttachmentElement,
    ItemSorterElement,
} from "@heintouchable/ui";
import Spotlight from "@elements/Spotlight";
import '@grafikart/drop-files-element'

DatePickerElement.defineElement();
AutosaveBlurElement.defineElement();
Spotlight.defineElement();
InputAttachmentElement.defineElement();
ItemSorterElement.defineElement();

customElements.define("file-manager", FileManager);
