var counter = 0;
var editRowId;
function appendNewRow(data) {
    var newRow = $("<div>").attr({
        class: "row border",
        id: "row" + counter,
    });
    var cols = "";
    cols += '<div class="c1  col " value=' + data.airline + ' id=a' + counter + '> ' + data.airline + '</div>'
    cols += '<div class="c2 col  " value=' + data.date + ' id=a' + counter + '> ' + data.date + '</div>'
    cols += '<div class="c3  col " value=' + data.country + ' id=a' + counter + '> ' + data.country + '</div>'
    cols += '<div class="c4 col  " value=' + data.city + ' id=a' + counter + '> ' + data.city + '</div>'
    cols += '<div class="c5 col  " value=' + data.price + ' id=a' + counter + '> ' + data.price + '</div>'
    newRow.append(cols);
    $(".container").append(newRow);
    counter++;
}
$("#save").click(function (e) {
    e.preventDefault();
    if (!$("#form1").validationEngine("validate")) {
        return false;
    }
    var data = {
        airline: $("#airline").val(),
        date: $("#date").val(),
        country: $("#country").val(),
        city: $("#city").val(),
        price: $("#price").val(),
    }
    $(".container").show();
    appendNewRow(data);
    $("#form1")[0].reset();
});
$(document).ready(function () {
    $.getJSON("../js/obj.json", function (obj) {
        $.each(obj.airlines, function (key, value) {
            $("#airline").append("<option>" + value.airline + "</option>");
        });
    });
});
jQuery('#price').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g, '');
});