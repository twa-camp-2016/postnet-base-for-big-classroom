'use strict';
$(document).ready(function () {
    function addHistory(code, result) {
        $("#table1 tr:last").after('<tr><td>' + code + '</td><td>' + result + '</td></tr>');
    }

    function getCode(code, data) {
        $("#result").text(data.data);
        if ($("#table1 tr").length <= 10) {
            addHistory(code, data.data);
        }
        else {
            $("#table1 tr:eq(1)").remove();
            addHistory(code, data.data);
        }
    }

    function clearResult() {
        $(".text-danger").html("");
        $("#result").html("");
    }

    function sendRequest() {
        let code = $("#inputCode").val();
        let status = $('input[type="radio"]:checked').val();
        if (code === "") {
            alert("Please input code!!");
        }
        else {
            $.get('/' + status + '?code=' + code)
                .done(function (data) {
                    getCode(code, data)
                })
                .fail(function (data) {
                    $(".text-danger").text(data.error);
                })
        }
    }
    $("#inputCode").click(clearResult);
    $(".btn").click(sendRequest);
});
