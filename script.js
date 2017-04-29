var words = $('#cats').text().split("");
$('#myText').empty();
$.each(words, function(i, v) {
    if(v===' '){
        $('#myText').append('<span>&nbsp;</span>');
    } else {
        $('#myText').append($("<span>").text(v));
    }
});
