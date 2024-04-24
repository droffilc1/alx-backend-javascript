import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const [photo, user] = values;
      const logMessage = `${photo.body} ${user.firstName} ${user.lastName}`;
      console.log(logMessage);
    })
    .catch((error) => {
      console.log('Signup system offline', error);
    });
}
