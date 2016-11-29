$(document).ready(function () {
    function addHistory(code, result) {
        $("#table1 tr:last").after('<tr><td>' + code + '</td><td>' + result + '</td></tr>');
    }

    function getCode(code, data) {
        $(".text-danger").text(data.error);
        $("#result").text(data.data);
        if (data.error === undefined) {
            if ($("#table1 tr").length <= 10) {
                addHistory(code, data.data);
            }
            else {
                $("#table1 tr:eq(1)").remove();
                addHistory(code, data.data);
            }
        }
    }

    $("#inputCode").click(function () {
        $(".text-danger").html("");
        $("#result").html("");
    });
    $(".btn").click(function () {
        let code = $("#inputCode").val();
        if (code === "") {
            alert("Please input code!!");
        }
        else {
            let status = $('input[type="radio"]:checked').val();
            $.get('/' + status + '?code=' + code)
                .done(function (data) {
                    getCode(code, data)
                });
        }
    });
});
