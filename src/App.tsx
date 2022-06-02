import "./styles.css";
import { useEffect, useState } from "react";
// @ts-ignore
import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit";

import Login from "./Login";

export default function App() {
  const [state, setState] = useState<{
    id: string;
    network: string;
    region: string;
  }>({
    id: "",
    network: "",
    region: "",
  });

  useEffect(() => {
    const url = window.location.href;
    const urlParams = new URLSearchParams(url.split("?")[1]);
    const id = urlParams.get("id") ?? "";
    const region = urlParams.get("region") ?? "";
    const network = urlParams.get("network") ?? "";
    setState({ id, region, network });
    window.history.replaceState(null, "ASC", "/")
  }, []);

  return (
    <div className="App">
      {!state.id ? (
        <Login onSubmit={setState} />
      ) : (
        <AmityUiKitProvider
          apiRegion={state.region}
          apiKey={state.network}
          userId={state.id}
        >
          <AmityUiKitSocial />
        </AmityUiKitProvider>
      )}
    </div>
  );
}
