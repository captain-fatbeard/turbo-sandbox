/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true, // Use single quotes instead of double quotes
  semi: false, // Omit semicolons at the end of statements
  tabWidth: 2, // Set the number of spaces per indentation level
  trailingComma: 'es5', // Print trailing commas wherever possible in ES5 (objects, arrays, etc.)
  bracketSpacing: true, // Print spaces between brackets in object literals
  printWidth: 150, // Specify the line length that the printer will wrap on
  endOfLine: 'lf', // Use line feed only (\n) as the line ending
}
