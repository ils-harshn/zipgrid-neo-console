import Header from "../../components/Headers";
import "./index.scss";

const CommonLayout: React.FC = () => {
  return (
    <>
      <Header title="Treasure Town Society"></Header>
      <div className="cl-container">
        <main>Container</main>
      </div>
    </>
  );
};
export default CommonLayout;
