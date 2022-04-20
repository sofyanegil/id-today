import $ from 'jquery';

class DataNews {
  static getNews(portal) {
    return $.ajax({
      url: `https://api-berita-indonesia.vercel.app/${portal}/terbaru`,
      success: (response) => response,
      error: (err) => alert(err.statusText),
    });
  }
}
export default DataNews;
