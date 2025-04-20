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
// const para = document.createElement('p'); and output.appendChild(para);
// an be put before and after the if else if statements to avoid repetitive code
for (let i = 10; i >= 0; i--) {
    // const para = document.createElement('p');
    if(i === 10) {
        // Can be replaced and put before the if statement to avoid repetitive code
        const para = document.createElement('p');

        para.textContent += `Countdown ${i}`;

        // Can be replaced and put after the if statement to avoid repetitive code
        output.appendChild(para);
    } else if (i === 0) {
        // Can be replaced and put before the if statement to avoid repetitive code
        const para = document.createElement('p');

        para.textContent += "Blast off!"; 

        // Can be replaced and put after the if statement to avoid repetitive code
        output.appendChild(para);
        
    } else {
        // Can be replaced and put before the if statement to avoid repetitive code
        const para = document.createElement('p');

        para.textContent += `${i}`; 

        // Can be replaced and put after the if statement to avoid repetitive code
        output.appendChild(para);
    }
    // output.appendChild(para);
}