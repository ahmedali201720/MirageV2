$(document).ready(() => {

    $(".company-tab").click(function () {

        handleCompanyTabClick($(this));

    })

    $(".company-details-tab").click(function () {

        handleCompanyDetailsTabClick($(this));

    })

    // High-low-open-close chart

    Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-ohlc.json', function (data) {
        Highcharts.stockChart('highLowChartContainer', {
            rangeSelector: {
                buttons: [{
                    type: 'day',
                    count: 1,
                    text: '1day'
                },
                {
                    type: 'week',
                    count: 1,
                    text: '1W'
                },
                {
                    type: 'month',
                    count: 1,
                    text: '1m'
                },
                {
                    type: 'month',
                    count: 3,
                    text: '3m',
                },
                {
                    type: 'month',
                    count: 6,
                    text: '6m'
                },
                {
                    type: 'year',
                    count: 1,
                    text: 'year'
                }],
                inputEnabled: false,
                selected: 1,
            },
            yAxis: {
                opposite: false
            },
            series: [{
                type: 'candlestick',
                name: 'البنك التجارى الدولى ',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'week', // unit name
                            [1] // allowed multiples
                        ], [
                            'month',
                            [1, 2, 3, 4, 6]
                        ]
                    ]
                }
            }]
        });
    });

    Highcharts.setOptions({
        lang: {
            rangeSelectorZoom: ''
        }
    });

})