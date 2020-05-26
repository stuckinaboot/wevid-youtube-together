# :sunny: Youtube Sync - Synchronized YouTube Player built in react

> Synchronized YouTube player that let friends watch videos together regardless of geograpic location

### Technologies

- React.js
- CSS
- Node.js
- Websockets
- Express

### TODO

- [ ] Auto sync with leader on join
- [ ] Update video id without breaking the session

### Setup

```
cd client
yarn
yarn build
cd ../server
yarn
yarn start
```

### How to

To create a new youtube sync session, open your browser and visit `localhost:8088/start/choose_session_id/encoded_youtube_url`, where `choose_session_id` is any alphanumeric string and `encoded_youtube_url` is the link to a youtube video encoded using encodeURIComponent.

Example of creating a new session with session id `abc123` and youtube url `https://www.youtube.com/watch?v=yB1xfGv_PY8`: `localhost:8088/start/abc123/https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjEJUa64NU7s`

Then, to join somebody else's existing youtube sync session, visit `localhost:8088/watch/abc123` in a new browser.

### Inspiration

Project inspired by [@YasserYka](https://github.com/YasserYka/YT-API).

### Contact

Created by [@filahf](https://www.filipahfelt.se/) - feel free to contact me!

### Credit

The overwhelming majority of this was built by [@filahf](https://www.filipahfelt.se/), and can be seen on his youtube sync website https://wevid.online/. I (@stuckinaboot) just simplified the code to make using this within an iframe trivial.
