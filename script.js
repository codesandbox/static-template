


let btn  = document.getElementById('icon')
let div  = document.getElementById('hidden-sidebar');

btn.addEventListener('click', () => {
	if(div.style.display === 'none'){
		div.style.display = 'block';
	}
	else{
		div.style.display = 'none'
	}
})





