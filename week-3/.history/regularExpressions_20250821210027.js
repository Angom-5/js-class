//REGULAR EXPRESSIONS(REGEX)
//Used to find patterns in text
// It's syntax is /text/

/Character set. this is used when you have two or more text with a similar part but some differences. eg











//const regex = /(\w+)\s(\w+)/; nte that to state regex things you must put them between //
//const result= regex.exec("Hello world!");
//exec prints out exactly what you are looking for

const regex = /c.t/;
const result= regex.exec("cat");
const result2= regex.test("cat");
//this just affirms that something is between the two characters

//when its returning it brings an array which consists of the [wanted thing, the index number of where the thing starts from within the string, the string and whether it's in a defined group or not]
/**
 * \d returns the digits in the text
 * \w returns the strings
 * \s returns spaces in the text
 * You can fuse them eg.\w\s regarding the string "i have a cat", it'll bring back the ["i ", index=0,"i have a cat", group: undefined]
 * If you use \w+ it brings a word with more than one character
 * ^ this looks at the beginning of the string at validates if what you have asked for r the pattern is the same.
 *eg
*/ const regex = /^he/;
const result3 = regex.exec("hell nah girl!");

// $ matches the end of the string. works the same as the ^
// * matches 0 or occurrences in the string matching the wanted pattern eg.
 const regex2 = /he*g/; // is there a pattern like he that comes before g anywhere in our string? that's what it means
const result4 = regex.exec("hell nah girl!");
// + returns at least 1 occurence in the string
//same as * but more strict because in * it'll bring back g if there's nothing whilefor + it'll bring an empty thing.

// ? matches 0 or occurrences in the string matching the wanted pattern eg.
 const regex2 = /e*g/; 
const result4 = regex.exec("heell nah girl!");
//it'll bring the index as 3 not 2 because this e is closest to the g

// | represents or like in logical operators..anyway it looks for either this or that eg.
const regex2 = /hell|girl/; 
const result4 = regex.exec("hell nah girl!");

//Character Classes
//[abc] looks for any lowercase character starting with a,b or c
//[a-z] looks for any lowercase character starting with a,b or c
//[0-9] any digits from 0-9 just likw \d
//[^abc] any character except a, b or c

//NOTE: If your thing start with caps then the thing will look until it finds a lowercase
const regex2 = /[abc]/; 
const result4 = regex.exec("hell nah girl!");


//Capture Groups
// use () to capture groups eg. (\w+)\s(\w+); you'll capture two words with a space between them
// You can even name them by;((?<name>\w+)\s(?<name>\w+))
const regex2 = /(?<firtWord>\w+)\s(?<secondWord>\w+)/; 
const result4 = regex.exec("hell nah girl!");

//Quantifiers
//specify the number of a times a group/ character should appear
//{n} This is used when you want to specify the number of characters you want eg
const regex2 = /\w{4}/;  //or \d{5} 
const result4 = regex.exec("hell nah girl!");
// brings four word characters but as for the \d it'll return null showing that there're aren't any
//ALSO if you put more or less n than what is in the text, it'll bring null

//{n,m} brings a range eg. {2,6}
// It brings anything in the range of 2-6 but not more or less

//{n,} brings at least of the stated digits eg. {2,}
// t'll bring 123, 1234, 12, etc

//Escape special characters













