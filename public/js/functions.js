
function getWindowSize() {
    return $(window).width()
}

function getLang() {
    return $('html').attr('lang');
}

function getPageDirection() {
    let lang = getLang();
    return lang = 'ar' ? 'rtl' : 'ltr';
}

function openSidebar(sidebar) {

    if (getWindowSize() <= 576) {
        sidebar.animate({
            width: '100vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }
    else if (getWindowSize() > 576 && getWindowSize() <= 768) {
        sidebar.animate({
            width: '75vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }
    else if (getWindowSize() > 768 && getWindowSize() <= 992) {
        sidebar.animate({
            width: '40vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }
    else if (getWindowSize() > 992 && getWindowSize() <= 1200) {
        sidebar.animate({
            width: '30vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }
    else if (getWindowSize() > 1200) {
        sidebar.animate({
            width: '20vw'
        }, 600, function () {
            $(".sidebar-header").fadeIn(300)
            setTimeout(function () {
                $(".sidebar-body").fadeIn(300)
            }, 400)
        })
    }

}

function closeSidebar(sidebar) {
    $(".sidebar-body").fadeOut(300)
    setTimeout(function () {
        $(".sidebar-header").fadeOut(300)
    }, 700)
    setTimeout(function () {
        sidebar.animate({
            width: '0'
        }, 700)
    })
}

function getTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
}

function getDate() {
    var month;
    const monthNames_en = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var monthNames_ar = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    const dateObj = new Date();
    if (getLang() == 'ar')
        month = monthNames_ar[dateObj.getMonth()];
    else
        month = monthNames_en[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = day + ' ' + month + ',' + year;
    return output;
}

function displayElement(element, type, duration) {
    if (type == 'fade')
        element.fadeIn(duration);
    else if (type == 'show')
        element.show(duration);
    else
        return;
}

function hideElement(element, type, duration) {
    if (type == 'fade')
        element.fadeOut(duration);
    else if (type == 'hide')
        element.hide(duration);
    else
        return;
}

function changeVisibility(element, action) {
    element.css('visibility', action);
}

function showFixedDateTime(parent) {
    parent.find("#date-time-content").show(200);
    parent.find("#date-container-toggler").show(200);
}

function hideFixedDateTime(parent = $(".fixed-date-container")) {
    $("#date-container-toggler").fadeOut(300);
    parent.find("#date-time-content").hide(300);
    setTimeout(function () {
        parent.find("#date-container-opener").show(200)
    }, 100)
}

/* *********************************************************************************************** */

function handleEgxTabClick(tab) {

    const charts = $(".egx-chart");
    const tabs = $(".egx-tab");
    const chartID = '#' + tab.attr('data-target');
    const targetChart = $(chartID);

    tabs.each(function () {
        if (tab.attr('id') == $(this).attr('id')) {
            if (!$(this).hasClass('egx-tab-active'))
                $(this).addClass('egx-tab-active');
        }
        else
            if ($(this).hasClass('egx-tab-active'))
                $(this).removeClass('egx-tab-active');
    })

    charts.each(function () {
        if (targetChart.attr('id') == $(this).attr('id'))
            $(this).fadeIn(400)
        else
            $(this).css('display', 'none');
    })

}

// *************************************************************************************************

function handleCompanyTabClick(tab) {

    const companyTabs = $(".company-tab");
    const companyContainers = $(".company-category-container");
    const containerID = '#' + tab.attr('data-target');
    const targetContainer = $(containerID);

    companyTabs.each(function () {
        if (tab.attr('id') == $(this).attr('id')) {
            if (!$(this).hasClass('company-tab-selected'))
                $(this).addClass('company-tab-selected');
        }
        else {
            if ($(this).hasClass('company-tab-selected'))
                $(this).removeClass('company-tab-selected');
        }
    })

    companyContainers.each(function () {
        if (targetContainer.attr('id') == $(this).attr('id'))
            $(this).fadeIn(300)
        else
            $(this).css('display', 'none');
    })

}

// *************************************************************************************************

function handleCompanyDetailsTabClick(tab) {

    const companyTabs = $(".company-details-tab");
    const companyContainers = $(".company-data-container");
    const containerID = '#' + tab.attr('data-target');
    const targetContainer = $(containerID);

    companyTabs.each(function () {
        if (tab.attr('id') == $(this).attr('id')) {
            if (!$(this).hasClass('company-tab-selected'))
                $(this).addClass('company-tab-selected');
        }
        else {
            if ($(this).hasClass('company-tab-selected'))
                $(this).removeClass('company-tab-selected');
        }
    })

    companyContainers.each(function () {
        if (targetContainer.attr('id') == $(this).attr('id'))
            $(this).fadeIn(300)
        else
            $(this).css('display', 'none');
    })

}

// *************************************************************************************************

function handleNewsTabClick(tab) {

    const companyTabs = $(".news-tab");
    const companyContainers = $(".news-data-container");
    const containerID = '#' + tab.attr('data-target');
    const targetContainer = $(containerID);

    companyTabs.each(function () {
        if (tab.attr('id') == $(this).attr('id')) {
            if (!$(this).hasClass('news-tab-selected'))
                $(this).addClass('news-tab-selected');
        }
        else {
            if ($(this).hasClass('news-tab-selected'))
                $(this).removeClass('news-tab-selected');
        }
    })

    companyContainers.each(function () {
        if (targetContainer.attr('id') == $(this).attr('id'))
            $(this).fadeIn(300)
        else
            $(this).css('display', 'none');
    })

}

// *************************************************************************************************

function handleAgendaTabClick(tab) {

    const agendaTabs = $(".agenda-tab");
    const agendaContainers = $(".agenda-container");
    const containerID = '#' + tab.attr('data-target');
    const targetContainer = $(containerID);

    agendaTabs.each(function () {
        if (tab.attr('id') == $(this).attr('id')) {
            if (!$(this).hasClass('agenda-tab-selected'))
                $(this).addClass('agenda-tab-selected');
        }
        else {
            if ($(this).hasClass('agenda-tab-selected'))
                $(this).removeClass('agenda-tab-selected');
        }
    })

    agendaContainers.each(function () {
        if (targetContainer.attr('id') == $(this).attr('id'))
            $(this).fadeIn(300)
        else
            $(this).css('display', 'none');
    })

}

// **************************************************************************************

function copyToClipboard(element) {

    var temp = $("<input>");
    $("body").append(temp);
    temp.val($(element).text()).select();
    document.execCommand('copy');
    temp.remove();
}
