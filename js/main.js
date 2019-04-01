(() => {
	console.log('fired');

	let power = document.querySelectorAll('img'),
		robos = document.querySelectorAll('.robos'),
		sound = document.querySelectorAll('.sound');



	function initDrag() {

		power.forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('dragging');
				e.dataTransfer.setData("text/plain", this.dataset.currenttrack);
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
			console.log('dropped');
			let currentTrack = e.dataTransfer.getData("text/plain");
			let aud=document.createElement("audio");

			aud.src = `music/${currentTrack}`;
			aud.load();
			aud.play();
		});
	});
		

	initDrag();

})();