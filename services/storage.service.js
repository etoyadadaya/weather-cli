import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

const TOKEN_DICTIONARY = {
	token: 'token',
	city: 'city'
}

const saveKeyValue = async (key, value) => {
	let data = {};
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		data = JSON.parse(file);
	}
	data[key] = value;
	await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		const data = JSON.parse(file);
		return data[key];
	}
	return undefined;
};

const isExist = async (path) => {
	try {
		await promises.stat(path);
		return true;
	} catch (e) {
		return false;
	}
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };

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
