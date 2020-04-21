var userActivityPort = chrome.runtime.connect({
  name: PORT_NAME_USER_ACTIVITY
})
userActivityPort.onDisconnect.addListener(() => {
  userActivityPort = null;
});
window.addEventListener("mousemove", () => {
  reportUserActivity("MOUSE_MOVE");
});

window.addEventListener("keydown", () => {
  reportUserActivity("KEY_DOWN");
});

window.addEventListener("scroll", () => {
  reportUserActivity("SCROLL");
});

function reportUserActivity(type) {
  if (userActivityPort != null)
    userActivityPort.postMessage({
      type,
      datetime: Date.now(),
      url: location.href
    });
}
