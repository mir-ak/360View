window.addEventListener("load",event =>main());
window.addEventListener("resize",event =>reasize());
const reasize = () =>{
    console.log("resize",window.innerWidth,window.innerHeight)
}
const main =()=>{

var infospot, infospot2, panorama, panorama2, viewer, container, video, image, audio, video2, image2, audio2;
container = document.querySelector('#container')
panorama = new PANOLENS.ImagePanorama('../image/360/R0010150.jpg');
panorama2 = new PANOLENS.ImagePanorama('../image/360/2019-05-08.jpg');

var lookAtPositions = [
    new THREE.Vector3(4871.39, 1088.07, -118.41),
    new THREE.Vector3(1278.27, 732.65, 4769.19)
  ];
  
var infospotPositions = [
    new THREE.Vector3(3136.06, 1216.30, -3690.14),
    new THREE.Vector3(3258.81, -295.50, 3771.13)
];
  

panorama.addEventListener( 'entre', function(){
    viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );

panorama2.addEventListener('return',function(){
    viewer.tweenControlCenter( infospotPositions[1], 0 );
});

panorama.link( panorama2, lookAtPositions[0] );
panorama2.link( panorama, infospotPositions[1] );

//--------------------------infospot pour le 1er Panorama-------------
infospot = new PANOLENS.Infospot(300,PANOLENS.DataImage.Info)
infospot.position.set(900,0,-4000)
infospot.addHoverElement( document.getElementById('video'), 200 );
panorama.add(infospot) 

infospot = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infospot.addHoverElement( document.getElementById('image'), 300 );
infospot.position.set( 50, 0, -5000);
panorama.add(infospot);

infospot = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infospot.addHoverElement( document.getElementById('audio'), 70 );
infospot.position.set( 2500, 5, -4000);
panorama.add(infospot);
//---------------------------------------------------------------------

//--------------------------infospot pour le 2eme Panorama-------------
infospot2 = new PANOLENS.Infospot(300,PANOLENS.DataImage.Info)
infospot2.position.set(2500,150,-2700)
infospot2.addHoverElement( document.getElementById('video2'), 150 );
panorama2.add(infospot2) 

infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infospot2.addHoverElement( document.getElementById('image2'), 170 );
infospot2.position.set( 3000, 10, -500);
panorama2.add(infospot2);

infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infospot2.addHoverElement( document.getElementById('audio2'), 150 );
infospot2.position.set( 1900, 500, -6000);
panorama2.add(infospot2);
//---------------------------------------------------------------------




// pour tourne 
viewer = new PANOLENS.Viewer({
    output:'console',
    //autoRotate: true,
});


    
    
viewer.add(panorama,panorama2);
viewer.addUpdateCallback(function(){
    
});


}
