const Masonry = require('masonry-layout');

const urlField = $('#image_url');
const previewField = $('#image_view .img-card');

function updateImagePreview() {
  previewField.attr('src', urlField.val());
}

function retrieveTags(img) {
  var imageTags = img.data('tags');
  if (!imageTags) imageTags = [];
  else imageTags = imageTags.split(',');
  return imageTags.map(tag => tag.trim());
}

function filterImages(tag) {
  $('.grid-item').hide();
  $('.grid-item').each( function() {
    var image = $(this);
    const imageTags = retrieveTags(image);

    if (imageTags.includes(tag)) image.show();
  });
}

$(document).ready(() => {
  updateImagePreview();
  $('#image_url').on('change keyup paste', updateImagePreview);

  if ($('.grid').length > 0) {
    new Masonry('.grid', { // eslint-disable-line no-new
      itemSelector: '.grid-item',
    });
  }

  filterImages('fox');
});


 // $("#filters :checkbox").click(function () {
 //        $("li").hide();
 //        var activeFilters = getActiveFilters();
 //        $(".lesson").each(function () {
 //            var $lesson = $(this);
 //            var lessonFilters = $lesson.data("filters");
 //            if (lessonQualified(activeFilters, lessonFilters)) {
 //                $lesson.show();
 //            }
 //        });
 //    });