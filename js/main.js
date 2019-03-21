(() => {
	console.log('fired');

	let powerB = document.querySelectorAll('#powerBeat');
	let powerE = document.querySelectorAll('#powerEffect');
	let powerM = document.querySelectorAll('#powerMelody');
	let powerIcon = document.querySelectorAll('#power')

	let roboBeat = document.querySelectorAll('#robotOne');
	let roboEffect = document.querySelectorAll('#robotTwo');
	let roboMelody = document.querySelectorAll('#robotThree')
	let roboZone = document.querySelectorAll('#robots')

	function powerDrop() {


		powerIcon.querySelectorAll('#power').forEach(img => {
			img.addEventListener("dragstart", function(e) {
			});
		});

		initDrag();

	}

	function initDrag() {

		roboZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged over me!');

		});


		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped somethin on me');


		currentTrack = this.dataset.currenttrack;

		aud.src = `music/beat/${currentTrack}`;
		aud.load();
		aud.play();
	});
})();