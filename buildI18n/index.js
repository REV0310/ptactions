const { execSync } = require("child_process");
const { unlinkSync, writeFileSync } = require("fs");
const path = require("path");


function log(msg) {
	console.log(msg); // eslint-disable-line no-console
}


function run(cmd, cwd = null) {
	return execSync(cmd, { encoding: "utf8", stdio: "inherit", cwd });
}


function getEnv(name) {
	return process.env[name];
}


function getInput(name, required = false) {
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


function runAction() {

	log("Get the Maven project version…");
	version = run(
		`mvn -q -Dexec.executable=echo -Dexec.args='${project.version}' --non-recursive exec:exec`,
		getInput("directory") || null,
	);
	
	log(`Version : ${version}`)
}

runAction();