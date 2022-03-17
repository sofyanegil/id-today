class BottomBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    *{
      color: white;
    }
    bottom-bar{
      padding: 30px;
    }
    </style>
    <h4>Kumpulan Portal Berita di Indonesia</h4>
    <a href="https://github.com/sofyanegil">&copy;2022 Sofyan Egi Lesmana</a>
    `;
  }
}

customElements.define('bottom-bar', BottomBar);
