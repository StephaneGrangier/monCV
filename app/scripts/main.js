console.log('\'Allo \'Allo!');


$(document).ready(function(){
$('a').smoothScroll();


var progress = $(".progress");
//var jqueryProgress = progress.children();
progress.each(function(index, element){
	
	var canevas = $('<canvas id="myChart' + index + '" width="100" height="100"></canvas>');	
	$(element).replaceWith(canevas);
	
	var valeurPourcent = $(element).children().attr('aria-valuenow');
	
	// Doughnut chart
	var data = [
    {
        value: valeurPourcent,
        color:"#379659",
        highlight: "#15F406",
        label: "know"
    },
    {
        value: 100 - valeurPourcent,
        color: "#FFFFFF",
        highlight: "#5AD3D1",
        label: "-"
    }
]

var option = [
    {
		percentageInnerCutout : 25
	}
]

var ctx = canevas[0].getContext("2d");
var myDoughnutChart = new Chart(ctx).Doughnut(data, option);

}
);





//pbar = jqueryProgress.find('.progress-bar').attr('arai-valuenow');
//nouveauDiv = $('<div></div>'





});




