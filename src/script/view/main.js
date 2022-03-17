import $ from 'jquery';
import '../components/button-portal';
import '../components/news-list';
import logo from '../../images/logo.svg';

const main = () => {
  const mybutton = $('#top-btn');
  $('#drawer-btn').click(() => {
    $('#drawer-nav').toggleClass('open');
  });

  $('main').click(() => {
    $('#drawer-nav').removeClass('open');
  });

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  mybutton.click(() => {
    topFunction();
  });

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.css('display', 'block');
    } else {
      mybutton.css('display', 'none');
    }
  };

  window.onscroll = () => {
    scrollFunction();
  };

  const renderNews = (data) => {
    $('#today-news').attr('src', data.image);
    const berita = data.posts;
    $('news-list').html('');
    $.each(berita, (i, d) => {
      const tanggal = new Date(d.pubDate).toLocaleString('id-ID', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      });
      const desc = d.description !== '' ? `${d.description.substring(0, 200)}...` : '';
      $('news-list').append(`
        <div class="card sm:basis-full md:basis-1/2 lg:basis-1/5 rounded-xl overflow-hidden shadow-md shadow-slate-600 m-3 border-1 border-slate-400">
        <p class="absolute bg-opacity-70 bg-black p-2 rounded-tl-xl text-white text-bold">${tanggal}</p>
        <img class="w-full max-h-30" src="${d.thumbnail}" alt="${d.title}" />
          <div class="p-2 bg-slate-100">
            <h1 class="text-xl font-bold">${d.title}</h1>
            <p class="text-sm text-justify">${desc}</p>
          </div>
        <a href="${d.link}" class="inline-block w-full text-center bg-blue-600 hover:bg-blue-900 p-4 rounded-b-xl text-white font-bold" target=”_blank” rel=”noreferrer noopener”>Baca selengkapnya
        <img src="${logo}" class="inline w-5" />
        </a>
      </div>`);
    });
  };
  const getNews = (portal) => {
    const api = {
      async: true,
      url: `https://api-berita-indonesia.vercel.app/${portal}/terbaru`,
    };
    $.ajax(api)
      .done((response) => {
        const result = response.data;
        renderNews(result);
      })
      .fail((err) => new Error(err));
  };

  $('.btn-portal').click(function getData() {
    $('#drawer-nav').toggleClass('open');
    const portal = $(this).val();
    getNews(portal);
  });

  getNews('kumparan');
};

export default main;
