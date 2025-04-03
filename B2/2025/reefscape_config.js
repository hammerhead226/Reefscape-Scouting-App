var config_data = `
{
    "dataFormat": "tsv",
    "title": "Scout App 2025",
    "page_title": "ReefScape",
    "checkboxAs": "10",
    "fontSize": "16px",
    
    "prematch": [
      {
        "name": "Scouter Initials",
        "code": "s",
        "type": "scouter",
        "size": 5,
        "maxSize": 5,
        "required": "true"
      },
      {
        "name": "Event",
        "code": "e",
        "type": "event",
        "defaultValue": "2025micmp4",
        "required": "true"
      },
      {
        "name": "Match Level",
        "code": "l",
        "type": "level",
        "choices": {
          "qm": "Quals"
        },
        "defaultValue": "qm",
        "required": "true"
      },
      {
        "name": "Match #",
        "code": "m",
        "type": "match",
        "min": 1,
        "max": 150,
        "required": "true",
        "size": "large"
      },
      {
        "name": "Robot",
        "code": "r", 
        "type": "robot",
        "choices": {
          "b2": "<span style='color: #4444FF'>Blue-2: <span id='b2_team'></span></span>"
        },
        "defaultValue": "b2",
        "required": "true",
        "locked": "true"
      },
      {
        "name": "Team #",
        "code": "t",
        "type": "team",
        "min": 1,
        "max": 99999
      },
      {
        "name": "Starting Position",
        "code": "sp",
        "type": "radio",
        "choices": {
          "p": "Processor Side<br>",
          "c": "Center<br>",
          "o": "Opposite Processor"
        },
        "required": "true"
      }
    ],
  
    "auton": [
      {
        "name": "Leave Starting Line",
        "code": "al",
        "type": "bool"
      },
      {
        "name": "Coral L4",
        "code": "acl4",
        "type": "counter"
      },
      {
        "name": "Coral L3",
        "code": "acl3",
        "type": "counter"
      },
      {
        "name": "Coral L2",
        "code": "acl2",
        "type": "counter"
      },
      {
        "name": "Coral L1 (Trough)",
        "code": "acl1",
        "type": "counter"
      },
      {
        "name": "Algae Removed from Reef",
        "code": "arr",
        "type": "counter"
      },
      {
        "name": "Algae in Processor",
        "code": "aap",
        "type": "counter"
      },
      {
        "name": "Algae in Net",
        "code": "aan",
        "type": "counter"
      }
    ],
  
    "teleop": [
      {
        "name": "Coral L4",
        "code": "tcl4",
        "type": "counter"
      },
      {
        "name": "Coral L3",
        "code": "tcl3",
        "type": "counter"
      },
      {
        "name": "Coral L2",
        "code": "tcl2",
        "type": "counter"
      },
      {
        "name": "Coral L1 (Trough)",
        "code": "tcl1",
        "type": "counter"
      },
      {
        "name": "Algae Removed from Reef",
        "code": "trr",
        "type": "counter"
      },
      {
        "name": "Algae in Processor",
        "code": "tap",
        "type": "counter"
      },
      {
        "name": "Algae in Net by Robot only",
        "code": "tan",
        "type": "counter"
      },
      {
        "name": "Defense by opponent was played on this robot",
        "code": "dpr",
        "type": "bool",
        "defaultValue": "0",
        "required": "true"
      }
    ],
  
    "endgame": [
      {
        "name": "Climb Status",
        "code": "clm",
        "type": "radio",
        "choices": {
          "0": "None<br>",
          "2": "Parked (no climb attempt)<br>",
          "2.1": "Parked (Failed Climb)<br>",
          "6": "Shallow Climb<br>",
          "12": "Deep Climb<br>"
        },
        "defaultValue": "0",
        "required": "true"
      }
    ],
  
    "postmatch": [
      {
        "name": "Driver Skill",
        "code": "ds",
        "type": "radio",
        "choices": {
          "": "Not Observed<br>",
          "0": "Ineffective<br>",
          "2": "Average<br>",
          "4": "Excellent<br>"
        },
        "defaultValue": "/t",
        "required": "true"
      },
      {
        "name": "Defense Rating",
        "code": "dr",
        "type": "radio",
        "choices": {
          "": "Did Not Defend<br>",
          "0": "Ineffective<br>",
          "2": "Average<br>",
          "4": "Excellent<br>"
        },
        "defaultValue": "/t",
        "required": "true"
      },
      {
        "name": "Died/Immobilized",
        "code": "die",
        "type": "radio",
        "choices": {
          "": "None<br>",
          "0.5": "Partially<br>",
          "1": "Entire Match<br>"
        },
        "defaultValue": "/t",
        "required": "true"
      },
      
      {
        "name": "Tippy",
        "code": "tip",
        "type": "bool",
        "defaultValue": "0",
        "required": "true"
      },
      {
        "name": "Comments",
        "code": "co",
        "type": "text",
        "size": 15,
        "maxSize": 55,
        "required": "false"
      }
    ]
  }`;

