/*
Author : Engine Arslan
Editor&Learner : Chinatsu Kawakami
Download Date: 2017-09-13
Latest Edit: 2017-09-14
Description : This is the main.js file to add functions for creating 3D Graphics with Three.js
*/


function init() {
	var scene = new THREE.Scene();
    
    var box = getBox(1,1,1);

    scene.add(box);
	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);
	camera.position.x = 1;
	camera.position.y = 2;
	camera.position.z = 5;
    
    camera.lookAt(new THRiEE.Vector3(0,0,0));

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('webgl').appendChild(renderer.domElement);
	renderer.render(
		scene,
		camera 
	);
}

function getBox(w,h,d){
	var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial({
    	color:0x00ff00
    });
    var mesh = new THREE.Mesh(
    	geometry,
    	material
    	);

    return mesh;
}

init();