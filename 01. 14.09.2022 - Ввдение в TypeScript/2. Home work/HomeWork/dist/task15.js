var countTask15 = 5;
function initTask15() {
    var items = [];
    for (var i = 0; i < countTask15; i++)
        items[i] = new MathModel(getInt(10, 21), getInt(10, 21));
    var n = 1;
    document.getElementById("tbodyId").innerHTML =
        items.reduce(function (prev, cur) { return prev +
            "<tr>\n                <td>".concat(n++, "</td>\n                <td>").concat(cur.a.toFixed(5), "</td>\n                <td>").concat(cur.b.toFixed(5), "</td>                \n                <td>").concat(cur.z1v15().toFixed(5), "</td>\n                <td>").concat(cur.z2v15().toFixed(5), "</td>\n            </tr>"); }, "");
}
window.addEventListener("load", initTask15);
//# sourceMappingURL=task15.js.map