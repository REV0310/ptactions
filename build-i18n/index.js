const utils = require('../libs/utils');

function runAction() {

	utils.log("Get the Maven project version…");
	version = utils.run(
		`mvn -version`
	);
	utils.log(`Version : ${version}`)

    let application = utils.getInput("application", true);
	utils.log(`Version : ${application}`)
}

runAction();
