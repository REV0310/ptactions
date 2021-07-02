const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
eval(fs.readFileSync('../utils.js')+'');


function runAction() {

	log("Get the Maven project version…");
	version = run(
		`mvn -version`,
		getInput("directory") || null,
	);
	
	log(`Version : ${version}`)
}

runAction();
