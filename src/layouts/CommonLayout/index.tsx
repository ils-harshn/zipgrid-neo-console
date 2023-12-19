import Header from "../../components/Headers";
import Navbar from "../../components/Navbar";
import "./index.scss";

const CommonLayout: React.FC = () => {
  return (
    <>
      <Header title="Treasure Town Society"></Header>
      <div className="cl-container">
        <main>
          <Navbar className="cl-navbar" />
        </main>
      </div>
    </>
  );
};
export default CommonLayout;
