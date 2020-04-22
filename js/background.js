const sampleTime = rxjs.operators.sampleTime;
const flatMap = rxjs.operators.flatMap;

const userActivity = UserActivityStore(getFirebase());

fromPortMessages(PORT_NAME_USER_ACTIVITY)
  .pipe(
    sampleTime(60000),
    flatMap(userActivity.addActivity)
  )
  .subscribe(onUserActivityAdded);

function getFirebase() {
  firebase.initializeApp({
    apiKey: "AIzaSyApxejDmgH2LYD8AsCTqMoFwxWZxMx6eys",
    authDomain: "brutal-monitor.firebaseapp.com",
    projectId: "brutal-monitor"
  });
  return firebase;
}

function onUserActivityAdded({ complete, reason }) {
  const msg = complete ? "[SUCCESS] User Activity Added" : `[ERROR] ${reason}`;
  console.log(msg);
}
