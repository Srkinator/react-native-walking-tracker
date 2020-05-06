import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = ({ navigation }) => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(Context);

  const { saveTrack } = useSaveTrack(navigation)

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button
            title="Save Recording"
            onPress={saveTrack}
          />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;