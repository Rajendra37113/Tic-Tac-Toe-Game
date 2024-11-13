
// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turn0 = true; // Track the player's turn (true for 'O', false for 'X')

// const winPatterns = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// // Function to show the winner
// const showWinner = (winner) => {
//     msg.innerText = `Congratulations! Winner is ${winner}`;
//     msgContainer.classList.remove("hide"); // Show the winner message at the top
//     boxes.forEach(box => box.disabled = true); // Disable all boxes after winning
// };

// // Function to check for the winner
// const checkWinner = () => {
//     for (let pattern of winPatterns) {
//         let [a, b, c] = pattern;
//         if (boxes[a].innerText !== "" && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
//             showWinner(boxes[a].innerText);
//             return;
//         }
//     }
//     // If all boxes are filled and no winner, it's a draw
//     if ([...boxes].every(box => box.innerText !== "")) {
//         msg.innerText = "It's a Draw!";
//         msgContainer.classList.remove("hide");
//     }
// };

// // Add event listeners to each box
// boxes.forEach(box => {
//     box.addEventListener("click", () => {
//         // Set box text based on the current turn
//         box.innerText = turn0 ? "O" : "X";
//         turn0 = !turn0; // Switch turn
//         box.disabled = true; // Disable the clicked box
//         checkWinner(); // Check if there's a winner
//     });
// });

// // Function to reset the game
// const resetGame = () => {
//     boxes.forEach(box => {
//         box.innerText = ""; // Clear box content
//         box.disabled = false; // Enable the box again
//     });
//     msgContainer.classList.remove("hide"); // Hide the winner message
//     turn0 = true; // Reset to player 'O's turn
// };

// // Event listeners for Reset and New Game buttons
// resetBtn.addEventListener("click", resetGame);
// newGameBtn.addEventListener("click", resetGame);





let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // Track the player's turn (true for 'O', false for 'X')

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to show the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`;
    msgContainer.classList.remove("hide"); // Show the winner message at the top
    boxes.forEach(box => box.disabled = true); // Disable all boxes after winning
};

// Function to check for the winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (boxes[a].innerText !== "" && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            showWinner(boxes[a].innerText); // Pass "X" or "O" as the winner
            return;
        }
    }
    // If all boxes are filled and no winner, it's a draw
    if ([...boxes].every(box => box.innerText !== "")) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
    }
};

// Add event listeners to each box
boxes.forEach(box => {
    box.addEventListener("click", () => {
        // Set box text based on the current turn
        box.innerText = turn0 ? "O" : "X";
        turn0 = !turn0; // Switch turn
        box.disabled = true; // Disable the clicked box
        checkWinner(); // Check if there's a winner
    });
});

// Function to reset the game
const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = ""; // Clear box content
        box.disabled = false; // Enable the box again
    });
    msgContainer.classList.add("hide"); // Hide the winner message
    turn0 = true; // Reset to player 'O's turn
};

// Event listeners for Reset and New Game buttons
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
