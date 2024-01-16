import { useSelector } from "react-redux";
import { CommonLayout } from "../../layouts";

const Home: React.FC = () => {
  const user_data = useSelector(
    (reducer: any) => reducer.dataForAuthLoginReducer
  );

  console.log(user_data);
  return <CommonLayout />;
};

export default Home;
