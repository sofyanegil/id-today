class NewsList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '';
  }
}

customElements.define('news-list', NewsList);
