import firebase from 'firebase/app'

export default {
  actions: { 
    async login(NULL, {email, password}) { // {dispatch, commit} вместо NULL
      await firebase.auth().signInWithEmailAndPassword(email, password)
    }
  }
}
