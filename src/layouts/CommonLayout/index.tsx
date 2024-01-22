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
      <Header
        title={`${user_data.default_community.community_name} - ${user_data.default_community.blocks.block_name} ${user_data.default_community.blocks.flat_no}`}
      ></Header>
      <div className="cl-container">
        <main>
          <Navbar className="cl-navbar" />
        </main>
      </div>
    </>
  );
};
export default CommonLayout;
