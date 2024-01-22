import { useSelector } from "react-redux";
import Header from "../../components/Headers";
import Navbar from "../../components/Navbar";
import "./index.scss";

const CommonLayout: React.FC = () => {
  const user_data = useSelector(
    (reducer: any) => reducer.dataForAuthLoginReducer
  );

  return (
    <>
      <Header title={user_data.default_community.community_name}></Header>
      <div className="cl-container">
        <main>
          <Navbar className="cl-navbar" />
        </main>
      </div>
    </>
  );
};
export default CommonLayout;
