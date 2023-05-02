import { createRoot } from "react-dom/client";
import { Spotlight as SpotlightComponent } from "../components/Spotlight";

export default class Spotlight {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = "spotlight-bar") {
    class SpotlightElement extends HTMLElement {
      connectedCallback() {
        const root = createRoot(this);
        root.render(<SpotlightComponent />);
      }
    }

    customElements.define(name, SpotlightElement);
  }
}
