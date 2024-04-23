import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      // Destructure the value to get the resolved promise results
      const [photo, user] = values;
      const logMessage = `${photo.body} ${user.firstName} ${user.lastName}`;
      console.log(logMessage);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}
