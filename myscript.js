var colors = ['red', 'blue', 'green', 'yellow', 'black', 'orange']

i = 0;

$("#change-colors").click(function() {
    $("div").css("backgroundColor", colors[i]);
    i = (i==colors.length-1) ? 0 : (i+1);
});
