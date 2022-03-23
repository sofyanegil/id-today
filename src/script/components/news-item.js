import logo from '../../images/logo.svg';
class NewsItem extends HTMLElement {
  set news(news) {
    this._news = news;
    this.setAttribute('class', 'card sm:basis-full md:basis-1/2 lg:basis-1/5 rounded-xl overflow-hidden shadow-md shadow-slate-600 m-3 border-1 border-slate-400');
    this.render();
  }
  generateDate(date) {
    return new Date(date).toLocaleString('id-ID', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  generateDesc(desc) {
    return desc !== '' ? `${desc.substring(0, 200)}...` : '';
  }
  render() {
    this.innerHTML = `
        <p class="absolute bg-opacity-70 bg-black p-2 rounded-tl-xl text-white text-bold">${this.generateDate(this._news.pubDate)}</p>
        <img class="w-full max-h-30" src="${this._news.thumbnail}" alt="${this._news.title}" />
        <div class="p-2 bg-slate-100">
          <h1 class="text-xl font-bold">${this._news.title}</h1>
          <p class="text-sm text-justify">${this.generateDesc(this._news.description)}</p>
        </div>
        <a href="${this._news.link}" class="inline-block w-full text-center bg-blue-600 hover:bg-blue-900 p-4 rounded-b-xl text-white font-bold" target=”_blank” rel=”noreferrer noopener”>Baca selengkapnya
        <img src="${logo}" class="inline w-5" />
        </a>`;
  }
}
customElements.define('news-item', NewsItem);
