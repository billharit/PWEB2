$(document).ready(function () {
    $("#addButton").click(function () {
        var inserted = $("#bookTitle").val();

        if(inserted == ""){
            return;
        } else {
            $("#bookList").append(new Option(inserted, inserted));
        }
    });
});