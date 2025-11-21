
/*Falsy Values (only 8 in JS)

These always behave like false in conditions or logical operators:

false

0

-0

0n (BigInt zero)

"" (empty string)

null

undefined

NaN */

/*Truthy Values

Examples:

"hello"

"0" (string zero → truthy)

[] (empty array → truthy)

{} (empty object → truthy)

42

true

🔥 How || Works

a || b → returns first truthy value, otherwise the last value.

Examples:
console.log(0 || 1);         // 1
console.log("" || "Hello");  // Hello
console.log(null || 5);      // 5
console.log("Hi" || 0);      // Hi
console.log([] || "Test");   // [] (empty array is truthy)

🔥 How && Works

a && b → returns first falsy value, otherwise the last value.

Examples:
console.log(1 && 2);         // 2  (both truthy → return last)
console.log(0 && 5);         // 0  (first falsy)
console.log("hello" && 10);  // 10
console.log("" && "Hi");     // "" (empty string is falsy)

⭐ Combining both
console.log(0 || 1 && 2);


Step-by-step:

1 && 2 → 2

0 || 2 → 2

Final output:

2 */