

function findCombinationsFromText(tagsString) {
    const temp = { Group: [], Category: [], Subcategory: [], Make: [], Model: [], Diagram: [] };
    const orders = [temp.Group, temp.Category, temp.Subcategory, temp.Make, temp.Model, temp.Diagram];

    const specialReg = /[^a-zA-Z0-9_\-]/g;
    const tagReg = /-?([A-Z][a-z]+)_/g;
    const invalidSymbols = /[A-Z][a-zA-Z0-9]*(-[a-zA-Z0-9]+)*/g;

    tagsString = tagsString.replaceAll(specialReg, '');
    const segments = tagsString.split(tagReg).slice(1);

    for (let i = 0, c = segments.length; i < c; i += 2) {
        const tagName = segments[i];
        if (!temp[tagName]) return [];
        if (temp[tagName].length) return [];
        const tag = segments[i + 1].match(invalidSymbols);
        if (tag) {
            temp[tagName].push(tagName + '_' + tag.join('-'));
        }
    }

    const tempItem = [];
    const result = [];
    for (let i = 0; i < orders.length; i++) {
        const tag = orders[i][0];
        if (tag) {
            tempItem.push(tag);
            result.unshift([...tempItem]);
        }
    }
    return result;
}