fromPortMessages(PORT_NAME_USER_ACTIVITY).subscribe(onDetectUserActivity);

function onDetectUserActivity({ datetime, type, url }) {
  console.log(`${datetime.toString()}:[${type}] ${url}`);
}
