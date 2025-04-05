// Bubble Sort
function bubbleSort(arr, ascending = true) {
    let operations = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            operations++;
            if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // обмін
            }
        }
    }
    console.log(`Bubble Sort completed with ${operations} comparisons and swaps.`);
    return arr;
}

// Selection Sort
function selectionSort(arr, ascending = true) {
    let operations = 0;
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            operations++;
            if ((ascending && arr[j] < arr[minIndex]) || (!ascending && arr[j] > arr[minIndex])) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // обмін
    }
    console.log(`Selection Sort completed with ${operations} comparisons and swaps.`);
    return arr;
}

// Insertion Sort
function insertionSort(arr, ascending = true) {
    let operations = 0;
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && ((ascending && arr[j] > current) || (!ascending && arr[j] < current))) {
            operations++;
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    console.log(`Insertion Sort completed with ${operations} comparisons and swaps.`);
    return arr;
}

// Shell Sort
function shellSort(arr, ascending = true) {
    let operations = 0;
    let gap = Math.floor(arr.length / 2);
    while (gap > 0) {
        for (let i = gap; i < arr.length; i++) {
            let current = arr[i];
            let j = i;
            while (j >= gap && ((ascending && arr[j - gap] > current) || (!ascending && arr[j - gap] < current))) {
                operations++;
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = current;
        }
        gap = Math.floor(gap / 2);
    }
    console.log(`Shell Sort completed with ${operations} comparisons and swaps.`);
    return arr;
}

// Quick Sort
function quickSort(arr, ascending = true) {
    let operations = 0;
    function partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            operations++;
            if ((ascending && arr[j] < pivot) || (!ascending && arr[j] > pivot)) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }
    
    function sort(arr, low, high) {
        if (low < high) {
            let pi = partition(arr, low, high);
            sort(arr, low, pi - 1);
            sort(arr, pi + 1, high);
        }
    }
    
    sort(arr, 0, arr.length - 1);
    console.log(`Quick Sort completed with ${operations} comparisons and swaps.`);
    return arr;
}

// Expose the sorting functions
module.exports = { bubbleSort, selectionSort, insertionSort, shellSort, quickSort };
