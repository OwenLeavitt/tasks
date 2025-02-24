/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newNumbers: number[] = [];
    if (numbers.length > 0) {
        newNumbers.push(numbers[0]);
        newNumbers.push(numbers[numbers.length - 1]);
    }
    return newNumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripledNums = numbers.map((num: number): number => num * 3);
    return tripledNums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let numList = numbers.map((x: string): number =>
        isNaN(parseInt(x)) ? 0 : parseInt(x),
    );
    return numList;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let numList = amounts.map((x: string): number =>
        isNaN(parseInt(x.replace("$", ""))) ? 0 : parseInt(x.replace("$", "")),
    );
    return numList;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newList = messages.map((x: string): string =>
        x.endsWith("!") ? x.toUpperCase() : x,
    );
    newList = newList.filter((x: string): boolean => !x.endsWith("?"));
    return newList;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let newList = words.filter((x: string): boolean => x.length < 4);
    let wordlen = newList.length;
    return wordlen;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let newList = colors.filter(
        (x: string): boolean => x === "red" || x === "blue" || x === "green",
    );
    if (newList.length === colors.length) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        let finalString = addends
            .reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0,
            )
            .toString();
        finalString = finalString + "=";
        finalString = finalString + addends.toString();
        finalString = finalString.replace(/,/g, "+");
        return finalString;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let negIndex = values.findIndex((value: number): boolean => value < 0);
    let newList = [...values];
    console.log(negIndex);
    if (values.length === 0) {
        return [0];
    } else if (negIndex === -1) {
        let sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        newList.splice(newList.length, 0, sum);
        return newList;
    } else {
        let sum = values
            .slice(0, negIndex)
            .reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0,
            );
        newList.splice(negIndex + 1, 0, sum);
        return newList;
    }
}
