const urlField = $('#image_url');
const previewField = $('#image_view .show-img-card');

function updateImagePreview() {
  previewField.attr('src', urlField.val());
}

$(document).ready(() => {
  updateImagePreview();
  $('#image_url').on('change keyup paste', updateImagePreview);
});

