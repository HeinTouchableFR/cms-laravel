import { ThemeSwitcher } from "@/elements/ThemeSwitcher";
import { InputChoicesElement, SelectChoicesElement } from "@/elements/Choices";
import TimeAgoElement from "@/elements/TimeAgo";
import TimeCountdownElement from "@/elements/TimeCountdown";
import SkeletonElement from "@/elements/Skeleton";
import SwitchElement from "@/elements/Switch";
import DropdownElement from "@/elements/Dropdown";
import AutoSubmitElement from "@/elements/AutoSubmit";
import LoaderOverlayElement from "@/elements/LoaderOverlay";
import AjaxDeleteElement from "@/elements/AjaxDelete";
import ModalDialogElement from "@/elements/ModalDialog";
import NavTabsElement from "@/elements/NavTabs";
import TextareaAutogrowElement from "@/elements/TextareaAutogrow";
import Alert from "@/elements/Alert";
import Comments from "@/elements/Comments";
import Search from "@/elements/Search";
import Loader from "@/elements/Loader";
import Form from "@/elements/Form";
import Notification from "@/elements/Notification";
import ContactForm from "@/elements/ContactForm";

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
Alert.defineElement()
Search.defineElement()
Loader.defineElement()
Form.defineElement()
// @ts-ignore
customElements.define('comments-area', Comments)
customElements.define('site-notifications', Notification)
customElements.define('contact-form', ContactForm)
customElements.define('theme-switcher', ThemeSwitcher)
