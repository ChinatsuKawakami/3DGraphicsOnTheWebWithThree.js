/*
Author : Engine Arslan
Editor&Learner : Chinatsu Kawakami
Download Date: 2017-09-13
Latest Edit: 2017-09-13
Description : This is the main.js file to add functions for creating 3D Graphics with Three.js
Path :\Exercise Files\chapter-01\01_03\begin\main.js
*/

//console.log(THREE);

//Camera Properties provides Four Options 
//1. Field of view
//2. Aspect ratio
//3. Near clipping plane
//4. Far clipping plane


function init()
{
   //scene object 
   var scene = new THREE.Scene();
   //
   var camera = new THREE.PerspectiveCamera(
	45,//1. Field of view( how much of the scene that we are seeing)
	window.innerWidth/window.innerHeight,//2. Aspect ratio
	1,//3. Near clipping plane
	1000//4. Far clipping plane
	);

   var renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth,window.innerHeight);
   document.getElementById('webgl').appendChild(renderer.domElement);
   renderer.render(
	 scene,
	 camera
	);
}

init();