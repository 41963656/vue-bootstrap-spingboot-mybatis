;
require(["config"], function (config) {
    require(["vue", "jquery", "vue-touch", "echarts", "url", "moment", "tool", "jquery-weui"],
        function (Vue, $, vueTouch, echarts, url, moment, tool) {
            Vue.use(vueTouch);
        });
})