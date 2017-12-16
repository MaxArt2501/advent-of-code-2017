const half = input.length / 2;
input.split('').reduce((sum, ch, i) => sum + (ch === input[i >= half ? i - half : i + half] ? +ch : 0), 0);
