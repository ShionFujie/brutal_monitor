const sampleTime = rxjs.operators.sampleTime;

fromPortMessages(PORT_NAME_USER_ACTIVITY)
  .pipe(sampleTime(60000))
  .subscribe(onDetectUserActivity);

function onDetectUserActivity({ datetime, type, url }) {
  console.log(`${datetime.toString()}:[${type}] ${url}`);
}
