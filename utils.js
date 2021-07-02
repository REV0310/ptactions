
let log = function(msg) {
  console.log(msg); 
};

const run = function(cmd, cwd = null) {
	return execSync(cmd, { encoding: "utf8", stdio: "inherit", cwd });
}

const getInput = function(name, required = false) {
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

module.exports = { 
	log,
	run,
	getInput
};


