/**
 * Created by helical021 on 12/25/2016.
 */

function doExecute() {


    var message = reportPage.evaluate(function () {
        /*  $(".grid-stack-item").css("page-break-before", "always");
         $(".grid-stack-wrapper").css("page-break-before", "always");
        $('.grid-stack .grid-stack-item').attr('style', 'height: 22vh !important');
         */

        var mainElement = document.getElementById("main");
        if (mainElement) {
            dimension['width'] = mainElement.scrollWidth;
            dimension['height'] = mainElement.scrollHeight;
        }
        var half_height = dimension.height / 2;
        $('.grid-stack .grid-stack-item .component-container>iframe').attr('style', 'width:  100% !important');
        $('.grid-stack .grid-stack-item .component-container svg').attr('style', 'width:  100% !important');
        $('.grid-stack .grid-stack-item .component-container>iframe').attr('style', 'zoom: 0.8 !important');

        return true;

    });

}