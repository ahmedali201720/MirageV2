$(document).ready(() => {

    $(".company-tab").click(function () {

        handleCompanyTabClick($(this));

    })

    $(".company-details-tab").click(function () {

        handleCompanyDetailsTabClick($(this));

    });

    $(".agenda-tab").click(function () {

        handleAgendaTabClick($(this));

    });

})