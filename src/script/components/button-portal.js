class ButtonPortal extends HTMLElement {
  connectedCallback() {
    this.value = this.getAttribute('value' || null);
    this.name = this.getAttribute('name' || null);
    this.render();
  }

  render() {
    this.innerHTML = `
    <button class="btn-portal bg-sky-500 hover:bg-sky-800  px-5 py-2 rounded-full text-white font-semibold" value="${this.value}">${this.name}</button>`;
  }
}

customElements.define('btn-portal', ButtonPortal);
