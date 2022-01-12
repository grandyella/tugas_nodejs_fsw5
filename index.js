// Module pada nodejs
const os = require("os");
const fs = require("fs");

// Variabel untuk mengembalikan object tentang cpu
const info = os.cpus();

// Stringify berguna untuk merubah js object menjadi string json
fs.writeFile("spec_pc.json", JSON.stringify(info), (err) => {
    if (err) throw err;
});