var data = [
    { id: 2, name: "Alex2" },
    { id: 3, name: "Alex3" },
    { id: 1, name: "Alex1" },
    { id: 5, name: "Alex5" },
    { id: 4, name: "Alex4" }
];
var sort = function (data, type) {
    if (type === void 0) { type = 'asc'; }
    return data.sort(function (a, b) {
        switch (type) {
            case "asc":
                return a.id - b.id;
            case "desc":
                return b.id - a.id;
        }
    });
};
console.log(sort(data));
console.log(sort(data, "desc"));
