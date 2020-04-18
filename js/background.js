const Rx = rxjs;

fromPortMessages(PORT_NAME_USER_ACTIVITY).subscribe(onDetectUserActivity);

function fromPortMessages(portName) {
  return Rx.fromEventPattern(
    handler => {
      chrome.runtime.onConnect.addListener(({ name, onMessage }) => {
        if (name == portName) onMessage.addListener(handler);
      });
    },
    undefined,
    (message, _) => message
  );
}

function onDetectUserActivity({ datetime, type, url }) {
  console.log(`${datetime.toString()}:[${type}] ${url}`);
}
