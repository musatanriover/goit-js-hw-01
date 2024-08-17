function getElementWidth(content, padding, border) {

    const convertContent = parseFloat(content);
    const convertPadding = parseFloat(padding) * 2;
    const convertBorder = parseFloat(border) * 2;

    const totalWidth = convertContent + convertPadding + convertBorder;

    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

console.log("------------------------------------------");