/*require(['./js/arttemplate'],
    function (art) {*/

    window.arrScore = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    /*var domData = {
        list:[1,2,3,4,5,6]
    };

    var html = template('test', domData);
    document.getElementById('arttemplate').innerHTML = html;*/

    var questions = {
        list:[
            {
                attr:"1.",
                val:"a"
            },
            {
                attr:"2.",
                val:"a"
            },
            {
                attr:"3.",
                val:"a"
            },
            {
                attr:"4.",
                val:"a"
            },
            {
                attr:"5.",
                val:"b"
            },
            {
                attr:"6.",
                val:"b"
            },
            {
                attr:"7.",
                val:"b"
            },
            {
                attr:"8.",
                val:"b"
            },
        ]
    };

    var html = template('test', questions);
    document.getElementById('arttemplate').innerHTML = html;

    var total = 36;
    var scoreArr = new Array(parseInt(total));
    scoreArr[0] = new Array(2);
    scoreArr[0]['min'] = 0;
    scoreArr[0]['max'] = 4;
    scoreArr[1] = new Array(2);
    scoreArr[1]['min'] = 5;
    scoreArr[1]['max'] = 9;
    scoreArr[2] = new Array(2);
    scoreArr[2]['min'] = 10;
    scoreArr[2]['max'] = 14;
    scoreArr[3] = new Array(2);
    scoreArr[3]['min'] = 15;
    scoreArr[3]['max'] = 25;
    scoreArr[4] = new Array(2);
    scoreArr[4]['min'] = 26;
    scoreArr[4]['max'] = 30;
    scoreArr[5] = new Array(2);
    scoreArr[5]['min'] = 31;
    scoreArr[5]['max'] = 35;
    var tScore = 0;
    var dataForWeixin = {
        img: "http://ceshi.500b.cn/xx/20140725ywh1200.jpg",
        url: "http://ceshi.500b.cn/xx/",
        title: "悦慢职场综合素质测试",
        desc: "啦啦啦doyouloveme",
    };

    function next(t) {
        $("div.panel-body").hide();
        $("div.js_answer").eq(t).show();
        $("div.js_answer").eq(t).children("input").attr("checked", "");
        gotoTop();
    }

    function result(data) {
        // share_pop("open", 10000);
        $("div#bd > div.panel-body").hide();
        $('div#header_bar').hide();
        // $('div.container').hide();
        /*for (var i = 0; i < parseInt(total); i++) {
            if (parseInt(t) >= parseInt(scoreArr[i]['min']) && parseInt(t) <= parseInt(scoreArr[i]['max'])) {
                $("div.js_result").eq(i).show();
                $("div.js_result").eq(i).find(".resultscore").eq(0).html($("#totalsc").val());
                debugger
                d3Render(i);
                gotoTop();
            } else
                continue;
        }*/
        $("div.js_result").eq(0).show();
        d3Render(0, data);

        if(data[1]<2 || data[8]<2 || data[7]>3 || data[3]>3) {
            $('dl#contact').remove();
        }

        // rengeDisplay(data);
        gotoTop();
    }

    function rengeDisplay(data) {

        window.sandyData = data;

        var max = data[0];

        for (var i = 0; i < data.length; i++) {

            if (max < data[i]) max = data[i];

        }

        var result = [];

        for (var i = 0; i < data.length; i++) {

            if (max === data[i]) {
                result.push(i);
            }

        }

        var renge = [{
            name: "完美主义型",
            proper: "猫头鹰————完美者、改进型、捍卫原则型、秩序大使"
        }, {
            name: "助人型",
            proper: "蜜蜂————成就他人者、助人型、博爱型、爱心大使"
        }, {
            name: "成就型",
            proper: "狼——成就者、实践型、实干型"
        }, {
            name: "艺术型",
            proper: "猫——浪漫者、艺术型、自我型"
        }, {
            name: "智慧型",
            proper: "狐狸——观察者、思考型、理智型"
        }, {
            name: "忠诚型",
            proper: "狗————寻求安全者、谨慎型、忠诚型"
        }, {
            name: "快乐主义型",
            proper: "猴子————创造可能者、活跃型、享乐型"
        }, {
            name: "领袖型",
            proper: "狮子——挑战者、权威型、领袖"
        }, {
            name: "和平型",
            proper: "熊猫——维持和谐者、和谐型、平淡型"
        }];

        var rengeResult = [];
        debugger

        for (var i = 0; i < result.length; i++) {

            rengeResult.push(renge[result[i]].name);

        }

        var sandy = $('.js_result').eq(0).find("#sandy");

        if(rengeResult.length == 1) {

            sandy.html("你属于" + rengeResult[0] + "人格");

            sandy.after('<div><span>"对于这样纯粹的你！鼓掌！^3^ "</span></div>');

        } else if(rengeResult.length == 2){

            sandy.html("你属于" + rengeResult[0] + "、" + rengeResult[1] + "人格");

            sandy.after('<div><span>"如果你是双子座或者AB型血的话，请到三哥隔壁开一桌..."</span></div>');

        } else if(rengeResult.length == 3){

            sandy.html("你属于" + rengeResult[0] + "、" + rengeResult[1] + "、" + rengeResult[2] + "人格");

            sandy.after('<div><span>"你是不是经常一个人在家斗地主啊？"(¬.¬)</span></div>');

        } else if(rengeResult.length == 4){

            sandy.html("你属于" + rengeResult[0] + "、" + rengeResult[1] + "、" + rengeResult[2] + "、" + rengeResult[3] + "人格");

            sandy.after('<div><span>"天辣，你一个人可以凑一桌麻将啦！"</span></div>');

        } else {

            var content = "你属于";

            /*$.each(function(item) {

                content += item;

            });*/

            for(var j = 0 ; j < rengeResult.length; j++) {
                content += rengeResult[j] + "、";
            }

            content += "人格";

            sandy.html(content);

            sandy.after('<div><span>"听说《24个比利》正在招演员，你要去试试吗？*不知道那是啥的请自行百度"</span></div>');
        }

        if(rengeResult.indexOf(''))

        sandy.show();

    }

    function toggle(t) {
        $(t).children("input").attr("checked", "checked");
        $("li.list-group-item").removeClass('active');
        var score = $(t).children("input:checked").val();
        switch (score) {
            case "a":
                arrScore[0]++;
                break;
            case "b":
                arrScore[1]++;
                break;
            case "c":
                arrScore[2]++;
                break;
            case 'd':
                arrScore[3]++;
                break;
            case 'e':
                arrScore[4]++;
                break;
            case 'f':
                arrScore[5]++;
                break;
            case 'g':
                arrScore[6]++;
                break;
            case 'h':
                arrScore[7]++;
                break;
            case 'i':
                arrScore[8]++;
                break;
        }
        // for(var i = 0 ; i < 9; i++) {
        //     arrScore[i] = 
        // }
        // tScore = parseInt(tScore) + parseInt(score);
        $("#totalsc").val(tScore);
        $(t).addClass('active');
        var t = $("div.js_answer").index($(t).parents("div.js_answer")) + 1;
        if (t == total) {
            //加一个mask
            // 
            $("#pop_success").show();
            $('div#content').addClass('maskPop');
            $('#panel2').hide();
            // setTimeout(function() {

            result(arrScore);
            // }, 2000);

        } else {
            setTimeout(function() {
                next(t);
            }, 500);
        }
    }

    function gotoTop() {
        $("body,html").animate({
            scrollTop: ($("#header").offset().top + $("#header").height())
        }, 1000);
    }

    function d3Render(i, data) {

        window.sandyDataHaha = data;
        var option = {
            "title": {
                "y": "top",
                "x": "center",
                "text": '看看你属于哪一型人格'
            },
            "polar": [{
                "indicator": [{
                    "text": "一型",
                    "max": 4
                }, {
                    "text": "二型",
                    "max": 4
                }, {
                    "text": "三型",
                    "max": 4
                }, {
                    "text": "四型",
                    "max": 4
                }, {
                    "text": "五型",
                    "max": 4
                }, {
                    "text": "六型",
                    "max": 4
                }, {
                    "text": "七型",
                    "max": 4
                }, {
                    "text": "八型",
                    "max": 4
                }, {
                    "text": "九型",
                    "max": 4
                }]
            }],
            "series": [{
                "data": [{
                    "name": "\u4e5d\u578b\u4eba\u683c\u6d4b\u8bd5\uff0836\u9898\uff09",
                    "value": data
                }],
                "type": "radar",
                "name": "\u4e5d\u578b\u4eba\u683c\u6d4b\u8bd5\uff0836\u9898\uff09"
            }],
            "tooltip": {
                "trigger": "axis"
            },
            "calculable": true,
            "toolbox": {
                "feature": {
                    "restore": {
                        "show": true
                    },
                    "dataView": {
                        "readOnly": false,
                        "show": true
                    },
                    "saveAsImage": {
                        "show": true
                    },
                    "mark": {
                        "show": false
                    }
                },
                "show": false
            }
        };

        debugger;

        require.config({
            paths: {
                //echarts: 'http://echarts.baidu.com/build/dist'
                'echarts': './echarts.min',
                'echarts/chart/bar': './echarts.min',
                'echarts/chart/pie': './echarts.min'
            }
        });

        require(
            [
                'echarts',
                'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                $('.js_result').map(function(item) {
                    if ($(this).css('display') != "none") {
                        var surveyChart = $('.js_result').eq(i).find("#survey-chart");
                        var myChart = ec.init(surveyChart[0]);
                        // 为echarts对象加载数据
                        myChart.setOption(option);
                        $("#pop_success").hide();
                        $("div.header").hide();
                        $("div#bd").hide();
                        surveyChart.parent().find('dl').show();
                        rengeDisplay(sandyDataHaha);
                    }
                })

            }
        );
    }
/*});*/





