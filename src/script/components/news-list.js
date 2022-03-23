import $ from 'jquery';
import './news-item';
class NewsList extends HTMLElement {
  set kabar(kabar) {
    this._kabar = kabar;
    this.render();
  }
  render() {
    $('#today-news').attr('src', this._kabar.image);
    this.innerHTML = '';
    const berita = this._kabar.posts;
    $.each(berita, (i, news) => {
      const newsItemElement = document.createElement('news-item');
      newsItemElement.news = news;
      this.appendChild(newsItemElement);
    });
  }
}
customElements.define('news-list', NewsList);
