'use strict';
$(document).ready(function () {
    // $.getJSON("news.json", function (data) {
    var items = [];
    $.each(data.articles, function (key, val) {

        var x = val.author;
        var y = val.content

        if (x == null) {
            x = "Аноним";
        }
        if (y == null) {
            y = "";
        }

        items.push("<li id='" + key + "'>" + "<span style='color:green'>" + val.source.name + "</span>" + "</br>" + "<em>" + x + "</em>" + "</br>" + "<h1>" + val.title + "</h1>" + "</br>" + val.description + "</br>" + "<a href=" + val.url + ">Статья</a>" + "</br>" + "<img src=" + val.urlToImage + "></img>" + "</br>" + val.publishedAt + "</br>" + "</li>");


    });
    items = items.join('');
    var list = document.querySelector(".list");
    list.innerHTML = items;



    var $form = $('form'),
        $author = $('#author'),
        $title = $('#title'),
        $description = $('#description'),
        $url = $('#url'),
        $img = $('#urlImg'),
        $data = $('#data'),
        $time = $('#time');


    $form.on('submit', function (event) {
        event.preventDefault();

        list.innerHTML = "<li>" + $author.val() + "</br>" + "<h1>" + $title.val() + "</h1>" + "</br>" + $description.val() + "</br>" +
            "<a href=" + $url.val() + ">Статья</a>" + "</br>" + "<img alt='Картинка' src=" + $img.val() + "></img>" + "</br>" +
            $data.val() + " " + $time.val() + "</li>" + list.innerHTML;

        $author.val("");
        $title.val("");
        $description.val("");
        $url.val("");
        $img.val("");
        $data.val("");
        $time.val("");


    })

    $("li").hide();
    $("li").show(2000);
    $("label").hide();
    $("label").show(2000);
    $("input").hide();
    $("input").show(2000);

    // });



})