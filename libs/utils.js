const { execSync } = require("child_process");
const { unlinkSync, writeFileSync } = require("fs");
const path = require("path");

let log = function(msg) {
  console.log(msg); 
};

let run = function(cmd, cwd = null) {
	return execSync(cmd, { encoding: "utf8", stdio: "inherit", cwd });
}

let getInput = function(name, required = false) {
	const value = getEnv(`INPUT_${name.toUpperCase()}`);
	if (value == null) {
		// Value is either not set (`undefined`) or set to `null`
		if (required) {
			throw new Error(`"${name}" input variable is not defined`);
		}
		return null;
	}
	return value;
}

let getEnv = function(name) {
	return process.env[name];
}

module.exports = { 
	log,
	run,
	getInput,
	getEnv
};


