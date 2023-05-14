const data = [
    {id: 2, name: "Alex2"},
    {id: 3, name: "Alex3"},
    {id: 1, name: "Alex1"},
    {id: 5, name: "Alex5"},
    {id: 4, name: "Alex4"}
]

interface ID {
    id: number
}

const sort = <T extends ID>(data: T[], type: 'asc' | "desc" = 'asc'): T[] => {
    return data.sort((a, b) => {
        switch (type) {
            case "asc":
                return a.id - b.id
            case "desc":
                return b.id - a.id
        }
    })
}

console.log(sort(data))
console.log(sort(data, "desc"))