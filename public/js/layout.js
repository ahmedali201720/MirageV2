$(document).ready(() => {

    var fixedDateContainerOpened = false;

    setTimeout(function () {
        $("#loading-overlay").fadeOut(600);
    }, 5000);

    // *******************************************************************************************************

    hideFixedDateTime();

    // *******************************************************************************************************

    $("#go-up").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1000);
    })

    // *******************************************************************************************************

    setInterval(function () {
        $("#date-time-content .time").text(getTime());
        $("#date-time-content .date").text(getDate());
    }, 1000);

    $("#date-container-toggler").click(function () {
        if (fixedDateContainerOpened) {
            const parent = $(this).parent();
            hideFixedDateTime(parent);
            fixedDateContainerOpened = false;
        }
    });

    $("#date-container-opener").click(function () {
        if (!fixedDateContainerOpened) {
            const parent = $(this).parent();
            showFixedDateTime(parent);
            fixedDateContainerOpened = true;
        }
    });

    // *******************************************************************************************

    const sidebarToggler = $("#sidebar-toggler");
    const sidebarCloseBtn = $("#sidebar-close-btn");
    sidebarToggler.click(function () {
        openSidebar($("#sidebar"));
    });
    sidebarCloseBtn.click(function () {
        closeSidebar($("#sidebar"));
    });

});

// ******************************************************************************************************

$('#newsTicker').breakingNews({
    direction: getPageDirection(),
    scrollSpeed: 2,
    borderWidth: 0,
});

$('#forexTicker').breakingNews({
    direction: getPageDirection(),
    scrollSpeed: 3,
    borderWidth: 0,
});

//*******************************************************************************************************

$(".activity-tab").click(function () {
    handleActivityTabClick($(this));
})

// *****************************************************************************************************

$(".egx-tab").click(function () {
    handleEgxTabClick($(this));
})

// ****************************************************************************************************

$(".tickers-container").css({
    top: $("#main-header").outerHeight() + 2
})