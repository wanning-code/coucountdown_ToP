const output = document.querySelector('.output');
output.textContent = "";

let i = 10

// Solution
// while (i >= 0) {
//     const para = document.createElement('p');
//     if(i === 10) {
//         para.textContent += `Countdown ${i}`; 
//     } else if (i === 0) {
//         para.textContent += "Blast off!"; 
//     } else {
//         para.textContent += `${i}`; 
//     }
//     output.appendChild(para);
//     i--;
// }

// My Solution
for (let i = 10; i >= 0; i--) {

    if(i === 10) {
        const para = document.createElement('p');
        para.textContent += `Countdown ${i}`; 
        output.appendChild(para);
    } else if (i === 0) {
        const para = document.createElement('p');
        para.textContent += "Blast off!"; 
        output.appendChild(para);
        
    } else {
        const para = document.createElement('p');
        para.textContent += `${i}`; 
        output.appendChild(para);
    }
}