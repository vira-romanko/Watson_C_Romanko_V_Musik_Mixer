(() => {
	console.log('fired');

	let power = document.querySelectorAll('img'),
		robos = document.querySelectorAll('.robos'),
		sound = document.querySelectorAll('.sound');



	function initDrag() {

		power.forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('dragging');
			});
		});

	}

	robos.forEach(zone => {
		zone.addEventListener('dragover', function(e) {
			e.preventDefault();
			console.log('dragged');
		});

		zone.addEventListener('drop', function(e){
			//e.preventDefault();
			console.log('dropped')
		});
	});
		
	function playAudio() {
		currentTrack = this.dataset.currenttrack;

		aud.src = `music/beat/${currentTrack}`;
		aud.load();
		aud.play();

		};


	initDrag();

})();