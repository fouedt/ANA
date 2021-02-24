import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

import { storage } from "../firebase";

export default function AdForm(props) {
  const [pubKey, setPubKey] = useState("");
  const [privKey, setPrivKey] = useState("");
  const [targetDiffusion, setTargetDiffusion] = useState(0);
  const [priceDiffusion, setPriceDiffusion] = useState(0);

  const [ad, setAd] = useState(null);
  const [url, setUrl] = useState("");

  const onSubmit = event => {
    event.preventDefault();

    const uploadTask = storage.ref(`ads/${ad.name}`).put(ad);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("ads")
          .child(ad.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            props.createTabAd(
              url
            );
            console.log(url);
          });
      }
    );
  };

  const handleChange = e => {
    if (e.target.files[0]) {
      setAd(e.target.files[0]);
    }
  };

  return (
    
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <input type="file" onChange={handleChange} accept="video/mp4" />
        </Form.Field>

        <Button primary loading={props.loading}>
          Upload
        </Button>
      </Form>
    </div>
  );
}
