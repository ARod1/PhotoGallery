var $overlay = $('<div id="overlay"></div>');
var $frame = $('<div class="frame"></div>');
var $image = $("<img>");
var $captionTitle = $("<h1></h1>");
var $caption = $("<p></p>");
var $forward = $('<span class="forward"></span>').text(">");
var $back = $('<span class="back"></span>').text("<");
var gallery = [];
var titles = [];
var desc = [];
var thisImage;
var index;
var src;




$frame.append($image);
$frame.append($captionTitle);
$frame.append($caption);
$frame.append($back);
$frame.append($forward);

$overlay.append($frame);



$("body").append($overlay);

$("div a").each(function(){
    gallery.push($(this).attr("href"));
    titles.push($(this).children("img").attr("title"));
    desc.push($(this).children("img").attr("alt"));
});
                  

$(".thumb a").click(function(event){
    event.preventDefault();
    $overlay.show()
    var href = $(this).attr("href");
    $image.attr("src", href).show();
    
    var title = $(this).children("img").attr("title");
    $captionTitle.text(title);
    
    var caption = $(this).children("img").attr("alt");
    $caption.text(caption);
    
    thisImage = href;
    index = gallery.indexOf(thisImage);
});


$overlay.click(function(){
    $(this).hide();
});

$("#search").on("keyup", function(){
    var search = $("#search").val().toLowerCase();
    
    $("div img").each(function(){
    var altValue = $(this).attr("alt")
    if( altValue.indexOf(search) === -1 ){
        $(this).fadeOut();
    } else {
        $(this).show();   
    }
});
    
});

$forward.click(function(event){
    event.stopPropagation();
    if( index !== -1 && index !== gallery.length - 1) {
        index+=1;
        src = gallery[index];
        $image.attr("src", src).show();
        $captionTitle.text(titles[index]);
        $caption.text(desc[index]);
    } else {
        index = gallery.length - 1;   
    }
});

$back.click(function(event){
    event.stopPropagation();
     if( index !== 0) {
        index-=1;
        src = gallery[index];
        $image.attr("src", src).show();
        $captionTitle.text(titles[index]);
        $caption.text(desc[index]);
    } else {
        index = 0;   
    }

});
