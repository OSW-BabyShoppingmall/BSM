$(document).ready(function () {
    $(".open_basket").click(function () {
        $("#basket").toggle("slow");
    });
});

var product_data=[
    ["../warm.img/cloth1_1.png",".cloth1_1","0"],
    ["cloth1_1","1"],
    ["cloth1_2","2"],
]

$(document).ready(function () {
    $(".cloth1_1").change(function () {
        if ($(".cloth1_1").is(":checked")) {
            append(".cloth1");
        } else {
            remove(".cloth1");
        }
    });
});

function append(name){
    $(name).append("<tr><td><img src="+product_data[0][0]+"></td>"+
    "<td><p>"+product_data[0][1]+"</p></td>"+
    "<td><p>"+product_data[0][2]+"</p></td></tr>");
}
function remove(name){
    $("tr:last").remove();
}