Webcam.set({
    width:350, height:300, image_format:"png", png_quality:90
});
camera = document.getElementById("camera")
Webcam.attach("camera")
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'new_img' src = '"+data_uri+"'>";
    });
}
console.log("ml5 version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yBRIbyYPv/model.json", modelloaded)
function modelloaded(){
    console.log("model is loaded")
}