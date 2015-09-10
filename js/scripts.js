var countBy = function(number1, number2) {
    var numbers = [];
    for (var index = number2; index <= number1; index = number2 + index) {
        numbers.push(index);
    }
    return numbers;
};


$(document).ready(function() {
    $("form#countby").submit(function(event){
        var number1 = parseInt($("input#number1").val());
        var number2 = parseInt($("input#number2").val());
        var result = countBy(number1, number2);

        $(".output").text(result.join(", "));

        $("#result").show();
        event.preventDefault();
    });
});
