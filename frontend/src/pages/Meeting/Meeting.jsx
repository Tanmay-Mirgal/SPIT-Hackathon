import React from "react";
import { useSearchParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const MeetingPage = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const roomId = searchParams.get("roomId");

  let myMeeting = async (element) => {
  
    const appID = 1782856681;
    const serverSecret = "eb8bd2443e9edd7ebe48136d6dbcd9b2";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      username
    );


    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <div
    className="myCallContainer"
    ref={myMeeting}
    style={{ width: '100vw', height: '100vh' }}
  ></div>
  );
};

export default MeetingPage;

