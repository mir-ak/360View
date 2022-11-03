window.addEventListener("load", (event) => main());
window.addEventListener("resize", (event) => reasize());
const reasize = () => {
  console.log("resize", window.innerWidth, window.innerHeight);
};
const main = () => {
  var infospot,
    panorama1,
    panorama2,
    panorama3,
    panorama4,
    panorama5,
    panorama6,
    viewer,
    container;
  container = document.querySelector("#container");
  panorama1 = new PANOLENS.ImagePanorama("../image/360/2020-07-21.jpg");
  panorama2 = new PANOLENS.ImagePanorama("../image/360/2017-03-20.jpg");
  panorama3 = new PANOLENS.ImagePanorama("../image/360/2019-08-08.jpg");
  panorama4 = new PANOLENS.ImagePanorama("../image/360/R0010158.jpg");
  panorama5 = new PANOLENS.ImagePanorama("../image/360/R0010150.jpg");
  panorama6 = new PANOLENS.ImagePanorama("../image/360/2019-05-08.jpg");

  var lookAtPositions = [
    new THREE.Vector3(4871.39, 1088.07, -118.41),
    new THREE.Vector3(5258.81, -405.5, 1571.13),
    new THREE.Vector3(4558.81, 495.5, 3771.13),
    new THREE.Vector3(5871.39, 688.07, -2518.41),
    new THREE.Vector3(-4520, 488.07, -2218.41),
    new THREE.Vector3(-6520, 488.07, 3518.41),
    new THREE.Vector3(-4258.81, 295.5, 3771.13),
    new THREE.Vector3(20, 295.5, -7000),
    new THREE.Vector3(8258.81, 295.5, 5771.13),
    new THREE.Vector3(8258.81, 295.5, 1771.13),
    new THREE.Vector3(3258.81, 195.5, 3771.13),
    new THREE.Vector3(-2471.39, 200.07, 3018.41),
    new THREE.Vector3(300.39, 100.07, 4518.41),
    new THREE.Vector3(-3471.39, 200.07, -2818.41),
    new THREE.Vector3(4471.39, 300.07, -1518.41),
    new THREE.Vector3(5471.39, 300.07, 2018.41),
    new THREE.Vector3(2471.39, 300.07, -4518.41),
  ];

  panorama1.link(panorama2, lookAtPositions[0]);
  panorama2.link(panorama1, lookAtPositions[1]);
  panorama1.link(panorama3, lookAtPositions[2]);
  panorama1.link(panorama4, lookAtPositions[3]);
  panorama1.link(panorama5, lookAtPositions[4]);
  panorama1.link(panorama6, lookAtPositions[5]);
  panorama3.link(panorama1, lookAtPositions[6]);
  panorama3.link(panorama4, lookAtPositions[7]);
  panorama4.link(panorama1, lookAtPositions[8]);
  panorama4.link(panorama3, lookAtPositions[9]);
  panorama4.link(panorama5, lookAtPositions[10]);
  panorama5.link(panorama1, lookAtPositions[11]);
  panorama5.link(panorama4, lookAtPositions[12]);
  panorama5.link(panorama6, lookAtPositions[13]);
  panorama6.link(panorama1, lookAtPositions[14]);
  panorama6.link(panorama3, lookAtPositions[15]);
  panorama6.link(panorama5, lookAtPositions[16]);

  function addInfoSpot (panorama,x,y,z,id,h){
    infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
    infospot.position.set(x, y,z);
    infospot.addHoverElement(document.getElementById(id), h);
    panorama.add(infospot);
  }

  //--------------------------infospot pour le 1er Panorama-------------
  addInfoSpot(panorama1,900,0,-4000,"video",200);
  addInfoSpot(panorama1,50,0,-5000,"image",300);
  addInfoSpot(panorama1,2500,5,-4000,"audio",70);
  //---------------------------------------------------------------------
  
  //--------------------------infospot pour le 2eme Panorama-------------
  addInfoSpot(panorama2,2500, 150, -2700,"video2",150);
  addInfoSpot(panorama2,3000, 10, -500,"image2",170);
  addInfoSpot(panorama2,1900, 500, -6000,"audio2",150);
  //---------------------------------------------------------------------
  
  //--------------------------infospot pour le 3er Panorama-------------
  addInfoSpot(panorama3,9000, 500, 6000,"audio2",150);
  //---------------------------------------------------------------------
  
  // pour tourne
  viewer = new PANOLENS.Viewer({
    output: "console",
    //autoRotate: true,
  });

  viewer.add(panorama1, panorama2, panorama3, panorama4, panorama5, panorama6);
  viewer.addUpdateCallback(function () {});
};
