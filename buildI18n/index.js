const { execSync } = require("child_process");
const { unlinkSync, writeFileSync } = require("fs");
const path = require("path");
const util = require('../utils');


function runAction() {

	util.log("Get the Maven project version…");
	version = run(
		`mvn -version`
	);
	log(`Version : ${version}`)
	
	ls = run(
		`ls -lrt`
	);
	log(`ls : ${ls}`)
	
	
}

function run(cmd, cwd = null) {
	return execSync(cmd, { encoding: "utf8", stdio: "inherit", cwd });
}

function log(msg) {
  console.log(msg); 
};

runAction();
