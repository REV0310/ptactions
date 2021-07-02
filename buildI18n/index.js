const { execSync } = require("child_process");
const { unlinkSync, writeFileSync } = require("fs");
const path = require("path");
const tools = require('./tools');


function runAction() {

	log("Get the Maven project version…");
	version = run(
		`mvn -q -Dexec.executable=echo -Dexec.args='${project.version}' --non-recursive exec:exec`,
		getInput("directory") || null,
	);
	
	log(`Version : ${version}`)
}

runAction();