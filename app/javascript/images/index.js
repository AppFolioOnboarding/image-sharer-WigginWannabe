const Masonry = require('masonry-layout');

const urlField = $('#image_url');
const previewField = $('#image_view .img-card');

let msry;

function updateImagePreview() {
  previewField.attr('src', urlField.val());
}

function retrieveTags(img) {
  let imageTags = img.data('tags');
  if (!imageTags) imageTags = [];
  else imageTags = imageTags.split(',');
  return imageTags.map(tag => tag.trim());
}

function filterImages(tag) {
  $('.grid-item').hide();
  $('.grid-item').each(function () {
    const image = $(this);
    const imageTags = retrieveTags(image);
    if (imageTags.includes(tag)) image.show();
  });

  msry.layout();
}

$(document).ready(() => {
  updateImagePreview();
  $('#image_url').on('change keyup paste', updateImagePreview);

  if ($('.grid').length > 0) {
    msry = new Masonry('.grid', { // eslint-disable-line no-new
      itemSelector: '.grid-item',
    });
  }

  $('.image-tag').on('click', function () {
    filterImages($(this).text().trim());
  });

  $('#clear_filter_btn').on('click', () => {
    $('.grid-item').show();
    msry.layout();
  });
});
