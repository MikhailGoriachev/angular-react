var countTask14 = 5;
function initTask14() {
    var items = [];
    for (var i = 0; i < countTask14; i++)
        items[i] = new MathModel(getInt(10, 21), getInt(10, 21));
    var n = 1;
    document.getElementById("tbodyId").innerHTML =
        items.reduce(function (prev, cur) { return prev +
            "<tr>\n                <td>".concat(n++, "</td>\n                <td>").concat(cur.a.toFixed(5), "</td>\n                <td>").concat(cur.b.toFixed(5), "</td>                \n                <td>").concat(cur.z1v14().toFixed(5), "</td>\n                <td>").concat(cur.z2v14().toFixed(5), "</td>\n            </tr>"); }, "");
    console.log(document.getElementById("tbodyId").innerHTML);
}
window.addEventListener("load", initTask14);
//# sourceMappingURL=task14.js.map