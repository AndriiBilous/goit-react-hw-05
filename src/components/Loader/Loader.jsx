import { Bars } from "react-loader-spinner";
function Loader() {
  return (
    <Bars
      visible={true}
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClass={""}
    />
  );
}
export default Loader;
