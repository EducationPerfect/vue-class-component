System.register(["vue", "vue-class-component", "./components/Hello", "vuex", "./app.html"], function (exports_1, context_1) {
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var vue_1, vue_class_component_1, Hello_1, vuex_1, app_html_1, App;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (vue_class_component_1_1) {
                vue_class_component_1 = vue_class_component_1_1;
            },
            function (Hello_1_1) {
                Hello_1 = Hello_1_1;
            },
            function (vuex_1_1) {
                vuex_1 = vuex_1_1;
            },
            function (app_html_1_1) {
                app_html_1 = app_html_1_1;
            }
        ],
        execute: function () {
            App = /** @class */ (function (_super) {
                __extends(App, _super);
                // We declare the props separately
                // to make props types inferable.
                function App() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    // inital data
                    _this.msg = 123;
                    _this.propMessage = "";
                    // use prop values for initial data
                    _this.helloMsg = 'Hellos, ' + _this.propMessage;
                    return _this;
                }
                App.prototype.beforeMount = function () {
                    console.log("cheesE");
                };
                // lifecycle hook
                App.prototype.mounted = function () {
                    this.greet();
                };
                Object.defineProperty(App.prototype, "computedMsg", {
                    // computed
                    get: function () {
                        return 'computed ' + this.msg;
                    },
                    enumerable: true,
                    configurable: true
                });
                // method
                App.prototype.greet = function () {
                    // alert('greeting: ' + this.msg)
                    this.$refs.helloComponent.sayHello();
                };
                // direct dispatch example
                App.prototype.incrementIfOdd = function () {
                    this.$store.dispatch('incrementIfOdd');
                };
                App = __decorate([
                    vue_class_component_1.default({
                        components: {
                            Hello: Hello_1.default
                        },
                        // Vuex's component binding helper can use here
                        computed: vuex_1.mapState([
                            'count'
                        ]),
                        methods: vuex_1.mapMutations([
                            'increment'
                        ]),
                        props: ["propMessage"],
                        template: app_html_1.default
                    })
                ], App);
                return App;
            }(vue_1.default));
            exports_1("default", App);
        }
    };
});
