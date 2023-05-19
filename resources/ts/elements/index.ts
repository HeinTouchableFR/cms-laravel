import { ThemeSwitcher } from '@elements/ThemeSwitcher'
import Comments from '@elements/Comments'
import DeleteAccount from '@elements/DeleteAccount'
import ContactForm from '@elements/ContactForm'
import Notification from '@elements/Notification'
import Search from '@elements/Search'
import { InputChoicesElement, SelectChoicesElement } from '@elements/Choices'
import AlertElement from '@elements/Alert'
import FormElement from '@elements/Form'
import TimeAgoElement from '@elements/TimeAgo'
import TimeCountdownElement from '@elements/TimeCountdown'
import SkeletonElement from '@elements/Skeleton'
import SwitchElement from '@elements/Switch'
import DropdownElement from '@elements/Dropdown'
import LoaderElement from '@elements/Loader'
import AutoSubmitElement from '@elements/AutoSubmit'
import LoaderOverlayElement from '@elements/LoaderOverlay'
import AjaxDeleteElement from '@elements/AjaxDelete'
import ModalDialogElement from '@elements/ModalDialog'
import NavTabsElement from '@elements/NavTabs'
import TextareaAutogrowElement from '@elements/TextareaAutogrow'

// Custom Elements
AlertElement.defineElement()
FormElement.defineElement()
Search.defineElement()
SkeletonElement.defineElement()
TimeAgoElement.defineElement()
DropdownElement.defineElement()
TimeCountdownElement.defineElement()
LoaderElement.defineElement()
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
customElements.define('delete-account', DeleteAccount)
customElements.define('site-notifications', Notification)
customElements.define('comments-area', Comments)
customElements.define('contact-form', ContactForm)
customElements.define('theme-switcher', ThemeSwitcher)
