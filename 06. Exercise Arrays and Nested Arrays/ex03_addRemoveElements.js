function addRemoveElements(array) {
    let res = [];
    let iterator = 1;
    array.forEach((command) => {
        command === "add" ? res.push(iterator) : res.pop();
        iterator++;
    });
    res.length > 0 ? console.log(res.join("\n")) : console.log("Empty");
}

addRemoveElements(['add', 'add', 'add', 'add']);
// 1
// 2
// 3
// 4

addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
// 1
// 4
// 5

addRemoveElements(['remove', 'remove', 'remove']);
// Empty
