function moreRobotInfo() {

    document.getElementById("r-more-info-button").style.display = "none";
    document.getElementById("robot-invisible-section").style.display = "flex";
    document.getElementById("robot-invisible-section").style.flexWrap =  "wrap";
};

function lessRobotInfo() {

    document.getElementById("robot-invisible-section").style.display = "none";
    document.getElementById("r-more-info-button").style.display = "inline";
};

function moreFullLedInfo() {

    document.getElementById("full-more-info-button").style.display = "none";
    document.getElementById("full-invisible-section").style.display = "flex";
    document.getElementById("full-invisible-section").style.flexWrap =  "wrap";
};

function lessFullLedInfo() {

    document.getElementById("full-invisible-section").style.display = "none";
    document.getElementById("full-more-info-button").style.display = "inline";
};