export const bubbleSortContent = `let tempArray = JSON.parse(JSON.stringify(data));
for (let sortedElements = 0; sortedElements < tempArray.length; sortedElements++){
    for (let i = 0; i < tempArray.length - sortedElements; i++){
        let considered = i+1;
        if (tempArray[i] > tempArray[considered]){
            let temp = tempArray[i];
            tempArray[i] = tempArray[considered];
            tempArray[considered] = temp;
            // console.log(tempArray);
        }
    }
    // console.log(tempArray);
}`;