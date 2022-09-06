import "./styles.css";
import { useMemo, useState } from "react";

import {
  AmityUiKitProvider,
  AmityUiKitSocial,
  AmityUiKitChat,
  // @ts-ignore
  // } from "@amityco/ui-kit-open-source";
} from "@amityco/ui-kit";

import Login from "./Login";
// import { NotiTray } from "./pages/NotiTray";

const initState = () => {
  const url = window.location.href;
  const params = url.split("?")[1];
  const urlParams = new URLSearchParams(params);
  const page = urlParams.get("page") ?? "social";
  const id = urlParams.get("id") ?? "";
  const region = urlParams.get("region") ?? "";
  const network = urlParams.get("network") ?? "";
  const authToken = urlParams.get("authToken") ?? undefined;
  return { id, region, network, authToken, page };
};

export default function App() {
  const [state, setState] = useState<{
    id: string;
    network: string;
    region: string;
    authToken?: string;
    page?: string;
  }>(initState);

  const renderpage = useMemo(() => {
    let renderpage = <AmityUiKitSocial />;
    if (state.page === "chat") renderpage = <AmityUiKitChat />;
    // if (state.page === "notitray") renderpage = <NotiTray />;
    return renderpage;
  }, [state.page]);

  return (
    <div className="App">
      {!state.id ? (
        <Login onSubmit={setState} />
      ) : (
        <AmityUiKitProvider
          apiRegion={state.region}
          apiKey={state.network}
          userId={state.id}
          authToken={state.authToken}
        >
          {renderpage}
        </AmityUiKitProvider>
      )}
    </div>
  );
}
