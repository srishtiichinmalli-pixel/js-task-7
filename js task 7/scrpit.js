// Helper Function to display output nicely in styled boxes
function renderCard(containerId, taskNumber, title, outputHtml) {
  const container = document.getElementById(containerId);
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-header">Task ${taskNumber}: ${title}</div>
    <div class="card-body" id="task-${taskNumber}-body">${outputHtml}</div>
  `;
  container.appendChild(card);
}

// Shared Employee Data used across tasks
const employees = [
  { name: "Rahul", salary: 180000 },
  { name: "Priya", salary: 250000 },
  { name: "Amit", salary: 300000 },
  { name: "Sneha", salary: 450000 },
  { name: "Vikas", salary: 150000 }
];

// Helper to render simple tables
function makeTable(headers, rows) {
  let html = '<table><thead><tr>';
  headers.forEach(h => html += `<th>${h}</th>`);
  html += '</tr></thead><tbody>';
  rows.forEach(row => {
    html += '<tr>';
    row.forEach(cell => html += `<td>${cell}</td>`);
    html += '</tr>';
  });
  html += '</tbody></table>';
  return html;
}

// ==========================================
// PART 1: Array Higher-Order Methods
// ==========================================

// 1. forEach()
const nums1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let out1 = '<table><thead><tr><th>Index</th><th>Number</th></tr></thead><tbody>';
nums1.forEach((num, index) => {
  out1 += `<tr><td>${index}</td><td>${num}</td></tr>`;
});
out1 += '</tbody></table>';
renderCard('part1', 1, 'forEach() - Print Numbers', out1);

// 2. map()
const nums2 = [2, 4, 6, 8, 10];
const multiplied = nums2.map(n => n * 5);
renderCard('part1', 2, 'map() - Multiply by 5', 
  `Original: <span class="code-text">${nums2.join(', ')}</span><br>Result: <span class="code-text">${multiplied.join(', ')}</span>`);

// 3. filter()
const nums3 = [5, 12, 25, 8, 30, 18, 45, 3];
const greaterThan20 = nums3.filter(n => n > 20);
renderCard('part1', 3, 'filter() - Numbers > 20', 
  `Original: <span class="code-text">${nums3.join(', ')}</span><br>Filtered: <span class="code-text">${greaterThan20.join(', ')}</span>`);

// 4. Employee Salary Filter (<= 300,000)
const lowSalaryEmp = employees.filter(emp => emp.salary <= 300000);
const lowSalaryRows = lowSalaryEmp.map(e => [e.name, `₹${e.salary.toLocaleString('en-IN')}`]);
renderCard('part1', 4, 'filter() - Employees (Salary ≤ ₹3,00,000)', makeTable(['Name', 'Salary'], lowSalaryRows));

// 5. find() (> 200,000)
const firstHighEmp = employees.find(emp => emp.salary > 200000);
renderCard('part1', 5, 'find() - First Employee (Salary > ₹2,00,000)', 
  `<b>Name:</b> ${firstHighEmp.name}<br><b>Salary:</b> ₹${firstHighEmp.salary.toLocaleString('en-IN')}`);

// 6. reduce() - Total
const nums6 = [10, 20, 30, 40, 50];
const total = nums6.reduce((acc, curr) => acc + curr, 0);
renderCard('part1', 6, 'reduce() - Sum of Numbers', 
  `Numbers: <span class="code-text">${nums6.join(', ')}</span><br><b>Total Sum:</b> ${total}`);

// 7. some() - Check even
const nums7 = [1, 3, 5, 8, 9];
const hasEven = nums7.some(n => n % 2 === 0);
renderCard('part1', 7, 'some() - At Least One Even Number', 
  `Numbers: <span class="code-text">${nums7.join(', ')}</span><br><b>Has Even:</b> ${hasEven}`);

// 8. every() - Greater than 0
const nums8 = [4, 15, 2, 98, 11];
const allPositive = nums8.every(n => n > 0);
renderCard('part1', 8, 'every() - All Numbers > 0', 
  `Numbers: <span class="code-text">${nums8.join(', ')}</span><br><b>All > 0:</b> ${allPositive}`);

// 9. sort() - Ascending
const nums9 = [40, 100, 1, 5, 25, 10];
const sortedAsc = [...nums9].sort((a, b) => a - b);
renderCard('part1', 9, 'sort() - Ascending Order', 
  `Original: <span class="code-text">${nums9.join(', ')}</span><br>Sorted: <span class="code-text">${sortedAsc.join(', ')}</span>`);

// 10. sort() - Descending
const nums10 = [40, 100, 1, 5, 25, 10];
const sortedDesc = [...nums10].sort((a, b) => b - a);
renderCard('part1', 10, 'sort() - Descending Order', 
  `Original: <span class="code-text">${nums10.join(', ')}</span><br>Sorted: <span class="code-text">${sortedDesc.join(', ')}</span>`);


// ==========================================
// PART 2: String Methods
// ==========================================

// 11. charAt()
const str11 = "javascript";
renderCard('part2', 11, 'charAt()', `String: "javascript"<br>Character at index 4: <b>'${str11.charAt(4)}'</b>`);

// 12. charCodeAt()
renderCard('part2', 12, 'charCodeAt()', `String: "javascript"<br>Character code at index 2 ('v'): <b>${str11.charCodeAt(2)}</b>`);

// 13. trim()
const str13 = "   Hello World!   ";
renderCard('part2', 13, 'trim()', `Original: "<span class="code-text">${str13}</span>"<br>Trimmed: "<span class="code-text">${str13.trim()}</span>"`);

// 14. uppercase / lowercase
const str14 = "JavaScript";
renderCard('part2', 14, 'toUpperCase / toLowerCase', 
  `Original: ${str14}<br>Uppercase: <b>${str14.toUpperCase()}</b><br>Lowercase: <b>${str14.toLowerCase()}</b>`);

// 15. includes()
const str15 = "javascript developer";
renderCard('part2', 15, 'includes()', `String: "${str15}"<br>Contains "script"? <b>${str15.includes('script')}</b>`);

// 16. startsWith() / endsWith()
const str16 = "JavaScript";
renderCard('part2', 16, 'startsWith / endsWith', 
  `String: "${str16}"<br>Starts with "Java"? <b>${str16.startsWith("Java")}</b><br>Ends with "Script"? <b>${str16.endsWith("Script")}</b>`);

// 17. replaceAll()
const str17 = "java is cool, I like java!";
renderCard('part2', 17, 'replaceAll()', 
  `Original: "${str17}"<br>Replaced: <b>"${str17.replaceAll("java", "python")}"</b>`);

// 18. split()
const str18 = "html-css-javascript-react";
const arr18 = str18.split("-");
renderCard('part2', 18, 'split()', `Original: "${str18}"<br>Array Output: <span class="code-text">[ ${arr18.map(s => `"${s}"`).join(', ')} ]</span>`);

// 19. join()
const names19 = ["Alice", "Bob", "Charlie", "David"];
renderCard('part2', 19, 'join()', `Array: [ ${names19.join(', ')} ]<br>Joined String: <b>"${names19.join(', ')}"` + '</b>');

// 20. slice()
const str20 = "Web Development";
renderCard('part2', 20, 'slice()', `Original: "${str20}"<br>Extracted slice(4, 15): <b>"${str20.slice(4, 15)}"</b>`);


// ==========================================
// PART 3: Date Methods
// ==========================================

const now = new Date();

// 21. Current year, month, date, day
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
renderCard('part3', 21, 'Current Year, Month, Date, Day', 
  makeTable(['Property', 'Value'], [
    ['Year (getFullYear)', now.getFullYear()],
    ['Month (getMonth - 0 based)', now.getMonth()],
    ['Date (getDate)', now.getDate()],
    ['Day (getDay)', `${now.getDay()} (${days[now.getDay()]})`]
  ]));

// 22. Month name array
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
renderCard('part3', 22, 'Current Month Name', `Current Month Index: ${now.getMonth()}<br>Month Name: <b>${monthNames[now.getMonth()]}</b>`);

// 23. Hours, Minutes, Seconds
renderCard('part3', 23, 'Current Time', 
  `<b>${now.getHours()}</b> Hours : <b>${now.getMinutes()}</b> Minutes : <b>${now.getSeconds()}</b> Seconds`);

// 24. Date Setters
const customDate = new Date();
customDate.setFullYear(2003);
customDate.setMonth(0); // 0 = January
customDate.setDate(30);
renderCard('part3', 24, 'Date Setters (Year: 2003, Month: Jan, Date: 30)', 
  `Updated Date Object: <b>${customDate.toDateString()}</b>`);


// ==========================================
// PART 4: Asynchronous JavaScript
// ==========================================

// 25. setTimeout
renderCard('part4', 25, 'setTimeout (3 Seconds)', `<span id="timer-25">Waiting for 3 seconds...</span>`);
setTimeout(() => {
  document.getElementById('timer-25').innerText = "Welcome to JavaScript!";
}, 3000);

// 26 & 27. setInterval and clearInterval
renderCard('part4', 26, 'setInterval & clearInterval', 
  `<div id="interval-status">Starting interval...</div><div id="interval-ticks"></div>`);

let tickCount = 0;
const tickContainer = document.getElementById('interval-ticks');
const intervalId = setInterval(() => {
  tickCount++;
  tickContainer.innerText += `Learning JavaScript (${tickCount}x)\n`;
}, 2000);

setTimeout(() => {
  clearInterval(intervalId);
  document.getElementById('interval-status').innerHTML = `<b style="color:red;">Interval stopped after 8 seconds (clearInterval).</b>`;
}, 8000);

// 28. Execution Order
renderCard('part4', 28, 'Function Call Order', `<div id="execution-order">Executing functions...</div>`);
let execLogs = [];

function one() { execLogs.push("Function one() executed"); }
function two() { execLogs.push("Function two() executed (via setTimeout 0)"); renderOrder(); }
function three() { execLogs.push("Function three() executed"); }

function renderOrder() {
  const rows = execLogs.map((log, index) => [`Step ${index + 1}`, log]);
  document.getElementById('execution-order').innerHTML = makeTable(['Execution Order', 'Log'], rows);
}

one();
setTimeout(two, 0);
three();


// ==========================================
// PART 5: Promises and API Fetching
// ==========================================

// 29. Promise Resolve
renderCard('part5', 29, 'Promise .then()', `<div id="p29">Pending...</div>`);
const loginPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Login successful"), 500);
});
loginPromise.then(res => {
  document.getElementById('p29').innerHTML = `<b style="color:green;">${res}</b>`;
});

// 30. Promise Reject
renderCard('part5', 30, 'Promise .catch()', `<div id="p30">Pending...</div>`);
const rejectPromise = new Promise((_, reject) => {
  setTimeout(() => reject("Invalid password"), 500);
});
rejectPromise.catch(err => {
  document.getElementById('p30').innerHTML = `<b style="color:red;">Error: ${err}</b>`;
});

// 31. Promise .finally()
renderCard('part5', 31, 'Promise .finally()', `<div id="p31">Pending...</div>`);
const finallyPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Data Processed"), 500);
});
finallyPromise
  .then(res => res)
  .finally(() => {
    document.getElementById('p31').innerHTML = `Promise ended.<br><b>Process completed</b>`;
  });

// 32. Fetch Titles using forEach()
renderCard('part5', 32, 'Fetch FakeStore - forEach() Titles', `<div id="p32">Loading products...</div>`);
fetch('https://fakestoreapi.com/products?limit=5')
  .then(res => res.json())
  .then(products => {
    let html = '<ul>';
    products.forEach(p => html += `<li>${p.title}</li>`);
    html += '</ul>';
    document.getElementById('p32').innerHTML = html;
  });

// 33. Fetch Title, Price, Category
renderCard('part5', 33, 'Fetch FakeStore - Title, Price, Category', `<div id="p33">Loading...</div>`);
fetch('https://fakestoreapi.com/products?limit=4')
  .then(res => res.json())
  .then(products => {
    const rows = products.map(p => [p.title, `$${p.price}`, p.category]);
    document.getElementById('p33').innerHTML = makeTable(['Title', 'Price', 'Category'], rows);
  });

// 34. Handle API Errors using .catch() & console.warn()
renderCard('part5', 34, 'Fetch Error Handling (.catch)', `<div id="p34">Testing invalid URL...</div>`);
fetch('https://fakestoreapi.com/invalid_url_testing')
  .then(res => {
    if (!res.ok) throw new Error("HTTP Status " + res.status);
    return res.json();
  })
  .catch(err => {
    console.warn("Task 34 Caught Error:", err.message);
    document.getElementById('p34').innerHTML = `<span class="warn-text">Console Warn Output Triggered:</span><br>${err.message}`;
  });

// 35. Fetch .finally()
renderCard('part5', 35, 'Fetch .finally() Message', `<div id="p35">Fetching...</div>`);
fetch('https://fakestoreapi.com/products?limit=1')
  .then(res => res.json())
  .finally(() => {
    document.getElementById('p35').innerHTML = `Status: <b>API call completed</b>`;
  });


// ==========================================
// PART 6: Real-Time Mini Tasks
// ==========================================

// 36. Employee Salary Report (Filter + forEach)
renderCard('part6', 36, 'Salary Report (Filter + forEach)', `<div id="p36"></div>`);
const filteredEmps = employees.filter(e => e.salary < 300000);
let empRows = [];
filteredEmps.forEach(e => empRows.push([e.name, `₹${e.salary.toLocaleString('en-IN')}`]));
document.getElementById('p36').innerHTML = makeTable(['Employee Name', 'Salary'], empRows);

// 37. Product Price Calculator (map)
renderCard('part6', 37, 'Product Price Calculator (map)', `<div id="p37">Loading...</div>`);
fetch('https://fakestoreapi.com/products?limit=4')
  .then(res => res.json())
  .then(products => {
    const titleAndPrices = products.map(p => ({ title: p.title, price: `$${p.price}` }));
    const rows = titleAndPrices.map(item => [item.title, item.price]);
    document.getElementById('p37').innerHTML = makeTable(['Product Title', 'Price'], rows);
  });

// 38. Product Search (filter by category)
renderCard('part6', 38, "Product Search (Category: jewelery)", `<div id="p38">Filtering...</div>`);
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    const jewelery = products.filter(p => p.category === "jewelery");
    const rows = jewelery.map(j => [j.title, `$${j.price}`]);
    document.getElementById('p38').innerHTML = makeTable(['Jewelery Item', 'Price'], rows);
  });

// 39. Number Analysis
const numArr = [12, 45, 8, 23, 50, 3, 18];
const mapRes = numArr.map(x => x * 2);
const filterRes = numArr.filter(x => x > 20);
const reduceRes = numArr.reduce((a, b) => a + b, 0);
const someRes = numArr.some(x => x < 5);
const everyRes = numArr.every(x => x > 0);

renderCard('part6', 39, 'Number Analysis', makeTable(['Operation', 'Result'], [
  ['Original Array', numArr.join(', ')],
  ['map(x => x * 2)', mapRes.join(', ')],
  ['filter(x > 20)', filterRes.join(', ')],
  ['reduce(Sum)', reduceRes],
  ['some(x < 5)', someRes],
  ['every(x > 0)', everyRes]
]));

// 40. Product Listing (Fetch + catch + finally)
renderCard('part6', 40, 'Complete Product Listing Flow', `<div id="p40">Loading...</div><div id="p40-status" style="margin-top:8px; font-weight:bold; color:blue;"></div>`);
fetch('https://fakestoreapi.com/products?limit=3')
  .then(res => res.json())
  .then(products => {
    const rows = products.map(p => [p.title, `$${p.price}`, p.category]);
    document.getElementById('p40').innerHTML = makeTable(['Title', 'Price', 'Category'], rows);
  })
  .catch(err => {
    document.getElementById('p40').innerHTML = `<span style="color:red">Failed to load: ${err.message}</span>`;
  })
  .finally(() => {
    document.getElementById('p40-status').innerText = "API Call Finished (from .finally())";
  });