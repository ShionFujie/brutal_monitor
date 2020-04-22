const sampleTime = rxjs.operators.sampleTime;

const userActivity = UserActivityStore(getFirebase());

fromPortMessages(PORT_NAME_USER_ACTIVITY)
  .pipe(sampleTime(60000))
  .subscribe(onDetectUserActivity);

function getFirebase() {
  firebase.initializeApp({
    apiKey: "AIzaSyApxejDmgH2LYD8AsCTqMoFwxWZxMx6eys",
    authDomain: "brutal-monitor.firebaseapp.com",
    projectId: "brutal-monitor"
  });
  return firebase;
}

function onDetectUserActivity({ datetime, url }) {
  console.log(`${datetime.toString()}: ${url}`);
}
