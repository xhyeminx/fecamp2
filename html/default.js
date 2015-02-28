jQuery (function($){
	// $는 제이쿼리 
	$(".gnb>button").on("click", function(){
		//$(".gnb>ul").slideToggle(200);
		$(this).next("ul").slideToggle(200);
		// toggle은 닫혀있으면 열어주고 열려있으면 닫히고 
		// this는 button그다음 ul 이라는 뜻.

	});
});