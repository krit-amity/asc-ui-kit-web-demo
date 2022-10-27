import { Link, useSearchParams } from "react-router-dom";

export const PageSwitch = () => {
  const [searchParams] = useSearchParams();
  const paramsStr = searchParams.toString();
  return (
    <div style={{ flexDirection: "row", display: "flex" }}>
      <Link to={`social?${paramsStr}`}>
        <div style={{ margin: 16 }}>Social</div>
      </Link>
      <Link to={`chat?${paramsStr}`}>
        <div style={{ margin: 16 }}>Chat</div>
      </Link>
      <Link to={`notitray?${paramsStr}`}>
        <div style={{ margin: 16 }}>NotiTray</div>
      </Link>
    </div>
  );
};