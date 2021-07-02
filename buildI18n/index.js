const { execSync } = require("child_process");
const { unlinkSync, writeFileSync } = require("fs");
const path = require("path");
const util = require('./utils.js');


function runAction() {

	log("Get the Maven project version…");
	version = run(
		`mvn -version`
	);
	
	run(
		`ls`
	);
	
	log(`Version : ${version}`)
}

function run(cmd, cwd = null) {
	return execSync(cmd, { encoding: "utf8", stdio: "inherit", cwd });
}

function log(msg) {
  console.log(msg); 
};

runAction();
