// intro page//
$("#myVideo").on("click", show => {
    $("#myVideo").addClass('hide');
    $("#intro").addClass('hide');
    $("#masthead").removeClass('hide');
    $("#main-container").removeClass('hide');
    $("#sec-section").removeClass('hide');
    $("#form-container").removeClass('hide');
})

$("#logo").on("click", hide => {
    $("#myVideo").removeClass('hide');
    $("#intro").removeClass('hide');
    $("#masthead").addClass('hide');
    $("#main-container").addClass('hide');
    $("#sec-section").addClass('hide');
    $("#form-container").addClass('hide');
})
