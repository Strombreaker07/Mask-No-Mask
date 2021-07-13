function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jVeafG2oF/model.json",modelLoaded);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function draw()
{
    image(video,0,0,300,300);
    classifier.classify(video, prediction);
}

function prediction( error, results)
{
    if(error)
    {
        console.error(error);
    }
    else if(results[0].label == "wearing_mask")
    {
        console.log(results);
        document.getElementById("result_person").innerHTML = "Wearing Mask";
        document.getElementById("result_accuracy").innerHTML = "Allowed";
    }
    else
    {
        console.log(results);
        document.getElementById("result_person").innerHTML = "Not wearing Mask";
        document.getElementById("result_accuracy").innerHTML = "Denied";
    }
}