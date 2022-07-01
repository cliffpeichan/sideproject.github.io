window.addEventListener('scroll', function(){
	console.log(window.pageYOffset);
});



new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
	scrollHorizontally: true,
	scrollBar: true,
	onLeave: function (origin, destination, direction, trigger) {
		let header = document.querySelectorAll('.hide-header');
		let p = document.querySelectorAll('.hide-p');
		let btn = document.querySelectorAll('.hide-btn');
		let arrow = document.querySelectorAll('.hide-arrow');
		setTimeout(() => {
			header.forEach(el => {
				el.classList.add('show')
			})
		}, "300");

		setTimeout(() => {
			p.forEach(el => {
				el.classList.add('show')
			})
			btn.forEach(el =>{
				el.classList.add('show')
			})
		}, "900");

		setTimeout(() => {
			arrow.forEach(el =>{
				el.classList.add('show')
			})
		}, "1300");
	},

	beforeLeave: function(origin, destination, direction, trigger){
		let header = document.querySelectorAll('.hide-header');
		let p = document.querySelectorAll('.hide-p');
		let btn = document.querySelectorAll('.hide-btn');
		let arrow = document.querySelectorAll('.hide-arrow');

		setTimeout(() => {
			header.forEach(el => {
				el.classList.remove('show')
			})
		}, "150");

		setTimeout(() => {
			p.forEach(el => {
				el.classList.remove('show')
			})
			btn.forEach(el =>{
				el.classList.remove('show')
			})
		}, "150");

		setTimeout(() => {
			arrow.forEach(el =>{
				el.classList.remove('show')
			})
		}, "150");
		
	}
});


document.addEventListener("DOMContentLoaded", function () {
	let fadein1 = document.querySelector('#fadein1');
	console.log(fadein1);
	fadein1.classList.add('fadeinanimation');

	setTimeout(() => {
		let delays = document.querySelectorAll('.delay-load');
		delays.forEach(el => {
			el.classList.add('active')
		})
	}, 600)

	setTimeout(() => {
		let delays = document.querySelectorAll('.after-delay-load');
		delays.forEach(el => {
			el.classList.add('active')
		})
	}, 1000)
});

