const fs = require('fs');
const path = require('path');

Array.prototype.last = function () { return this[this.length - 1]; }

const exportPath = "./__sapper__/export/";

async function do_work() {
    const indexPath = path.join(exportPath, "index.html");
    const buf = await fs.promises.readFile(indexPath);
    const text = buf.toString();
    const reg = /<link href=([\w\d\./]+) rel=stylesheet>/g;

    const newText = text.replace(reg, (m, g) => `<style>${fs.readFileSync(path.join(exportPath, g))}</style>`)

    fs.promises.writeFile(indexPath, newText);
}

do_work();