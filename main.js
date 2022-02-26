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
        matn.replace(/(\w)(\w*)/g, (match, g1, g2) => {
            return g1.toUpperCase() + g2.toLowerCase();
        })
}
const toSentence = () => {
    let matn = document.getElementById("idOfText").value;
    matn = matn.toLowerCase();
    document.getElementById('idOfText').value = matn.replace(
        /([a-z])([^.!?]+)/g, (match, g1, g2) => {
            return g1.toUpperCase() + g2;
        });
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
