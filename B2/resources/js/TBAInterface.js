// TBAInterface functions to pull data from TheBlueAlliance.com
var teams = null;
var schedule = null;
var authKey = "FZUywopinjIQLeAeLAoPQpg6tCzGceLfr80AblCbHf9mEk2jvvO5gmhelDxr4NJZ";
/**
 * Get list of teams in event
 *
 * @param {eventCode} eventCode the event code (i.e. MILAC) to pull the team list
 */
function getTeams(eventCode) {
	if (authKey) {
		var xmlhttp = new XMLHttpRequest();
		var url = "https://www.thebluealliance.com/api/v3/event/" + eventCode + "/teams/simple";
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				teams = JSON.parse(response);
			}
		};
		// Send request
		xmlhttp.send();
	}
}

/**
 * Get schedule for event
 *
 * @param {eventCode} eventCode the event code (i.e. MILAC) to pull the team list
 */
function getSchedule(eventCode) {
	if (authKey) {
		var xmlhttp = new XMLHttpRequest();
		var url = "https://www.thebluealliance.com/api/v3/event/" + eventCode + "/matches/simple";
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				schedule = JSON.parse(response);
			}
		};
		// Send request
		xmlhttp.send();
	}
}
