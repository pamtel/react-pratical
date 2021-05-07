// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

// const useStyles = makeStyles((theme) => ({
//   box: {
//     padding: theme.spacing(3),
//   },
//   title: {
//     marginTop: 30,
//   },
// }));

// const Success = () => {
//   const classes = useStyles();
//   return (
//     <Box className={classes.box}>
//       <Typography variant="h2" align="center">
//         Thank you!
//       </Typography>
//       <Typography component="p" align="center" className={classes.title}>
//         You will get an email with further instructions
//       </Typography>
//     </Box>
//   );
// };

// export default Success;


import React, { useState } from "react";
import MainLayout from "../../_layout/MainLayout";
import { useParams } from "react-router-dom";
import { itemData } from "../../itemData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import chair from "../../../assests/img/item11.jpg";
import Button from "@material-ui/core/Button";
import SliderOne from "../../SliderOne";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

function ItemDetails() {
  const { ItemId } = useParams();
  const [digit, setDigit] = useState(1);

  const increaseDigit = () => {
    setDigit(digit + 1);
  };
  const decreaseDigit = () => {
    if (digit <= 0) {
      setDigit(0);
    } else {
      setDigit(digit - 1);
    }
  };

  const singleItem = itemData.filter((i) => i.id.toString() === ItemId);
  console.log(singleItem);
  return (
    <MainLayout>
      <Link to="/" className="container d-flex text-decoration-none">
        <ArrowBackIosIcon className="color-darkslategray" />
        <p className="ps-4 fontWeight color-darkslategray bag-payment">
          Furniture
        </p>
      </Link>
      <hr className="mt-0" />
      <div className="container pb-3">
        <div className="row">
          <div className="col-sm-5 single-slide">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              //   navigation
              pagination={{ clickable: true }}
              //   scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img src={chair} alt="product" className="w-100" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={chair} alt="product" className="w-100" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={chair} alt="product" className="w-100" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="pt-3 ps-4 col-sm-7">
            <div className="mb-4">
              <h6 className="color-darkslategray fontWeight pb-2">
                Norbury Scandinavian Wood Leg Ottoman
              </h6>
              <sup className="fontWeight color-darkgray info">
                Sold as a peice, Wooden uphoistered ottoman lends a laid-black
                appeal to your indoor space.<br></br> Comes with soft padding
                for extra comfort and support. Solid Wooden and metal free
                ensures durable, long-lasting use. Great as a footrest or extra
                seat when entertaining guests{" "}
              </sup>
            </div>

            <div className="line-height mb-4 fontWeight">
              <div className="d-flex align-items-center">
                <p className="bag-payment pb-1 pe-4">UGX 118,400</p>
                <p className="bg-indiared px-1 py-2 text-white rounded">-20%</p>
              </div>
              <sup className="outdated-price color-darkgray">UGX 148,000</sup>
            </div>

            <div className="border-skyblue rounded pb-0 pt-0 counter item-details">
              <span
                onClick={decreaseDigit}
                className="px-2 py-sm-1 color-skyblue bg-lavender fontWeight"
              >
                -
              </span>
              <span className="px-2 py-sm-1 fontWeight">{digit}</span>
              <span
                onClick={increaseDigit}
                className="px-2 py-sm-1 color-skyblue bg-lavender fontWeight"
              >
                +
              </span>
            </div>

            <div className="d-flex justify-content-between justify-content-sm-start items-detail">
              <Button
                variant="outlined"
                className="me-4 border-royal-blue border-3 px-4 px-sm-5 py-2 color-royal-blue fontWeight"
              >
                Add to bag
              </Button>

              <Button
                variant="contained"
                className="me-4 bg-sandybrown border-3 px-5  py-2 color-royal-blue fontWeight"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 d-none d-sm-block">
        <h5 className="color-darkgray mb-3">RELATED PRODUCTS</h5>
        <SliderOne />
      </div>
    </MainLayout>
  );
}

export default ItemDetails;