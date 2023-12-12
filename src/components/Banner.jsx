import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-5 px-3">
      <div className="lg:col-span-4 ">
        <div className="carousel w-full ">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={
                "https://i.ibb.co/YRxNd7b/240-F-634245210-M4-Hesek-AWlj-Pt0wf3ty83zt-Or1-Eey-Bu-C.jpg"
              }
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={
                "https://i.ibb.co/MPkbX1V/music-band-group-perform-concert-stage-guitarist-941600-15694.jpg"
              }
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={
                "https://i.ibb.co/Mfy3FMy/240-F-653748297-n-Lm9-KXf-Usxj-OMWZn-Zk-RPtjy-U2-EPFx-JDy.jpg"
              }
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="my-24 mx-5">
        <h4 className="flex   font-bold">
          Explore upcoming Muse concerts and events in your city or worldwide.
          Stay in the loop with the latest tour dates and venues.
        </h4>
        <h2 className="flex uppercase text-3xl text-red font-medium">Go Go Go</h2>
        <div className="flex items-start flex-col gap-5 my-6">
        
          <Link to='/shows'>
          <button className="btn font-bold bg-transparent border-2 border-red rounded-full px-6 uppercase py-2">
           See Shows
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
