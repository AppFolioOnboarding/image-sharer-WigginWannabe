let submitBtn = $('.form-actions input[type="submit"]');
let urlField  = $('#image_url');
let previewField = $('#image_view .show-img-card');
let urlRegex = /(https?:\/\/.+)\.(?:jpg|jpeg|gif|png)/g;

function updateImagePreview() {
  previewField.attr('src', urlField.val());
}

$(document).ready( () => {
  updateImagePreview()
  $('#image_url').on('change keyup paste', updateImagePreview);
});


