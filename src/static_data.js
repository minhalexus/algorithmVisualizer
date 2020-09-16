export const bubbleSortContent = 
` // Bubble Sort
let tempArray = JSON.parse(JSON.stringify(data)); // Perform a deep copy of state variable
for (let sortedElements = 0; sortedElements < tempArray.length; sortedElements++){
    // right most (highest value) elements get sorted first
    for (let i = 0; i < tempArray.length - sortedElements; i++){ 
        let considered = i+1;
        if (tempArray[i] > tempArray[considered]){
            let temp = tempArray[i];
            tempArray[i] = tempArray[considered];
            tempArray[considered] = temp;
        }
    }
}`;

export const selectionSortContent = 
`// Selection Sort
let tempArray = JSON.parse(JSON.stringify(data)); // Performing a deep copy of the current data
for (let index = 0; index < tempArray.length; index++) {
    // left most elements (smallest values) get sorted first unlike Bubble Sort
    for (let i = index; i < tempArray.length; i++) {
        if (tempArray[index] > tempArray[i]) {
            let temp = tempArray[index];
            tempArray[index] = tempArray[i];
            tempArray[i] = temp;
        }
    }
}`