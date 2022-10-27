import { useEffect, useState, FC } from "react";
import {
  AmityUserTokenManager,
  // @ts-ignore
} from "@amityco/js-sdk";
import { useSearchParams } from "react-router-dom";
import { axiosBetaSetToken } from "../app/axiosBeta";
import { getNotificationHistory } from "../app/notificationTray";

export const NotiTray: FC = () => {
  const [searchParams] = useSearchParams();
  const network = searchParams.get("network");
  const userId = searchParams.get("userId");
  const region = searchParams.get("region");
  const [state, setState] = useState("hello");
  useEffect(() => {
    const onLanding = async () => {
      const { accessToken } = await AmityUserTokenManager.createAuthToken(
        network,
        region,
        { userId }
      );
      if (accessToken) {
        axiosBetaSetToken(accessToken);
        const res = await getNotificationHistory();

        console.log(JSON.stringify(res.data));
        setState(JSON.stringify(res.data, null, "\t"));
      }
    };
    onLanding().catch((_) => {});
  }, []);
  return (
    <div>
      notifications
      <div>{state}</div>
    </div>
  );
};
