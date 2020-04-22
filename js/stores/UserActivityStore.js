const UserActivityStore = firebase => {
  const db = firebase.firestore();

  function addActivity({ datetime, url }) {
    db.collection("userActivity")
      .add({ datetime, url })
      .then(async () => ({ complete: true }))
      .catch(async reason => ({ complete: false, reason }));
  }

  return {addActivity}
};
