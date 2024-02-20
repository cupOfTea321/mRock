export const afisha = () => {
    var dealerName = 'YandexTicketsDealer';
    var dealer = window[dealerName] = window[dealerName] || [];

    dealer.push(['setDefaultClientKey', '86c85884-4caf-4d9b-8eea-b422d62442e4']);
    dealer.push(['setDefaultRegionId', 213]);

    /* Загрузка */
    (function () {
        var rnd = '?' + new Date().getTime() * Math.random();
        var script = document.createElement('script');
        var target = document.getElementsByTagName('script')[0];
        // script.async = true;
        script.src = 'https://widget.afisha.yandex.ru/dealer/dealer.js' + rnd;
        target.parentNode.insertBefore(script, target);
    })();

}
export const afisha2 = () => {
    /* Настройка */
    var dealerName = 'YandexTicketsDealer';
    var dealer = window[dealerName] = window[dealerName] || [];

    dealer.push(['setDefaultClientKey', '86c85884-4caf-4d9b-8eea-b422d62442e4']);
    dealer.push(['setDefaultRegionId', 213]);

    YandexTicketsDealer.push(['getDealer', function (dealer) {
        const widget = dealer.Widget('ticketsteam-6369@16168107', 'session', {
            target: document.getElementById('ya-widget-frame'),
            onRequestClose: function() {
                widget.unmount();
                widget.destroy();
            },
        });

        widget.mount({ style: { height: '600px' } });
    }]);

    /* Загрузка */
    (function () {
        var rnd = '?' + new Date().getTime() * Math.random();
        var script = document.createElement('script');
        var target = document.getElementsByTagName('script')[0];
        // script.async = true;
        script.src = 'https://widget.afisha.yandex.ru/dealer/dealer.js'+rnd;
        target.parentNode.insertBefore(script, target);
    })();
}
