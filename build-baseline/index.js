const utils = require('../utils');

function runAction() {

	utils.log("Get the Maven project version…");
	version = utils.run(
		`mvn -version`
	);
	utils.log(`Version : ${version}`)
}

runAction();
