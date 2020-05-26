import React, { useState } from "react";
import { uuid } from "uuidv4";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";

const CreateSession = (props) => {
  const history = useHistory();
  const [url, setUrl] = useState("");
  const notify = () => toast(<div>&nbsp; Invalid Link!</div>);

  const sessionID = uuid().slice(0, 6);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    var videoID = youtubeParser(url);
    if (!videoID) {
      notify();
      return;
    }
    props.session(videoID, sessionID, true);
    history.push("/watch/leader");
  };

  const youtubeParser = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };

  return (
    <>
      <div className="input-container">
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            placeholder="Paste a YouTube link "
            className="input-field"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="input-button" type="Submit">
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateSession;
