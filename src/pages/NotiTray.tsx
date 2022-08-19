import axios from "axios";
import { useEffect, useState, VFC } from "react";
// @ts-ignore
import { useAmitySDK } from "@amityco/ui-kit-open-source";

export const NotiTray: VFC = () => {
  const [state, setState] = useState([]);
  const sdk = useAmitySDK();
  const { accessToken, connected } = sdk;
  useEffect(() => {
    // no accessToken from sdk
    console.log("onLanding",sdk);
    const onLanding = async () => {
      if (accessToken) {
        const res = await axios.get(
          "https://beta.amity.services/notifications/history",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        console.log(res.data);
      }
    };
   // onLanding();
  }, [accessToken, connected]);
  return <div>notifications</div>;
};
