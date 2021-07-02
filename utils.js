module.exports = function() { 
    this.log = function(msg) {
	  console.log(msg); 
	};
	
	this.run = function(cmd, cwd = null) {
		return execSync(cmd, { encoding: "utf8", stdio: "inherit", cwd });
	}
	
	this.getInput = function(name, required = false) {
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
}



