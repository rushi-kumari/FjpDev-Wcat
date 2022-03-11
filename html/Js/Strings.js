//strings
//it is seq of characters
var str= "hello RushiKumari"
console.log(str);
console.log(str.length);
console.log(str[4]);


//1.Extraction method
    //a)slice method
    //slice(start index, end index) includes start index and excludes end index

    let slicestr = str.slice(2,7);

    console.log(slicestr);
    console.log(str);// original soucrce is not harmed
    let newstr = str.slice(5); // given index to end string is stored here
    console.log(newstr);
    console.log(str.slice(1,-2));// 1 se start kro end k 2 index chor do


    //b)subString method
    //str.sbustr(start, length of string needed)
    let ans = str.substr(2,6);
    console.log(ans);// prints string fron idex = 2 and continues to extract length upto length 6 from index=2;
    console.log(str);

    //replacing
    str = "yolo";

    //change letter case
    console.log(str.toLowerCase());
    console.log(str.toUpperCase());


    //concationation
    let first = "hello guys";
    let last = "u r smat"
    let concatstr = first + last;
    console.log(concatstr);

    let strcon = first.concat(last, "and me too");
    console.log(strcon);


    //trim method: removes all spaces from starting and ending of string
    let trimidx = "         hello girl     ";
    console.log(trimidx.length());
    console.log(trimidx.trim().length());


