import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Foto1 from "../../Images/Foto1.jpg";
import Foto2 from "../../Images/Foto2.jpg";
import Foto3 from "../../Images/Foto3.jpg";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function start() {
    navigate("/vans");
  }

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          zIndex: 999,
          left: "10vw",
          bgcolor: "#ffab40",
          width: "1000",
          m: 3,
          p: 3,
          borderRadius: "16px",
        }}
      >
        <Typography sx={{ width: 1000, fontFamily: "Segoe UI", color: "white" }} variant="h2">
          VIVE LA EXPERIENCIA CAMPER
        </Typography>
      </Box>
      <Button
        size="small"
        variant="text"
        sx={{
          position: "absolute",
          zIndex: 999,
          left: "42vw",
          top: "40vh",
          bgcolor: "#ffc400",
          textDecoration: "none",
        }}
        onClick={start}
      >
        CONOCE NUESTRA CAMPER
      </Button>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        stopOnHover={false}
        labels={{ items: "hola" }}
      >
        <div>
          <img alt="foto1" src={Foto1} />
        </div>
        <div>
          <img alt="foto2" src={Foto2} />
        </div>
        <div>
          <img alt="foto3" src={Foto3} />
        </div>
      </Carousel>
    </>
  );
}
