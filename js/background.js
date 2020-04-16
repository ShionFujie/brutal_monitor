chrome.runtime.onConnect.addListener(({ name, onMessage }) => {
  if (name == PORT_NAME_USER_ACTIVITY) {
    onMessage.addListener(onDetectUserActivity);
  }
});

function onDetectUserActivity({datetime, type, url}) {
  console.log(`${datetime.toString()}:[${type}] ${url}`);
}
