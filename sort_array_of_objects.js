// Create a function that takes an array of objects with a name property and sorts the objects alphabetically
// based on their name property.

const arr = [
  { id: 1, name: "a" },
  { id: 5, name: "e" },
  { id: 2, name: "b" },
  { id: 4, name: "d" },
  { id: 6, name: "f" },
  { id: 3, name: "c" },
];

function sortArrayByName(objects) {
  objects.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return objects;
}

console.log(sortArrayByName(arr));
