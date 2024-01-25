import React, { useState } from "react";
import PortList1 from "./PortList1";
import PortList2 from "./PortList2";

const PortListApp = () => {
  const [currentPage, setCurrentPage] = useState(<PortList1 />);

  return (
    <div>
      <button onClick={() => setCurrentPage(<PortList1 />)}>Port List 1</button>
      <button onClick={() => setCurrentPage(<PortList2 />)}>Port List 2</button>
      <br />
      {currentPage}
    </div>
  );
};

export default PortListApp;
