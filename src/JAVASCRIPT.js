function toggle_visibility(id_name) {
	var e = document.getElementById(id_name);
	if(e.style.display == 'none')
		e.style.display = 'block';
	else
		e.style.display = 'none';
}