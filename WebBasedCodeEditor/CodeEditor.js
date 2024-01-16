function execute() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML =
        htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}
const displayNum = () => {
    let language = "html";
    const textarea = document.getElementById("html-code");
    const lineEle = document.getElementById("line-num-html");

    const lines = textarea.value.split('\n');
    lineEle.innerHTML = Array.from({ length: lines.length }, (value, index) => {
        `<div class="num">${index + 1}</div><br/>`
    }).join("");
};
displayNum();
