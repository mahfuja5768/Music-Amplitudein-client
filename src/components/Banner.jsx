

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
        <h4 className="flex uppercase text-red  font-bold">ToNight</h4>
        <h2 className="flex uppercase text-3xl font-medium">Rong Dhonu</h2>
        <div className="flex items-start flex-col gap-5 my-6">
          <button className="btn bg-red text-white rounded-full font-medium px-6 uppercase py-2">
            Buy Ticket
          </button>
          <button className="btn font-bold bg-transparent border-2 border-red rounded-full px-6 uppercase py-2">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
