$(function(){	
	$('input').keyup(function() {
	    $('#target').html(translate($(this).val()));
	});

	var hypebeast = function(text){
		var result = "";
		for (var i = 0; i < text.length; i++) {
			if(text[i] == "-") {result = result + "<img class=\"image\" src=\"supreme.png\">";}
			else if(text[i] == ".") {result = result + "<img class=\"image\" src=\"bape.png\">";}
			else if(text[i] == "|") {result = result + "<span class=\"separator\">* </span>";}
			else if(text[i] == "+") {result = result + "<span class=\"separator\">.</span>";}
		}
		return result;
	}

	var morse = {
		"a": ".-",
		"b": "-...",
		"c": "-.-.",
		"d": "-..",
		"e": ".",
		"f": "..-.",
		"g": "--.",
		"h": "....",
		"i": "..",
		"j": ".---",
		"k": "-.-",
		"l": ".-..",
		"m": "--",
		"n": "-.",
		"o": "---",
		"p": ".--.",
		"q": "--.-",
		"r": ".-.",
		"s": "...",
		"t": "-",
		"u": "..-",
		"v": "...-",
		"w": ".--",
		"x": "-..-",
		"y": "-.--",
		"z": "--..",
		"1": ".----",
		"2": "..---",
		"3": "...--",
		"4": "....-",
		"5": ".....",
		"6": "-....",
		"7": "--...",
		"8": "---..",
		"9": "----.",
		"0": "-----",
		".": ".-.-.-",
		",": "--..--",
		"?": "..--..",
		"'": ".----.",
		"!": "-.-.--",
		"/": "-..-.",
		":": "---...",
		";": "-.-.-.",
		"=": "-...-",
		"+": ".-.-.",
		"-": "-....-",
		"_": "..--.-",
		"\"": ".-..-.",
		"@": ".--.-.",
		" ": "|"
	};

	var translate = function(text){
		var result = "";
		for(var i=0; i<text.length; i++){
			if(text.toLowerCase().charAt(i)==" ") {
				result = result + morse[text.toLowerCase().charAt(i)];
			} else if(!(text.toLowerCase().charAt(i) in morse)){
				result = result;
			} else {
				result = result + "+" + morse[text.toLowerCase().charAt(i)];
			}
		}
		return hypebeast(result);
	}
});