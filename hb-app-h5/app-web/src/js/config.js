require.config({
    paths: {
        "jquery": "/bower_components/jquery/dist/jquery.min",
        "vue": "/bower_components/vue/dist/vue.min",
        "moment": "/bower_components/moment/min/moment-with-locales.min",
        "jquery-weui": "../js/lib/jquery-weui.min",
        "echarts": "/bower_components/echarts/dist/echarts.min",
        "hammerjs": "/bower_components/hammerjs/hammer.min",
        "vue-touch": "/js/directive/vue-touch/vue-touch.min",
        "url": "/js/url-config",
        "tool": "/js/tool"
    },
    shim: {
        "vue-touch": {
            deps: ["hammerjs", "vue"]
        },
        "jquery-weui": {
            deps: ["jquery"]
        }
    }
});