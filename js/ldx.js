// 文件名称: ldx
//
// 创 建 人: chenshy
// 创建日期: 2016/2/15 19:36
// 描    述: ldx

var lastMonth = -1;
var dataIndex = 0;
var maxY = 0;

function getDatas(page){
    var newArr = [];

    for(var i = 0;i < ldxData.length;i++){
        var data = ldxData[i];
        if(data.pageNO === page){
            newArr.push(data);
        }
    }

    //newArr = newArr.sort(function(d1,d2){
    //    var date1 = new Date(d1.date);
    //    var date2 = new Date(d2.date);
    //    return date1 > date2;
    //});
    return newArr;
}

function createPage(page,pageElement){
    //return;

    var newDatas = getDatas(page);

    var data;
    if(newDatas.length > 0){
        if(newDatas.length == 1){
            data = newDatas[0];
            if(data.intro){
                createMonthPage(data,pageElement);
                pageElement.find('.loader').remove();
                return;
            }
        }

        var cls = "mz-page-num-left";
        if(page % 2 === 0){
            cls = "mz-page-num-right";
        }

        var date = getDate(newDatas[0].date);

        var tpl = pageTpl.replace("##pageNumber",cls);
        tpl = tpl.replace("##pageYearDay",date.getFullYear() + "年" + (date.getMonth() + 1) + "月");

        tpl = tpl.replace("##pageNo",getNumStr(page - 4));
        var intro = $(tpl);
        var container = intro.find(".mz-page-container");

        //var h = data.h || 300;
        for(var j = 0;j < newDatas.length;j++){
            var f = createFra(newDatas[j]);
            container.append(f);
        }
        intro.appendTo(pageElement);
    }

    //var data = datas[dataIndex];
    //if(!data){
    //    return;
    //}
    //
    ////console.log(data,dataIndex);
    //var date = getDate(data.date);
    //
    ////var month = date.getMonth();
    //var maxH = 0;
    //maxY = 0;
    //
    //if(date.getMonth() !== lastMonth){
    //    lastMonth = date.getMonth();
    //    createMonthPage(date,pageElement);
    //}else{
    //
    //    var cls = "mz-page-num-left";
    //    if(page % 2 === 0){
    //        cls = "mz-page-num-right";
    //    }
    //
    //    var tpl = pageTpl.replace("##pageNumber",cls);
    //    tpl = tpl.replace("##pageYearDay",date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
    //
    //    tpl = tpl.replace("##pageNo",getNumStr(page - 4));
    //    var intro = $(tpl);
    //    var container = intro.find(".mz-page-container");
    //
    //    var h = data.h || 300;
    //    while(maxH + h <= 600 && date.getMonth() === lastMonth){
    //        maxH += h;
    //        //console.log("GG",page);
    //        var d = createFra(data);
    //        maxY = maxH;
    //        container.append(d);
    //
    //        lastMonth = date.getMonth();
    //
    //        dataIndex++;
    //        data = datas[dataIndex];
    //        if(data){
    //            date = getDate(data.date);
    //        }else{
    //            break;
    //        }
    //    }
    //    intro.appendTo(pageElement);
    //    //dataIndex++;
    //}
    //
    ////if(page == 5){
    ////    var d = $(monthTpl);
    ////    var y = d.find(".mz-page-year");
    ////    d.css({background:monthColors[0]});
    ////    d.appendTo(pageElement);
    ////}else{
    ////    var cls = "mz-page-num-left";
    ////    if(page % 2 === 0){
    ////        cls = "mz-page-num-right";
    ////    }
    ////
    ////    var tpl = pageTpl.replace("##pageNumber",cls);
    ////
    ////    tpl = tpl.replace("##pageNo",getNumStr(page - 4));
    ////
    ////    var intro = $(tpl);
    ////
    ////    var time = $(timeTpl);
    ////
    ////    var container = intro.find(".mz-page-container");
    ////
    ////    time.appendTo(container);
    ////
    ////    intro.appendTo(pageElement);
    ////}
    //////console.log(introTpl);
    pageElement.find('.loader').remove();



}

function createFra(data){
    var dof = document.createElement("div");
    var dofStyle = dof.style;
    dofStyle.position = "absolute";
    dofStyle.width = "100%";
    dofStyle.top = data.y + "px";
    dof.className = "mz-frag";

    var date = getDate(data.date);
    var tmTpl = timeTpl.replace("##pageDay",getNumStr(date.getDate()));
    tmTpl = tmTpl.replace("##pageTime",data.date.split(" ")[1]);

    var time = $(tmTpl);

    if(date.timeLabel){
        time.css({
            left : data.timeLabel.x + 'px',
            top  : data.timeLabel.y + 'px'
        });
    }



    time.appendTo(dof);
    data.txtPos = data.txtPos || {x:0,y:0};

    var text = data.text;
    var images = data.images;
    if(text){
        var span = document.createElement("span");
        span.innerHTML = text;
        span.style.position = "absolute";
        span.style.left = data.txtPos.x + "px";
        span.style.top = data.txtPos.y + "px";
        dof.appendChild(span);
    }
    if(images && images.length){
        for(var i = 0;i < images.length;i++){
            var imgObj = images[i];
            var dom;

            var src = imgObj.src;
            var w = imgObj.w;
            var h = imgObj.h;
            var x = imgObj.x;
            var y = imgObj.y;

            if(imgObj.tag === 'div'){
                dom = document.createElement("div");
                dom.style.backgroundImage = "url('"+imgObj.src+"')";
                dom.style.width = w + "px";
                dom.style.height = h + "px";
                dom.style.left = x + "px";
                dom.style.top = y + "px";
                dom.style.backgroundSize = "cover";
            }else{
                dom = document.createElement("img");
                dom.src = src;
                dom.width = w;
                dom.height = h;
                dom.style.left = x + "px";
                dom.style.top  = y + "px";

            }
            dom.style.position = "absolute";
            dof.appendChild(dom);
        }
    }

    return dof;
}



function createMonthPage(data,pageElement){

    var date = getDate(data.date);

    var month = date.getMonth();
    var year = date.getFullYear();
    //console.log(date.getFullYear());

    var tpl = monthTpl.replace("##pageYear",year);
    tpl = tpl.replace("##pageMonth",monthWord[month] + "月");
    tpl = tpl.replace("##pageEnMonth",monthEnWord[month]);
    var d = $(tpl);
    var y = d.find(".mz-page-year");
    d.css({background:monthColors[month]});
    d.appendTo(pageElement);
}

function getNumStr(num){
    if(num < 10){
        return '0' + num;
    }
    return num;
}