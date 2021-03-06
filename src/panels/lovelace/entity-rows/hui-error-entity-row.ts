import { html, LitElement } from "@polymer/lit-element";
import { TemplateResult } from "lit-html";

class HuiErrorEntityRow extends LitElement {
  public entity?: string;
  public error?: string;

  static get properties() {
    return {
      error: {},
      entity: {},
    };
  }

  protected render(): TemplateResult {
    return html`
      ${this.renderStyle()} ${this.error || "Entity not available"}:
      ${this.entity || ""}
    `;
  }

  private renderStyle(): TemplateResult {
    return html`
      <style>
        :host {
          display: block;
          color: black;
          background-color: yellow;
          padding: 8px;
        }
      </style>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hui-error-entity-row": HuiErrorEntityRow;
  }
}

customElements.define("hui-error-entity-row", HuiErrorEntityRow);
