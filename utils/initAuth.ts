import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'padelcal-1def0',
        clientEmail: 'firebase-adminsdk-rokn0@padelcal-1def0.iam.gserviceaccount.comm',
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: '',
    },
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyBeZVujVr7hlSQXoIdz5CuAd5vghCsAz98', // required
      authDomain: 'padelcal-1def0.firebaseapp.com',
      projectId: 'padelcal-1def0',
    },
    cookies: {
      name: 'PadelCal', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  })
}

export default initAuth