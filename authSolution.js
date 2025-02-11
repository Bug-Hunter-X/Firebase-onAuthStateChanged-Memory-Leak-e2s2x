let unsubscribe;

const auth = getAuth();

const componentDidMount = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
    } else {
      // User is signed out.
    }
  });
};

const componentWillUnmount = () => {
  if (unsubscribe) {
    unsubscribe(); // Unsubscribe before the component is unmounted
  }
};

export { componentDidMount, componentWillUnmount };