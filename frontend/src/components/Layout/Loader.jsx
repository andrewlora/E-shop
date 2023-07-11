import Lottie from "lottie-react";
import animationData from "../../assets/animations/24151-ecommerce-animation.json";

const Loader = () => {
  const style = {
    height: 300,
    width: 300,
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Lottie options={defaultOptions} style={style} />
    </div>
  );
};

export default Loader;
