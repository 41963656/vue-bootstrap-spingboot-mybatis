;require(["config"], function (config) {
    require(["vue", "jquery", "vue-touch", "moment", "url", "tool", "jquery-weui"], function (Vue, $, vueTouch, moment, url, tool) {
        Vue.use(vueTouch);

        var data = {
            demoPanel: {
                emptyData: [],
                data: []
            }
        };

        var vue = new Vue({
            el: "#page",
            data: data
        });

        getDemos();

        function getDemos() {
            $.get(url.demoData, function (response) {
                var result = response;
                data.demoPanel.data = result;
            }, "json")
        }
    });
})