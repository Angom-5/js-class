//REGULAR EXPRESSIONS(REGEX)
//Used to find patterns in text
// It's syntax is /text/

/*Character set. this is used when you have two or more text with a similar part but some differences. eg
* ninja and binja; just but b and n in a character set ie. /[nb]inja/
*/// note the characters after the fist set is important and used when getting the matches.

// Excluding set. things we don't want to match.
//[^net]work
// it makes anything starting with n,e,t followed by work
//[^abc] any character except a, b or c

//NOTE: That the character set[] is only for one character so if you wanted to determine the set of other characters you have to repeat the set eg;
//[ck][lr][ert] etc.
//BUT!! There's an easier way....[0-9]+, [a-z]+
// this make it repeat infinite times,
// but that may not be exactly what we need hence we use {} to determine how many
//  Example: When getting a phone number
/[0 - 9]{10}/ //..this means repeat it 10 times
//You can als use it for a word, that is;
/[a - z]{5}/ //which means a five lettered word

//if we want a range for a the range of characters we can say;
/[0 - 9]{3,8}/
/[a - z]{4,5}/

//now if you want at least 5 characters use;
/[0 - 9]{5,}/
/[a - z]{5,}/

//Character Ranges
//[abc] looks for any lowercase character starting with a,b or c
//[a-z] looks for any lowercase character starting with a,b or c
//[0-9] any digits from 0-9 just likw \d

//NOTE: If your thing start with caps then the thing will look until it finds a lowercase
const regex = /[abc]/; 
const result = regex.exec("hell nah girl!");

//NOTE: This thing is case sensitive.
//Also if you want the thing to match both upper case and lower; [a-zA-Z], It will include everything.

//MetaCharacters. These are special and always starts with \
// 1. \d matches any digits characters. Same as [0-9]
// 2. \w matches any word characters ie; (a-z, A-Z, 0-9, _'s)
// 3. \s matches a whitespace character (spaces, tabs, etc)
// 4. \t matches a tab character only


// You can fuse them eg.\w\s meaning a word character and a whitespace
//you can even dictate how many times it repeats eg; \w(5)\s

//Special Characters
//1. + it means it should appear one-or-more times
//2. \ it means escape
//3. [] it's used to character set
//4. [^] it's the negate symbol in a character set...aka, except
//5. ? it is the 0 or 1 quantifier. means the thing it is after can appear either once or zero times
//6. . matches any character whatsoever
//7. * 0 or more quantifier. same as the + but with those terms
// now if you put ^ in front of the character set ie. ^[a-z] it means that the thing should be at the beginning
//8. $ this means that the character set before it should be at the end

//So now if you want to strictly write a five lettered word;
/^ [a - z]{ 5 } $/

//9. | means or. it chooses either of the options not both eg.
/[m|c]are/ //...not [m|care]...cause this will match either m or care, not both

// if you want your regex expression to capture more than one pattern, you have to use a global flag, and it comes after the // eg.
let regex1 = /[a-z]/g
// if you want it to not be case sensitive then use i ie
let regex2 = /[a-z]/i
//you can do both
let regex3 = /[a-z]/gi  // the order doesn't matter


//CREATE A REGEX   
// there are two ways to create a regex
//1. 
    let regex4 = /[a-z]/g

//2.
let regex5 = new RegExp(/[a-z]/, "gi");    
    
//Now the way you use these regex is in dictating input eg. in a login page
//let's say your login page has eail, telephome, username. You have to add event listeners so as to notice the input and dictate it
const inputs = document.querySelectorAll("input"); //use this to listen to all input elements
// But you can't just say input.addEventListener to it cause it's a combinatin hence you must use a forEach() loop.

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {    //keyup tell the computer when a key on the keyboard is being pressed hence it listens to what kind of key that is
        // console.log(e).target.attribute.name.value        // target= for identifying the element, attribute=the attribute for that element, name=the nme and the value
validate (e.target, patterns[e.target.attribute.name.value])

    })
})

const patterns = {
    telephone: /^[0-9]{10}$/,
    username: /^ [a - z\d{ 5, 12}]$/i,
        password:/^[\w@_-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    //emails have 3/4 parts; (yourname)@
email:

    
}

//now we have to test our thing to see that its valide. We use a function
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }   // the way to test a regex is by regex.test(value of whatever you are testing)
}







//const regex = /(\w+)\s(\w+)/; nte that to state regex things you must put them between //
//const result= regex.exec("Hello world!");
//exec prints out exactly what you are looking for

const regex = /c.t/;
const result= regex.exec("cat");
const result2= regex.test("cat");
//this just affirms that something is between the two characters

//when its returning it brings an array which consists of the [wanted thing, the index number of where the thing starts from within the string, the string and whether it's in a defined group or not]
/**
 * 
 * regarding the string "i have a cat", it'll bring back the ["i ", index=0,"i have a cat", group: undefined]
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













