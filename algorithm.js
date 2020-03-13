// CHALLENGE 1 : reverse a string

//e.g reverseString('hello') = 'olleh'


const reverseString = (str) => {
    return str.split('').reverse().join('')
};

// console.log(reverseString('hello'));


//CHALLENGE 2 : longest word
// eg longestWord('hello, may name is yewbdar') === 'yewbdar'

const longestWord = (sen) => {
    //get only character
    let wordChar= sen.match(/[a-z0-9]+/g);

    wordChar.sort((a,b) => b.length - a.length);

    let longestWord;
    longestWord = wordChar.filter(item => item.length === wordChar[0].length);

    if(longestWord.length === 1){
        return wordChar[0];

    }else {
        return longestWord;
    }
    // console.log(longestWord)
};


//CHALLENGE 3 : PALINDROME
// eg : isPaledrome('racecar') === 'true'

const isPaledrome = ( str) =>{

   let newStr= str.split('').reverse().join('');

  return newStr === str

}

// CHALLENGE 4 : REVERSE AN INTEGER

const reverseInt = (num) => {
     let newNum =  num.toString().split('').reverse().join('');

     return parseInt(newNum) * Math.sign(num)
}

//CHALLENGE 5 : CAPITALIZE LETTERS

// eg capitalizeLatter('i love you') = I Love You

const capitalizeLatter = (str) => {
    let newStr = str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    return newStr
}


//CHALLENGE 6 : get two num that give the sum of target
var twoSum = function(nums, target) {
    let newArry=[]
    nums.forEach((num,numIndex) => {
        let diff = target - num
        if(diff > 0 && diff < target){
            let diffIndex = nums.indexOf(diff);
            if(diffIndex >= 0 ){
                newArry.push(num);
                newArry.push(nums[diffIndex]);
                nums.splice(diffIndex);
                nums.splice(numIndex)
            }
        }
    })
    return newArry;
};

console.log(twoSum([1,2,7,5,6],7));



