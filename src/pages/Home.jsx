import { HeaderHome } from "../components/home/Header";
import { ProfitHome } from "../components/home/Profit";
import { RecordHome } from "../components/home/Record";
import { OdersHome } from "../components/home/Oders";

import "../styles/Home.css";

export const Home = () => {
  return (
    <div>
      <HeaderHome />
      <ProfitHome />
      <RecordHome />
      <OdersHome />
    </div>
  );
};
