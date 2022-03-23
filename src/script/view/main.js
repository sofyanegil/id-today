import $ from 'jquery';
import '../components/button-portal';
import '../components/news-list';
import './event';
import DataNews from '../data/data-news';
const main = () => {
  const renderResult = (results) => {
    $('news-list')[0].kabar = results.data;
  };
  $('.btn-portal').click(async function getData() {
    $('#drawer-nav').toggleClass('open');
    const portal = $(this).val();
    const result = await DataNews.getNews(portal);
    renderResult(result);
  });

  const load = async () => {
    const result = await DataNews.getNews('Kumparan');
    renderResult(result);
  };
  load();
};
export default main;
