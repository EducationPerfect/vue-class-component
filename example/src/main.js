System.register(["vue", "./App", "./store"], function (exports_1, context_1) {
    var vue_1, App_1, store_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (App_1_1) {
                App_1 = App_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            }
        ],
        execute: function () {
            new vue_1.default({
                el: '#app',
                store: store_1.default,
                render: function (h) { return h(App_1.default, {
                    props: { propMessage: 'World' }
                }); }
            });
        }
    };
});
