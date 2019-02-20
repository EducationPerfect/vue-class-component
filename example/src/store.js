System.register(["vue", "vuex"], function (exports_1, context_1) {
    var vue_1, vuex_1, state, mutations;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (vuex_1_1) {
                vuex_1 = vuex_1_1;
            }
        ],
        execute: function () {
            vue_1.default.use(vuex_1.default);
            state = {
                count: 0
            };
            mutations = {
                increment: function (state) {
                    state.count++;
                }
            };
            exports_1("default", new vuex_1.default.Store({
                state: state,
                mutations: mutations
            }));
        }
    };
});
