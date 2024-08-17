function getElementWidth(content, padding, border) {

    const totalContent = parseFloat(content);
    const totalPadding = parseFloat(padding) * 2;
    const totalBorder = parseFloat(border) * 2;

    const totalWidth = totalContent + totalPadding + totalBorder;

    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

console.log("------------------------------------------");