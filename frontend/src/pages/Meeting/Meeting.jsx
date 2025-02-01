import React from "react";
import { useSearchParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const MeetingPage = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const roomId = searchParams.get("roomId");

  let myMeeting = async (element) => {
  
    const appID = import.meta.env.VITE_ZEGOCLOUD_APP_ID;
    const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      Number(appID),
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

