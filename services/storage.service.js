import { homedir } from 'os';
import { join } from 'path';

const filePath = join(homedir(), 'weather-data.json');

const saveKeyValue = (key, value) => {

};

export {saveKeyValue};

/*
    import { join, basename, dirname, extname, relative, isAbsolute, resolve, sep } from 'path';

    console.log(basename(filePath)); // file name => weather-data.json
    console.log(dirname(filePath)); // directory name => /Users/nickname
    console.log(extname(filePath)); // extension name => .json
    console.log(relative(filePath, dirname(filePath))); // path from first -> to second => " .. " (step back)
    console.log(isAbsolute(filePath)); // return true of false if path is absolute or not
    console.log(resolve('..')); // relative to current execution folder => /Users/nickname/Projects
    console.log(sep); // output separator of current os => "/"
*/
