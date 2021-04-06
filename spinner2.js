const spinner2 = function(write, time) {
  setTimeout(() => {
    process.stdout.write(write);
  }, time);
};

spinner2('\r|   ', 100);
spinner2('\r/   ', 300);
spinner2('\r-   ', 500);
spinner2('\r\\   ', 700);
spinner2('\r|   ', 900);
spinner2('\r/   ', 1100);
spinner2('\r-   ', 1300);
spinner2('\r\\   ', 1500);
spinner2('\r|   ', 1700);
spinner2('\n', 1900); // output a newline char before exiting, getting rid of '%' caused by process.stdout.write()