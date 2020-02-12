function superFeature(target) {
	var arrayStr = ["мама", "папа", "брат"],
		newArrayStr = [];

	newArrayStr = arrayStr.map(function(str) {
		var newElement = '',
			tempStr = str.replace(/(.)(?=.*\1)/ug, "");

		if (tempStr.length) {
			newElement = tempStr;
		} else {
			newElement = str;
		}

		return newElement;
	});

	target.setAttribute('value', newArrayStr.join(', '));
}

function phoneOpen(event) {
	document.getElementsByClassName('info__element_phone-open-button')[0].classList.add('info__element_phone-open-button-hidden');
}
