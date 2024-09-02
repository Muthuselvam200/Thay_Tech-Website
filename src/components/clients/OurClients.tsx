import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import imageList from "./Images.json";

const slidesData = [
  {
    imgSrc: "/Client-Logos/Oracle.avif",
    testimonial: "Some of the best work that was done!",
    description:
      "Thay technologies is the best place to learn and explore latest technologies on Oracle. Srini is the best mentor and I'm grateful for all learning that I've got from him. He goes above and beyond just teaching and provides career guidance with personal care. While teaching, he ensures that the students understand conceptually and also practically to resolve real time problems.",
    name: "Anna Smith",
    position: "Senior Web Designer",
  },
  {
    imgSrc: "/Client-Logos/tata-consultancy-services.avif",
    testimonial: "Some of the best work that was done!",
    description:
      "I take immense pride in presenting myself as ex-Thai Technology associate, who has learned Oracle RAC, Goldengate and Oracle apps DBA from Srinivasan (Srini), I have been till now been successful in all my DBA endeavors.",
    name: "Jane Smith",
    position: "Senior Architect",
  },
];

const OurClients = () => {
  const basePath = "/images/";
  return (
    <>
      <div className="relative z-0">
        <div className="absolute inset-0 flex items-center justify-between">
          <div className="w-1/3 h-full" />
          <div className="w-4/6 ml-16 h-full" />
        </div>

        <div className="relative z-40 xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container">
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={slidesData.length}
          >
            <div className="flex flex-col xl:flex-row xl:items-center">
              <h1 className="text-5xl font-bold leading-tight text-gray-800 xl:block hidden">
                What our clients are
                <br />
                saying
              </h1>
              <h1 className="text-5xl font-bold leading-tight lg:leading-10 text-gray-800 xl:hidden block">
                What our clients are saying
              </h1>
            </div>

            <Slider>
              {slidesData.map((slide, index) => (
                <Slide key={index} index={index}>
                  <div className="flex flex-col lg:flex-row lg:items-start">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <img
                        src={slide.imgSrc}
                        alt="Profile"
                        className="w-full h-full object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold text-gray-800">
                          {slide.testimonial}
                        </h1>
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                          {slide.description}
                        </p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium text-gray-800">
                          {slide.name}
                        </p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                          {slide.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>

            <div className="flex items-center mt-8">
              <ButtonBack
                className="cursor-pointer"
                role="button"
                aria-label="previous slide"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                  alt="previous"
                />
              </ButtonBack>
              <ButtonNext
                role="button"
                aria-label="next slide"
                className="cursor-pointer ml-2"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                  alt="next"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>

        <div className="relative z-10 xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center mb-8">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <h3 className="text-5xl font-bold leading-tight lg:leading-10 text-gray-800 my-8">
                  Our Clients
                </h3>
                <h2
                  className="text-3xl mb-2 text-gray-600"
                  style={{ fontSize: "18px" }}
                >
                  We have crossed different levels of milestones in a very short
                  span of time which enabled us to compete with leading
                  industries in the field. We enable organizations to improve
                  quality and predictability while reducing time-to-market and
                  overall cost. Our technical teams frequently deliver the
                  corporate training and technical consulting directly or
                  through other preferred vendors for the list of clients below.
                </h2>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={`/img1.avif`}
                  alt="ClientsPageImage"
                  className="w-full rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {imageList.map((image, index) => (
                <img
                  key={index}
                  src={`${basePath}${image}`}
                  alt={`Client ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
