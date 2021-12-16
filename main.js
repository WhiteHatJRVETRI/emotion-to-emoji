var Predition1=""
var Predition2=""
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})
var camera=document.getElementById("camera")
Webcam.attach('#camera');
function takeshot(){
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">'
    })
}
console.log(ml5.version)
classfier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fi2YYAdja/model.json',modelloaded)
function modelloaded(){
    console.log("modelloaded")
}
function speak(){
    var synth=window.speechSynthesis
    speakdata1=" the first Predition is-"+Predition1
    speakdata2=" the second Predition is-"+Predition2
    var utter=new SpeechSynthesisUtterance(speakdata1+speakdata2)
synth.speak(utter)
}
function check(){
    img=document.getElementById('captured_image')
    classfier.classify(img,gotresult)
}
function gotresult(error,results){
    if (error) {
        console.log(error)
    }else {
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML=results[0].label
        document.getElementById("result_emotion_name2").innerHTML=results[1].label
        Predition1=results[0].label
        Predition2=results[1].label
        speak()
        if (results[0].label=="happy") {
            document.getElementById("update_emoji").innerHTML="😊"
        } if (results[0].label=="sad") {
            document.getElementById("update_emoji").innerHTML="😥"
        }
        if (results[0].label=="angry") {
            document.getElementById("update_emoji").innerHTML="😈"
        }
        if (results[0].label=="crying") {
            document.getElementById("update_emoji").innerHTML="😭"
        }
        if (results[1].label=="happy") {
            document.getElementById("update_emoji2").innerHTML="😊"
        } if (results[1].label=="sad") {
            document.getElementById("update_emoji2").innerHTML="😥"
        }
        if (results[1].label=="angry") {
            document.getElementById("update_emoji2").innerHTML="😈"
        }
        if (results[1].label=="crying") {
            document.getElementById("update_emoji2").innerHTML="😭"
        }

    }
}
