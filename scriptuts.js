const txtElement = ['Introvert', 'iNtuitive', 'Feeling','Judging'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length) {
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

setTimeout(ngetik, 500);

function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

document.getElementById("tombolTampilkan1").addEventListener("click", function() {
    toggleVisibility("tulisanSembunyi1");
});

document.getElementById("tombolTampilkan2").addEventListener("click", function() {
    toggleVisibility("tulisanSembunyi2");
});
})();
