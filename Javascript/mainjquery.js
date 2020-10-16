    $(document).ready(function () {

        //Background Randomiser
        var bgArray = ['1.png', '2.png', '3.png'];
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