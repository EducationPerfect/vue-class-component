System.config({
    rootURL: "../controlpanel",
    map: {
        appdir: "./src",
        "vue": "node_modules:vue/dist/vue.min.js",
        "vuex": "node_modules:vuex/dist/vuex.min.js",
        "vue-class-component": "node_modules:vue-class-component/dist/vue-class-component.js",
        text: "node_modules:systemjs-plugin-text/text.js",
        css: "node_modules:systemjs-plugin-css/css.js",
        lib: "../lib",
    },
    meta: {
        'js/*.js': {
            format: 'global'
        }
    },
    paths: {
        "node_modules:": "../node_modules/",
    },
    packages: {
        root: {
            defaultExtension: "js"
        },
        appdir: {
            main: "./main.js",
            defaultExtension: "js"
        },
        lib: {
            defaultExtension: "js"
        },
    },
    meta: {
        "*.html": { loader: "text" },
        "*.json": { loader: "text" },
        "*.css": { loader: "css" }
    },
});

System.import("appdir");