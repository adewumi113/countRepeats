// /https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061/train/javascript
/* Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
 */

function countRepeats (str){
    let repeatRemoval = 0 //initial count for removal
    for (let i = 1; i < str.length; i++){ //begin loopin through the string from second character to compare to the first one
        if(str[i] === str[i - 1]){ //if current character is the same as the character before, increase repeat count
            repeatRemoval++
        }
    }
    return repeatRemoval
}

countRepeats ('abbbbc')  //'abc'
countRepeats ('abbcca')  //'abca'
countRepeats ('ab cca')  //'ab ca'