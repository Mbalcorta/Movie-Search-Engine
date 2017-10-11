$( document ).ready(function() {
  const ajaxCall = function(event){
    event.preventDefault()
    $.ajax({
          url: '/',
          type: 'POST',
          data: {'search':$('#search').val()}, // An object with the key 'submit' and value 'true;
          success: function (data) {
              $( ".searchResults" ).empty()
            for(var i = 0 ; i < data.length; i++){
              $( ".searchResults" ).append( `<img src=${data[i].image}><p>${data[i].title}</p>`);
            }
          }
      });
  }
  $('.search').on({
    click: function(e){
      if($('#search').val()){
         ajaxCall(e)
       } else {
         $( ".searchResults" ).empty()
         $( ".searchResults" ).append('<p>Must enter a movie</p>')
       }
    }
  });

  $(document).keypress(function (e) {
   if(e.which == 13 && $('#search').val()){
      ajaxCall(e)
    } else {
      $( ".searchResults" ).empty()
      $( ".searchResults" ).append('<p>Must enter a movie</p>')
    }
  });
});
