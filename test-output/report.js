$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Actitime.feature");
formatter.feature({
  "line": 1,
  "name": "Actitime Login",
  "description": "",
  "id": "actitime-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Login Page",
  "description": "",
  "id": "actitime-login;verify-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I open Actitime login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeSteps.i_launch_chrome_browser()"
});
formatter.result({
  "duration": 5325199486,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeSteps.i_open_actitime_login_page()"
});
formatter.result({
  "duration": 13373077984,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeSteps.i_verify_the_login_page()"
});
formatter.result({
  "duration": 392330052,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeSteps.close_the_browser()"
});
formatter.result({
  "duration": 1279729729,
  "status": "passed"
});
});