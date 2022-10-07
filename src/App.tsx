import "./styles.css";
import { HashRouter, Route, Routes, useSearchParams } from "react-router-dom";
import {
  AmityUiKitProvider,
  AmityUiKitSocial,
  AmityUiKitChat,
  // @ts-ignore
} from "@amityco/ui-kit";

import Login from "./Login";
import { NotiTray } from "./pages/NotiTray";

const MainApp = () => {
  const [searchParams] = useSearchParams();
  const network = searchParams.get("network");
  const userId = searchParams.get("userId");
  const region = searchParams.get("region");
  const authToken = searchParams.get("authToken") ?? undefined;
  return (
    <AmityUiKitProvider
      apiRegion={region}
      apiKey={network}
      userId={userId}
      authToken={authToken}
    >
      <Routes>
        <Route path="chat" element={<AmityUiKitChat />} />
        <Route path="social" element={<AmityUiKitSocial />} />
        <Route path="notitray" element={<NotiTray />} />
      </Routes>
    </AmityUiKitProvider>
  );
};

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<MainApp />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
