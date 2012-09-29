
(function(){


    var stickThePic = function() {
        var $sticky, $stickyHome, onScroll, stickyHeaderTop;

        $sticky = $('#gravatar');

        stickyHeaderTop = $sticky.offset().top + 20;

        onScroll = function() {
            if ($(window).scrollTop() > stickyHeaderTop) {
                if ($('#gravatar', "div#picHost").length > 0){
                    $sticky = $('#gravatar').detach();
                }else if ($('#gravatar', "body").length > 0) return;

                $sticky.prependTo($('body'));
                $sticky.addClass("fixed");
            } else {
                if ($('#gravatar', "div#picHost").length > 0)return;
                $sticky.appendTo("div#picHost");
                $sticky.removeClass("fixed");
                /*if ($sticky === null) $sticky = $('#gravatar');
                $sticky.appendTo($stickyHome);
                $sticky = null;
                */

            }
        };

        $(window).scroll(onScroll);
    };


    var whatIamAnim = function(){
        var blinkAnim, currentChar, currentWord, htmlInser, inserChar, list, out, printWord, timeBwtLetters, timeBwtWords;
        out = $(this);
        list = $(this).data("list").split(';');
        inserChar = '|';
        htmlInser = "<span class=inserChar>" + inserChar + "</span>";
        out.html("<span class=inserChar>" + inserChar + "</span>");
        blinkAnim = function() {
            $(".inserChar").delay(1000).hide(100).delay(1000).show(100);
            $(".inserChar").queue(function(next) {
                next();
                blinkAnim();
            });
        };
        currentWord = 0;
        currentChar = 1;
        timeBwtLetters = 50;
        timeBwtWords = 2500;
        printWord = function() {
            var substr;
            substr = list[currentWord].substr(0, currentChar++);
            out.html("" + substr + " " + htmlInser);
            if (currentChar <= list[currentWord].length) {
                return setTimeout(printWord, timeBwtLetters);
            } else {
                setTimeout(blinkAnim, timeBwtLetters);
                currentWord = (currentWord + 1) % list.length;
                currentChar = 1;
                return setTimeout(printWord, timeBwtWords);
            }
        };
        setTimeout(printWord, 0);
    };

    $(document).ready(function(){

        $(".less-version").text("1.3.0");
        $(".jquery-version").text($().jquery);
        install_switch(
            $("#lang_switch"),    // Where to put the lang buttons
            $(".wrapper"),    // The scope of the switch
            '<li><a href="#">$lang</a>' // Template
        );

        stickThePic();
        $(".whatIam").each(whatIamAnim);
    });
})();

