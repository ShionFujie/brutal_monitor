var userActivityPort = chrome.runtime.connect({
  name: PORT_NAME_USER_ACTIVITY
})
userActivityPort.onDisconnect.addListener(() => {
  userActivityPort = null;
});
window.addEventListener("mousemove", reportUserActivity);

window.addEventListener("keydown", reportUserActivity);

window.addEventListener("scroll", reportUserActivity);

function reportUserActivity() {
  if (userActivityPort != null)
    userActivityPort.postMessage({
      datetime: Date.now(),
      url: location.href
    });
}
