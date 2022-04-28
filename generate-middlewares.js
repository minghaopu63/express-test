const fs = require('fs');

let configStr = 'module.exports = [\n';
for (let i = 0; i < 200; i++) {
    const content = `module.exports = function (req, res, next) {
    console.log('middleware ${i}');
    next();
}
`
    const filename = `./test-middlewares/middleware-${i}.js`;
    fs.writeFileSync(filename, content);
    configStr += `    '${filename}',` + '\n';
}

configStr += '];';
fs.writeFileSync('config.js', configStr);
console.log(configStr)
