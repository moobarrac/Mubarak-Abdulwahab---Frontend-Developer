import React, { useState } from "react";
import { Banner, DataGrid, SearchForm, Popup } from "./components";
import SpaceImage from "./styling/images/space.jpg";

function App() {
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  const handleSelectCapsule = (capsule) => {
    setSelectedCapsule(capsule);
  };

  const handleClosePopup = () => {
    setSelectedCapsule(null);
  };

  return (
    <div
      className="relative bg-black text-white overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${SpaceImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Banner />
      <SearchForm />
      <DataGrid onSelectCapsule={handleSelectCapsule} />
      <Popup
        isOpen={!!selectedCapsule}
        close={handleClosePopup}
        capsule={selectedCapsule}
      />
    </div>
  );
}

export default App;
