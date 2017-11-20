;define("tool", [], function () {
    return {
        //按照某个属性的值设置序号
        setOrder: function (datas, attr) {
            if (!datas && datas.length < 1) {
                return datas;
            }
            for (var i = 0; i < datas.length; i++) {
                if (i == 0) {
                    datas[i].order = 1;
                } else if (datas[i][attr] == datas[i - 1][attr]) {
                    datas[i].order = datas[i - 1].order;
                } else {
                    datas[i].order = i + 1;
                }
            }
            return datas;
        },
        /**
         * 按照某个属性对数据进行排序
         */
        ascData: function (datas, attr) {
            datas.sort(function (a, b) {
                return a[attr] - b[attr];
            });
        },
        /**
         * 按照某个属性对数据进行降序排列
         * @param datas
         * @param attr
         */
        descData: function (datas, attr) {
            datas.sort(function (a, b) {
                return b[attr] - a[attr];
            });
        },
        setFirst: function (datas, attr, val) {
            var first = [];
            for (var i = 0; i < datas.length; i++) {
                if (datas[i][attr] == val) {
                    first = first.concat(datas.splice(i, 1));
                    i--;
                }
            }
            for (var i in first) {
                datas.unshift(first[i]);
            }
        },
        getLevelColor: function (aqi) {
            if (aqi <= 50) {
                return "#00E400";
            } else if (aqi <= 100) {
                return "#FFFF00";
            } else if (aqi <= 150) {
                return "#FF7E00";
            } else if (aqi <= 200) {
                return "#FF0000";
            } else if (aqi <= 300) {
                return "#99004C";
            } else if (aqi > 300) {
                return "#7E0023";
            } else {
                return "-";
            }
        }
    }
});