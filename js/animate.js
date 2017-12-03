//our custom javascript
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.4, 3000 );

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
		
		var geometry = new THREE.BoxGeometry( 1, 5, 1 );
		var material = new THREE.MeshBasicMaterial( { color: 0xE69138 } );
		var rectangle = new THREE.Mesh( geometry, material );
		scene.add( rectangle );


		camera.position.z = 5;
		//Rendering the scene
		function animate() {
			requestAnimationFrame( animate );
			rectangle.rotation.x += 0.0;
			rectangle.rotation.y += 0.2;
			renderer.render( scene, camera );
		}
		animate();