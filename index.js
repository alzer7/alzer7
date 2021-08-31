const toUpper = () => {
    let matn = document.getElementById("idOfText").value;
    document.getElementById("idOfText").value = matn.toUpperCase();
}
const toLower = () => {
    let matn = document.getElementById("idOfText").value;
    document.getElementById("idOfText").value = matn.toLowerCase();
}
const toProper = () => {
    let matn = document.getElementById("idOfText").value;
    document.getElementById("idOfText").value =
        matn.split(' ').map((word) =>
            word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
const toSentence = () => {
    let matn = document.getElementById("idOfText").value;
    let arrParagraph = matn.split('\n');
    for (let i = 0; i < arrParagraph.length; i++) {
        let arrSentences = arrParagraph[i].split('. ');
        for (let j = 0; j < arrSentences.length; j++) {
            if (arrSentences[j] !== '') {
                arrSentences[j] = arrSentences[j][0].toUpperCase()
                    + arrSentences[j].slice(1).toLowerCase();
                console.log(arrSentences[j]);
            }
        }
        arrParagraph[i] = arrSentences.join('. ');
    }
    arrParagraph = arrParagraph.join('\n');

    document.getElementById('idOfText').value =
        arrParagraph;
}

function download() {
    let filename = "text.txt";
    let text = document.getElementById("idOfText").value
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
