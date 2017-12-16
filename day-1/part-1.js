// We have to check a figure with either the next... or the first.
// Remember that reduce callbacks are called with a *third* (and fourth) argument too, which
// is the index of the processed item.
input.split('').reduce((sum, ch, i) => sum + (ch === (input[i + 1] || input[0]) ? +ch : 0), 0);
