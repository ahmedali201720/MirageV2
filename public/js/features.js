$(document).ready(() => {

    /* Copy to Cipboard */
    new ClipboardJS('.clipboard-btn');
    new ClipboardJS('.btn');

    // ***************************************************************************************************

    $("#go-up").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1000);
    })

})
