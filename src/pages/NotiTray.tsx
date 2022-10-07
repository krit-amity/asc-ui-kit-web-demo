import axios from "axios";
import { useEffect, useState, FC } from "react";
// @ts-ignore

import {
  AmityUserTokenManager,
  ApiRegion,
  // @ts-ignore
} from "@amityco/js-sdk";

export const NotiTray: FC = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const onLanding = async () => {
      const { accessToken } = await AmityUserTokenManager.createAuthToken(
        "",
        ApiRegion.SG,
        { userId: "test", displayName: "test" }
      );
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
    onLanding();
  }, []);
  return <div>notifications</div>;
};
