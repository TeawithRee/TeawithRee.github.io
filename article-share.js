(function () {
  'use strict';

  var trigger = document.querySelector('.article-share-trigger');
  var menu = document.querySelector('.article-share-menu');
  if (!trigger || !menu) return;

  var heading = document.querySelector('main.art h1');
  var title = heading ? heading.textContent.replace(/\s+/g, ' ').trim() : document.title;
  var pageUrl = window.location.href.split('#')[0];
  var encodedUrl = encodeURIComponent(pageUrl);
  var encodedTitle = encodeURIComponent(title);
  var shareUrls = {
    linkedin: 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodedUrl,
    x: 'https://twitter.com/intent/tweet?url=' + encodedUrl + '&text=' + encodedTitle,
    whatsapp: 'https://api.whatsapp.com/send?text=' + encodeURIComponent(title + ' ' + pageUrl),
    facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl
  };

  function closeMenu(returnFocus) {
    menu.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (returnFocus) trigger.focus();
  }

  trigger.addEventListener('click', function () {
    var opening = menu.hidden;
    menu.hidden = !opening;
    trigger.setAttribute('aria-expanded', String(opening));
  });

  menu.querySelectorAll('[data-share-method]').forEach(function (link) {
    var method = link.getAttribute('data-share-method');
    if (shareUrls[method]) link.href = shareUrls[method];
    link.addEventListener('click', function () {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'share', {
          method: method,
          content_type: 'article',
          item_id: window.location.pathname
        });
      }
      closeMenu(false);
    });
  });

  document.addEventListener('click', function (event) {
    if (!trigger.contains(event.target) && !menu.contains(event.target)) closeMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !menu.hidden) closeMenu(true);
  });
}());
