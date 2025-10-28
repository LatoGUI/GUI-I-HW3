/*
    File: script.js
    GUI Assignment: HW3 - Dynamic Multiplication Table
    Platon Supranovich, UMass Lowell Computer Science, Platon_Supranovich@student.uml.edu
    Copyright (c) 2025 by Platon. All rights reserved. May be freely copied or
    excerpted for educational purposes with credit to the author.
    updated by PS on October 20, 2025 at 8:00 AM
*/

document.getElementById('tableForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get elements
    const startCol = parseInt(document.getElementById('startCol').value);
    const endCol = parseInt(document.getElementById('endCol').value);
    const startRow = parseInt(document.getElementById('startRow').value);
    const endRow = parseInt(document.getElementById('endRow').value);
    const errorDiv = document.getElementById('error');
    const resultTable = document.getElementById('resultTable');

    // Reset table/error
    errorDiv.textContent = '';
    resultTable.innerHTML = '';

    // Validation
    if (
        isNaN(startCol) || isNaN(endCol) ||
        isNaN(startRow) || isNaN(endRow)
    ) {
        errorDiv.textContent = "All fields must be valid numbers.";
        return;
    }

    if (startCol > endCol || startRow > endRow) {
        errorDiv.textContent = "Start values must be less than or equal to end values.";
        return;
    }

    if (startCol < -50 || endCol > 50 || startRow < -50 || endRow > 50) {
        errorDiv.textContent = "Values must be between -50 and 50.";
        return;
    }

    // Generate table
    const thead = resultTable.createTHead();
    const headerRow = thead.insertRow();
    headerRow.insertCell().textContent = "";

    for (let j = startCol; j <= endCol; j++) {
        const th = document.createElement('th');
        th.textContent = j;
        headerRow.appendChild(th);
    }

    const tbody = resultTable.createTBody();

    for (let i = startRow; i <= endRow; i++) {
        const row = tbody.insertRow();
        const th = document.createElement('th');
        th.textContent = i;
        row.appendChild(th);

        for (let j = startCol; j <= endCol; j++) {
            const cell = row.insertCell();
            cell.textContent = i * j;
        }
    }
});
