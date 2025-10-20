import WildHeader from "./WildlifePage/WildlifeHeader";
import WildMain from "./WildlifePage/WildlifeMain";
import BirdObservations from "./WildlifePage/BirdDashboard";
import WildFooter from "./WildlifePage/WildlifeFooter";

const Wildlife = () => {
  return (
    <div className="wildlife">
      <WildHeader />
      <WildMain />
      <BirdObservations />
      <WildFooter />
    </div>
  );
};

export default Wildlife;