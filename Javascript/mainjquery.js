    $(document).ready(function () {
        var ext;

        if($('html').hasClass('webp')){
            ext = 'webp'
        } else{
            ext = 'png'
        }

        //Background Randomiser
        var bgArray = [`1.${ext}`, `2.${ext}`, `3.${ext}`];
        var bgNum = bgArray[Math.floor(Math.random() * bgArray.length)];
        $('body').css({
            'background-image': 'url(bgimages/' + bgNum + ')'
        });

        console.log(bgNum);


        //Background Credit and Link assigner
        switch (bgNum) {
            case '1.png':
                $('#bgcredit>a').text('FourtyFingers');
                $('#bgcredit>a').attr('href', 'https://twitter.com/fourtyfingers');
                break;
            case '2.png':
                $('#bgcredit>a').text('DatGeekBoy');
                $('#bgcredit>a').attr('href', 'https://twitter.com/Geekboytweets');
                break;
            case '3.png':
                $('#bgcredit>a').text('Jennytoons');
                $('#bgcredit>a').attr('href', 'https://twitter.com/toonsjenny');
                break;
        }

    });


    