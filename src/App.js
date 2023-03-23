import React from "react";
import { BaseAddress } from "./Environment/Environment";
import CategoriesTabs from "./Categories/CategoriesTabs"

function App() {
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${BaseAddress}/homemenucategories/v1.0.1?device_type=mob`
      );
      response.json().then(response => {
        setState(response);
      });
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <CategoriesTabs data={state} />
      <a href='http://localhost:3000/?tenantId=5B0A6jM6WIpV+2nU2/yeTsmgrUMxT40O4BPWNLmJDcbce724wFstKg==&widgetId=f6AOYJe46RAPuXZG7memWQ==&gaId=4454avc'>redirect ti bookit</a>
    </React.Fragment>
  );
}

export default App;
