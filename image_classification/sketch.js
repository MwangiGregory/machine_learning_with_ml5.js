let robin;

function imageReady() {
    image(robin, 0, 0, width, height);
}

function modelReady() {
    console.log('Model is ready!!!');
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        let label = results[0].label;
        let confidence = results[0].confidence;

        createP(label);
        createP(confidence);
    }
}

function setup() {
    createCanvas(400, 400);
    background(0);

    robin = createImg('images/robin.png', imageReady);
    robin.hide();

    mobilenet = ml5.imageClassifier('MobileNet', modelReady);

    mobilenet.predict(robin, gotResults);
}