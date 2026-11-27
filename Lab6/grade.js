// ===== ERRORS FOUND (line numbers refer to the ORIGINAL given code) =====
// Error 1  (grade.html, Line 9):  onsubmit="checkMark()" ignores the false value; must be onsubmit="return checkMark()" so invalid input blocks submission.
// Error 2  (grade.html, Line 17): showtable() is not defined (JavaScript is case-sensitive); must be showTable().
// Error 3  (grade.html, Line 19): script file is grades.js but the file is named grade.js.
// Error 4  (grade.js, Line 5):    name = "" is an assignment; must be name === "" (comparison).
// Error 5  (grade.js, Line 9):    isNan is not a function; must be isNaN.
// Error 6  (grade.js, Line 14):   mark < 0 && mark > 100 can never be true; must use || (OR).
// Error 7  (grade.js, Line 28):   getElementByID does not exist; must be getElementById.
// Error 8  (grade.js, Line 30):   style.colour is not a property; must be style.color.
// Error 9  (grade.js, Line 31):   return true lets the form submit and reload the page, so the result disappears; must be return false.
// Error 10 (grade.js, Line 38):   loop starts at i = 1 so grade "A" is skipped; must start at i = 0.
// Error 11 (grade.js, Line 42):   innerHtml is not a property; must be innerHTML.

function checkMark() {
  let name = document.forms["gradeForm"]["name"].value.trim();
  let mark = document.forms["gradeForm"]["mark"].value;

  // Empty name check
  if (name === "") {
    alert("Name must be filled out.");
    return false;
  }

  // Empty mark check
  if (mark.trim() === "") {
    alert("Mark field cannot be empty.");
    return false;
  }

  // Non-numeric check
  if (isNaN(mark)) {
    alert("Please enter a valid numeric value.");
    return false;
  }

  mark = parseInt(mark, 10);

  // Range check
  if (mark < 0 || mark > 100) {
    alert("Mark must be between 0 and 100.");
    return false;
  }

  // Work out the grade
  let grade;
  if (mark >= 80) {
    grade = "A";
  } else if (mark >= 65) {
    grade = "B";
  } else if (mark >= 50) {
    grade = "C";
  } else {
    grade = "F";
  }

  let result = document.getElementById("result");
  result.innerHTML = name + " got grade " + grade;

  // Colour depends on grade
  if (grade === "A" || grade === "B") {
    result.style.color = "green";
  } else if (grade === "C") {
    result.style.color = "orange";
  } else {
    result.style.color = "red";
  }

  // Show date and time of checking
  document.getElementById("checkedOn").innerHTML = "Checked on: " + Date();

  return false;
}

// Put a random whole number 0-100 in the mark field
function randomMark() {
  document.getElementById("mark").value = Math.floor(Math.random() * 101);
}

function showTable() {
  let grades = ["A", "B", "C", "F"];
  let ranges = ["80-100", "65-79", "50-64", "0-49"];
  let tableHTML = "<table><tr><th>Grade</th><th>Mark range</th></tr>";

  for (let i = 0; i < grades.length; i++) {
    tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
  }

  tableHTML += "</table>";
  document.getElementById("tableContainer").innerHTML = tableHTML;
}