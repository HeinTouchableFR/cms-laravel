import {ThemeSwitcher} from "@elements/ThemeSwitcher";
import Comments from "@elements/Comments";
import DeleteAccount from "@elements/DeleteAccount";
import ContactForm from "@elements/ContactForm";
import Notification from "@elements/Notification";
import {
    AlertElement,
    FormElement,
    TimeAgoElement,
    SkeletonElement,
    SwitchElement,
    DropdownElement,
    TimeCountdownElement,
    LoaderElement,
    AutoSubmitElement,
    LoaderOverlayElement,
    AjaxDeleteElement,
    ModalDialogElement,
    NavTabsElement,
    TextareaAutogrowElement,
    SelectChoicesElement,
    InputChoicesElement,
} from "@heintouchable/ui";
import Search from "@elements/Search";

// Custom Elements
AlertElement.defineElement();
FormElement.defineElement();
Search.defineElement();
SkeletonElement.defineElement();
TimeAgoElement.defineElement();
DropdownElement.defineElement();
TimeCountdownElement.defineElement();
LoaderElement.defineElement();
SwitchElement.defineElement();
AutoSubmitElement.defineElement();
LoaderOverlayElement.defineElement();
AjaxDeleteElement.defineElement();
ModalDialogElement.defineElement();
NavTabsElement.defineElement();
TextareaAutogrowElement.defineElement();
customElements.define("input-choices", InputChoicesElement, {
    extends: "input",
});
customElements.define("select-choices", SelectChoicesElement, {
    extends: "select",
});

//CMS
customElements.define("delete-account", DeleteAccount);
customElements.define("site-notifications", Notification);
customElements.define("comments-area", Comments);
customElements.define("contact-form", ContactForm);
customElements.define("theme-switcher", ThemeSwitcher);
