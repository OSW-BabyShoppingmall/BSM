var xxx="";

$(document).ready(function () {
    $(".open_basket").click(function () {
        $("#basket").toggle("slow");
    });
});

var product_data=[
    ["../warm.img/cloth1_1.png",".cloth1_1","1"],
    ["../warm.img/cloth1.png",".cloth1_2","2"],
    ["../warm.img/cloth2.png",".cloth1_3","3"],
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
    $(".cloth1_2").change(function () {
        if ($(".cloth1_2").is(":checked")) {
            append(".cloth1",1);
        } else {
            remove(".cloth1");
        }
    });
    $(".cloth1_3").change(function () {
        if ($(".cloth1_3").is(":checked")) {
            append(".cloth1",2);
        } else {
            remove(".cloth1");
        }
    });
});


function append(name,n){
    $(name).append("<tr><td><img src="+product_data[n][0]+"></td>"+
    "<td><p>"+product_data[n][1]+"</p></td>"+
    "<td><p class='price'>"+product_data[n][2]+"</p></td>"+
    "<td><p class='result'>1</p><button onclick='add("+n+")'>up</button>"+
    "<button onclick='minus("+n+")'>down</button></td></tr>"
    );
}

function remove(){
    $("tr:last").remove();
}

function add(n){
    var x=document.getElementsByClassName("result");
    var y=document.getElementsByClassName("price");
    x[n].innerHTML = Number(x[n].innerHTML)+1;
    y[n].innerHTML=Number(y[n].innerHTML)+Number(product_data[n][2]);
    alert(y[n].innerHTML);
}

function minus(n){
    var x=document.getElementsByClassName("result");
    var y=document.getElementsByClassName("price");
    x[n].innerHTML = Number(x[n].innerHTML)-1;
    y[n].innerHTML=Number(y[n].innerHTML)-Number(product_data[n][2]);
    alert(x[n].innerHTML);
}