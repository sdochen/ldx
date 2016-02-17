// 文件名称: tpls
//
// 创 建 人: chenshy
// 创建日期: 2016/2/15 11:18
// 描    述: tpls
var introTpl = "<div class='mz-intro'>" +
    "<div class='mz-thimg'></div>" +
    "<div class='mz-thtitle'>" +
    "<div class='mz-thtitle-txt'>恭子的微信时光书</div>" +
    "</div>" +
    "</div>";

var page2Tpl = "<div class='mz-page2'>" +
        "<div class='mz-page2-left'>" +
        "<img class='mz-page2-icon' src='images/mz/IMG_2273.JPG'>" +
    "<div class='mz-page2-txt' >恭子/著</div>" +
    "</div>" +
    "</div>";

var page3Tpl = "<div class='mz-page3'>" +
        "<div class='mz-page3-txt1'>恭子的微信时光书</div>" +
    "<div class='mz-page3-txt2'>恭子&nbsp;&nbsp;&nbsp;&nbsp;著</div>" +
    "</div>";

var pageTpl = "<div class='mz-page'>" +
        "<div class='mz-page-header-date'>##pageYearDay</div>" +
    "<div class='mz-page-header-title'>恭子的微信时光书</div>" +
        "<img class='mz-page-header-line' src='images/skin/line.png'>" +
        "<div class='mz-page-container'></div>" +
        "<div class='##pageNumber'>##pageNo</div>" +
    "</div>";

var timeTpl = "<div style='position: absolute;'>" +
        "<img src='images/skin/c.png' width='30' height='30'>" +
        "<span class='mz-page-day'>##pageDay</span>"+
    "<span class='mz-page-time'>##pageTime</span>"+
    "</div>";

var monthColors = [
    "#FFB6C1",//1
    "#B0C4DE",//2
    "#FFFFE0",//3
    "#cccccc",//4
    "#00FFFF",//5
    "#FFC0CB",//6
    "#B0C4DE",//7
    "#2E8B57",//8
    "#800080",//9
    "#FFA500",//10
    "#cccccc",//11
    "#00008B"//12
];

var monthWord = [
    "壹",
    "贰",
    "叁",
    "肆",
    "伍",
    "陆",
    "柒",
    "捌",
    "玖",
    "拾",
    "拾壹",
    "拾贰"
];

var monthEnWord = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

var monthTpl = "<div class='mz-page-year'>" +
        "<span class='mz-m-year'>##pageYear</span>" +
        "<div class='mz-m-month'>##pageMonth</div>" +
        "<div class='mz-m-enmonth'>##pageEnMonth</div>" +
    "</div>";