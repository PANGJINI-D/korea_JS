// 형변환(명시적 형변환, 암시적 형변환)

// 🧡명시적 형변환
// 숫자로 변환
// 문자열 -> 숫자
console.log(Number("123"));     //123
console.log(Number("123.45"));  //123.45
console.log(Number(""));        //0
console.log(Number(" "));       //0
console.log(Number("abc"));     //NaN

// Boolean -> 숫자
console.log(Number(true));      //1
console.log(Number(false));     //0

// undefined | null -> 숫자
console.log(Number(undefined)); //NaN
console.log(Number(null));      //O


// 문자열로 변환 / 불린으로 변환


//🧡암시적(묵시적) 형변환
// 숫자와 문자열 더하기 연산
console.log(1 + "2", typeof(1+"2"));    //12 string
console.log("3" + 4+ 5, typeof("3" + 4+ 5));    //345 string
console.log(1+2+"3", typeof(1+2+"3"));  //33 string

// 산술 연산
console.log("5"-3);     // 2
                        // 문자열 5가 숫자 5로 변환되어 산술연산된다 (덧셈은 안됨, 나누기/곱셈 연산 가능)
console.log("3px" - 1); // NaN
console.log("5" * "2"); // 10                        
console.log(10 + NaN);  // NaN


// 불리언 숫자의 연산
console.log(true + 1);  // 2
                        // true가 1로 변환
console.log(10 + false);//10


//