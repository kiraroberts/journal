$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    var nameInput = $('#name').val();
    var titleInput = $('#title').val();
    var bodyInput = $('#body').val();

    numberOfWords(bodyInput);
  });
});
