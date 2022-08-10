import "./styles.css";
import { useState } from "react";

import {
  AmityUiKitProvider,
  AmityUiKitSocial,
  AmityUiKitChat,
  // @ts-ignore
} from "@amityco/ui-kit-open-source";

import Login from "./Login";

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
          {state.page === "chat" ? <AmityUiKitChat /> : <AmityUiKitSocial />}
        </AmityUiKitProvider>
      )}
    </div>
  );
}
