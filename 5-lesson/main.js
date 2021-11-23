let count = 0

const updateCount = () => {
    const countTag =  document.getElementById("count")
    countTag.innerText = count
}

updateCount()


const plusCount = () => {
    count++;
    updateCount();
}

const minusCount = () => {
    count--;
    updateCount()
}

const twoCount = () => {
    count = count * count;
    updateCount()
}

const threeCount = () => {
    count = count * count * count;
    updateCount()
}

const restart = () => {
    count = 0;
    updateCount()
}

