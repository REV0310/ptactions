const { execSync } = require("child_process");
const { unlinkSync, writeFileSync } = require("fs");
const path = require("path");
const tools = require('../utils');



function runAction() {

	tools.log("Get the Maven project version…");
	version = run(
		`mvn -version`,
		getInput("directory") || null,
	);
	
	.toolslog(`Version : ${version}`)
}

runAction();
