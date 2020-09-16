import React, { useState } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import shuffle from 'lodash.shuffle';
import './SortingPage.css';
import Button from '@material-ui/core/Button';



function SortingPage({ sortType='selection' }) {
    const [data, setData] = useState([25, 3, 1, 5, 8, 2, 16]);
    const [completed, setCompleted] = useState([]);
    const [selected, setSelected] = useState([]);
    const [considered, setConsidered] = useState([]);
    const shuffleList = (e) => {
        e.stopPropagation();
        setCompleted([]);
        setData(shuffle(data));
    };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const bubbleSort = async (event) => {
        event.stopPropagation();
        let tempArray = JSON.parse(JSON.stringify(data));
        console.log(tempArray);

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
        }

        console.log(tempArray);
    }

    const selectionSort = async (event) => {
        event.stopPropagation();
        // setData([ 3, 25, 1, 6, 7, 2, 16]);

        let tempArray = JSON.parse(JSON.stringify(data));
        setCompleted([]);
        setSelected([0]);
        for (let index = 0; index < tempArray.length; index++) {
            setSelected([index]);
            await(sleep(250));
            for (let i = index; i < tempArray.length; i++) {
                setConsidered([i]);
                await sleep(250);
                if (tempArray[index] > tempArray[i]) {
                    let temp = tempArray[index];
                    tempArray[index] = tempArray[i];
                    tempArray[i] = temp;
                    setData(JSON.parse(JSON.stringify(tempArray)));
                    console.log(tempArray);
                    await sleep(350);
                }
                // console.log(data);
            }
            setCompleted(oldArray => [...oldArray, index]);
        }
        setSelected([]);
        setConsidered([]);
        setCompleted([]);
        // setData(tempArray);
        // console.log(tempArray);
    }

    const handleBorder = (value, index) => {
        if (selected.includes(index)) {
            return (
                <div onClick={e => e.stopPropagation()} className='sortingPage__itemSelected'>
                    {value}
                </div>
            )
        }

        if (considered.includes(index)){
            return (
                <div onClick={e => e.stopPropagation()} className='sortingPage__itemConsidered'>
                    {value}
                </div>
            )
        }

        if (completed.includes(index)){
            return (
                <div className='sortingPage__itemCompleted'>
                    {value}
                </div>
            )
        }

        return (
            <div onClick={e => e.stopPropagation()} className='sortingPage__item'>
                {value}
            </div>
        )
    }

    function chooseSort(event){
        if (sortType == 'Bubble'){
            bubbleSort(event);
        }
        else{
            selectionSort(event);
        }
    }

    return (
        <div className="sortingPage">
            <Flipper flipKey={data.join('')}>
                <div className="sortingPage__buttons">
                    <Button variant="contained" color="default" onClick={chooseSort}>{sortType} Sort </Button>
                    <Button variant="contained" color="secondary" onClick={shuffleList}>Shuffle</Button>
                </div>
                
                <div className="sortingPage__list">
                    {data.map((currElement, index) => (
                        <Flipped key={currElement} flipId={currElement}>
                            {handleBorder(currElement, index)}
                            {/* <div className={(selected == index) ? 'sortingPage__itemSelected' : 'sortingPage__item'}>
                                {currElement}
                            </div> */}
                        </Flipped>

                    ))}
                </div>
            </Flipper>
        </div>
    )
}

export default SortingPage
