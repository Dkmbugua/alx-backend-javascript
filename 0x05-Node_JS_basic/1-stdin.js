process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
  const uname = process.stdin.read();
  if (uname) {
    process.stdout.write(`Your name is: ${uname.trim()}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
