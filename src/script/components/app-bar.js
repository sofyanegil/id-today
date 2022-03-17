import logo from '../../images/logo.svg';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="w-100 bg-slate-900 flex sm:justify-start md:justify-center py-3 sticky items-center">
      <button id="drawer-btn" class="text-white">☰</button>
      <img src="${logo}" alt="logo" width="25" />
      <h1 class="text-3xl text-white font-bold">ID.Today</h1>
    </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
