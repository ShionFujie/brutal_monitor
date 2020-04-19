function fromPortMessages(portName) {
  return rxjs.fromEventPattern(
    handler => {
      chrome.runtime.onConnect.addListener(({ name, onMessage }) => {
        if (name == portName) onMessage.addListener(handler);
      });
    },
    undefined,
    (message, _) => message
  );
}
