$( document ).ready(function() {
  $('.search').click(function(event){
    event.preventDefault()
    $('.searchBox').hide()
    $.ajax({
          url: '/',
          type: 'POST',
          data: {'search':$('#search').val()}, // An object with the key 'submit' and value 'true;
          success: function (data) {
            for(var i = 0 ; i < data.length; i++){
              $( ".searchResults" ).append( `<img src=${data[i].image}><p>${data[i].title}</p>`);
            }
          }
      });
  });
});
