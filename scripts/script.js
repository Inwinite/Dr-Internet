let pgwBrowser = $.pgwBrowser();
let browser_info = pgwBrowser.browser.name.toString();
let os_info = pgwBrowser.os.name.toString();
let browser_info_win = navigator.userAgent.toString();
document.getElementById("os").innerHTML = os_info;

if (os_info.includes("Mac")){
  document.getElementById("browser").innerHTML = browser_info;
  window.location.assign("https://download.teamviewer.com/download/version_13x/TeamViewerQS.dmg")
}
else if (os_info.includes("Linux")){
  document.getElementById("browser").innerHTML = browser_info;
}
else if ((os_info.indexOf("Mac") == -1) && (os_info.indexOf("Linux") == -1)) {

    if (browser_info_win.indexOf(".NET") != -1){
        document.getElementById("browser").innerHTML = "Internet Explorer";
    }
    else if (browser_info_win.includes("Edge")){
        document.getElementById("browser").innerHTML = "Microsoft Edge";
        window.location.assign("https://download.teamviewer.com/download/version_13x/TeamViewerQS.exe");

    }
    else if (browser_info_win.includes("Chrome")){
        document.getElementById("browser").innerHTML = "Google Chrome";
        window.location.assign("https://download.teamviewer.com/download/version_13x/TeamViewerQS.exe")
    }
    else if (browser_info_win.includes("Firefox")){
        document.getElementById("browser").innerHTML = "Mozilla Firefox";
        window.location.assign("https://download.teamviewer.com/download/version_13x/TeamViewerQS.exe")
    };
};
