$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type = 'text']").keypress(function(e){
	if(e.which === 13){
		var text = $(this).val();
		$("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + text + "</li>");
	}
});

$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle();
});