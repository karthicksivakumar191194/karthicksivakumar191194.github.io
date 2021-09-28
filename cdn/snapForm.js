console.clear();

_.extend(dragula, {
	clone_id: 1,
	setCloneId: function (el) {
		el.setAttribute('data-clone-id', this.clone_id++);
	}
});

//Dragging ROW COMPONENT to EDITOR
var drake = dragula([
	document.querySelector("#components"),
	document.querySelector("#editor")
], {
	copy: function (el, source) {
		return source.id == 'components';
	},
	accepts: function (el, target, source, sibling) {
		return target.id != 'components';
	}
}).on('drop', function (el) {
	d.containers.push(el)
	//When dropping ROW COMPONENT to EDITOR empty the DIV
	if (!el.className.includes("activeComponent")) {
		el.innerText = "";
	}
	el.className += ' activeComponent';
});

drake.on('cloned', function (clone, original, type) {
	if (type == 'copy') {
		dragula.setCloneId(clone);
	}
});

//Dragging FIELD COMPONENT into ROW COMPONENT
var d = dragula([
	document.querySelector("#field-components"),
	document.querySelector("#editor .row-component")
], {
	copy: function (el, source) {
		return source.id == 'field-components';
	},
	accepts: function (el, target, source, sibling) {
		return true;
	}
}).on('drop', function (el, target, source, sibling) {
	const cloneID = el.getAttribute("data-clone-id");
	const dataType = el.getAttribute("data-type");

	if (!el.className.includes("activeFieldComponent")) {
		const sibilingElements = el.parentElement.innerHTML;
		if (dataType === "short-answer") {
			el.parentElement.innerHTML = sibilingElements + '<div class="drg component short-answer drg-one-column activeFieldComponent" data-clone-id="' + cloneID + '"><label>Untitled</label><input type="text" /><div class="field-actions"><span class="column-minus"><i class="fa fa-minus" aria-hidden="true"></i></span><span class="column-plus"><i class="fa fa-plus" aria-hidden="true"></i></span><span><i class="fa fa-pencil" aria-hidden="true"></i></span><span><i class="fa fa-trash-o" aria-hidden="true"></i></span></div></div>';
		}
		if (dataType === "paragraph") {
			el.parentElement.innerHTML = sibilingElements + '<div class="drg component pragraph drg-one-column activeFieldComponent" data-clone-id="' + cloneID + '"><label>Untitled</label><textarea style="resize: none;"></textarea><div class="field-actions"><span class="column-minus"><i class="fa fa-minus" aria-hidden="true"></i></span><span class="column-plus"><i class="fa fa-plus" aria-hidden="true"></i></span><span><i class="fa fa-pencil" aria-hidden="true"></i></span><span><i class="fa fa-trash-o" aria-hidden="true"></i></span></div></div>';
		}

		//Remove the original element(dragged from left) - to avoid duplication
		document.querySelector('.gu-transit ') ? document.querySelector('.gu-transit ').remove() : "";
	}
});

d.on('cloned', function (clone, original, type) {
	if (type == 'copy') {
		dragula.setCloneId(clone);
	}
});

document.body.addEventListener('click', function (event) {
	if (event.srcElement.parentElement.className == 'column-minus') {
		const classNames = event.srcElement.parentElement.parentElement.parentElement.className;
		if (event.srcElement.parentElement.parentElement.parentElement.className.includes("drg-one-column")) {
			event.srcElement.parentElement.parentElement.parentElement.className = classNames.replace("drg-one-column", "drg-two-column");
		} else if (event.srcElement.parentElement.parentElement.parentElement.className.includes("drg-two-column")) {
			event.srcElement.parentElement.parentElement.parentElement.className = classNames.replace("drg-two-column", "drg-three-column");
		}
	};
	if (event.srcElement.parentElement.className == 'column-plus') {
		const classNames = event.srcElement.parentElement.parentElement.parentElement.className;
		if (event.srcElement.parentElement.parentElement.parentElement.className.includes("drg-three-column")) {
			event.srcElement.parentElement.parentElement.parentElement.className = classNames.replace("drg-three-column", "drg-two-column");
		} else if (event.srcElement.parentElement.parentElement.parentElement.className.includes("drg-two-column")) {
			event.srcElement.parentElement.parentElement.parentElement.className = classNames.replace("drg-two-column", "drg-one-column");
		}
	};
});