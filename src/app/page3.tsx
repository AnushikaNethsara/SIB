import Image from "next/image";
import NavBar from "./components/navbar";
import HorizontalLinearStepper from "./components/steps";
import ProfileCard from "./components/profileCard";
import InfoCard from "./components/InfoCard";

export default function Home() {
  return (
    <>
      <NavBar />
      <HorizontalLinearStepper />
      <ProfileCard />
      <div className="mt-10">
        <InfoCard />

      </div>
    </>
  );
}

