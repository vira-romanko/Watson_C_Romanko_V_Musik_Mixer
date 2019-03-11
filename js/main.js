(() => {
	console.log('fired');

	let power = document.querySelectorAll('#power');


	function powerDrop() {
		
		initDrag();

		powerBeat.querySelectorAll('#power').forEach(img => {
			img.addEventListener("dragstart", function(e) {
			});
		});

		currentTrack = this.dataset.currenttrack;

		aud.src = `music/beat/${currentTrack}`;
		aud.load();
		aud.play();
	}

	})();