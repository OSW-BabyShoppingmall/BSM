var xxx="";

$(document).ready(function () {
    $(".open_basket").click(function () {
        $("#basket").toggle("slow");
    });
});

var product_data=[
    ["../warm.img/cloth1_1.png",".cloth1_1","0"],
    ["../warm.img/cloth1.png",".cloth1_2","0"],
    ["cloth1_2","2"],
]

//호출한 태그의 클래스값 저장
function get(n){
    //var x = $(n).attr('class');
    var x =n.className;
    xxx="."+x;
    alert(xxx);
}

$(document).ready(function () {   
    $(".cloth1_1").change(function () {
        if ($(".cloth1_1").is(":checked")) {
            append(".cloth1",0);
        } else {
            remove(".cloth1");
        }
    });
});
$(document).ready(function () {   
    $(".cloth1_2").change(function () {
        if ($(".cloth1_2").is(":checked")) {
            append(".cloth1",1);
        } else {
            remove(".cloth1");
        }
    });
});

function append(name,n){
    $(name).append("<tr><td><img src="+product_data[n][0]+"></td>"+
    "<td><p>"+product_data[n][1]+"</p></td>"+
    "<td><p>"+product_data[n][2]+"</p></td>"+
    "<td><p class='result'>0</p><button onclick='add()'>up</button>"+"<button>down</button></td></tr>"
    );
}

function remove(){
    $("tr:last").remove();
}

function add(){
    var x=document.getElementsByClassName('result');
    x[0].innerHTML+1;
}