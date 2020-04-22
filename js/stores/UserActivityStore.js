const UserActivityStore = firebase => {
  const db = firebase.firestore();

  function addActivity({ datetime, url }) {
    const prms = db
      .collection("userActivity")
      .add({ datetime, url })
      .then(async () => ({ complete: true }))
      .catch(async reason => ({ complete: false, reason }));
    return rxjs.from(prms);
  }

  return { addActivity };
};
