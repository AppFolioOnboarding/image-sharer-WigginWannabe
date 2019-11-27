const Masonry = require('masonry-layout');

const urlField = $('#image_url');
const previewField = $('#image_view .img-card');

function updateImagePreview() {
  previewField.attr('src', urlField.val());
}

$(document).ready(() => {
  updateImagePreview();
  $('#image_url').on('change keyup paste', updateImagePreview);

  if ($('.grid').length > 0) {
    new Masonry('.grid', { // eslint-disable-line no-new
      itemSelector: '.grid-item',
    });
  }
});
