import "./styles.css";
import { useState } from "react";
// @ts-ignore
import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit-open-source";

import Login from "./Login";

const initState = () => {
  const url = window.location.href;
  const urlParams = new URLSearchParams(url.split("?")[1]);
  const id = urlParams.get("id") ?? "";
  const region = urlParams.get("region") ?? "";
  const network = urlParams.get("network") ?? "";
  const authToken = urlParams.get("authToken") ?? undefined;
  return { id, region, network, authToken };
};

export default function App() {
  const [state, setState] = useState<{
    id: string;
    network: string;
    region: string;
    authToken?: string;
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
          <AmityUiKitSocial />
        </AmityUiKitProvider>
      )}
    </div>
  );
}
