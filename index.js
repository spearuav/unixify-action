const core = require('@actions/core');
const github = require('@actions/github');
const unixify = require('unixify');


try {
  const pathToConvert = core.getInput('path');
  core.setOutput("path", unixify(pathToConvert));
} catch (error) {
  core.setFailed(error.message);
}