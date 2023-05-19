import {ThemeSwitcher} from '@elements/ThemeSwitcher'
import {InputChoicesElement, SelectChoicesElement} from '@elements/Choices'
import TimeAgoElement from '@elements/TimeAgo'
import TimeCountdownElement from '@elements/TimeCountdown'
import SkeletonElement from '@elements/Skeleton'
import SwitchElement from '@elements/Switch'
import DropdownElement from '@elements/Dropdown'
import AutoSubmitElement from '@elements/AutoSubmit'
import LoaderOverlayElement from '@elements/LoaderOverlay'
import AjaxDeleteElement from '@elements/AjaxDelete'
import ModalDialogElement from '@elements/ModalDialog'
import NavTabsElement from '@elements/NavTabs'
import TextareaAutogrowElement from '@elements/TextareaAutogrow'
import preactCustomElement from "@functions/preact";
import DeleteAccount from "@elements/DeleteAccount";
import ContactForm from "@elements/ContactForm";
import Comments from "@elements/Comments";
import Notifications from "@elements/Notification";
import {Alert} from "@components/Alert";
import {SearchInput} from "@components/SearchInput";
import Loader from "@components/Loader";
import {FormField} from "@components/Form/Form/FormField";

// Custom Elements
SkeletonElement.defineElement()
TimeAgoElement.defineElement()
DropdownElement.defineElement()
TimeCountdownElement.defineElement()
SwitchElement.defineElement()
AutoSubmitElement.defineElement()
LoaderOverlayElement.defineElement()
AjaxDeleteElement.defineElement()
ModalDialogElement.defineElement()
NavTabsElement.defineElement()
TextareaAutogrowElement.defineElement()
customElements.define('input-choices', InputChoicesElement, {
    extends: 'input',
})
customElements.define('select-choices', SelectChoicesElement, {
    extends: 'select',
})

//CMS
preactCustomElement('alert-message', Alert)
preactCustomElement('search-input', SearchInput)
preactCustomElement('loader-element', Loader)
preactCustomElement('form-field', FormField)
preactCustomElement('delete-account', DeleteAccount)
preactCustomElement('site-notifications', Notifications)
preactCustomElement('comments-area', Comments)
preactCustomElement('contact-form', ContactForm)
customElements.define('theme-switcher', ThemeSwitcher)
