const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `your-status` input defined in action metadata file
  const yourStatus = core.getInput('your-status');
  console.log(`Current Status: ${yourStatus}`);
  core.setOutput("yourStatus", yourStatus);
  const time = (new Date()).toTimeString();
  console.log(`Current Time: ${time}`);
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}