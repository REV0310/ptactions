const { execSync } = require("child_process");
const { unlinkSync, writeFileSync } = require("fs");
const path = require("path");
const util = require('./utils.js');


function runAction() {

	util.log("Get the Maven project version…");
	version = run(
		`mvn -version`,
		getInput("directory") || null,
	);
	
	util.log(`Version : ${version}`)
}

runAction();
