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
//preactCustomElement("alert-message", Alert, null, null);
//preactCustomElement("search-input", SearchInput, null, null);
//preactCustomElement("loader-element", Loader, null, null);
//preactCustomElement("form-field", FormField, null, null);
//preactCustomElement("delete-account", DeleteAccount, null, null);
//preactCustomElement("site-notifications", Notifications, null, null);
//preactCustomElement("comments-area", Comments, null, null);
//preactCustomElement("contact-form", ContactForm, null, null);
customElements.define('theme-switcher', ThemeSwitcher)
