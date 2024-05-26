import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const CardDeatils = ({ image, title, description, blog }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} elevation={10} data-aos="zoom-in">
        <CardMedia sx={{ height: 200 }} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            className="line-clamp-3"
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>

        <CardActions sx={{ marginBottom: "10px" }}>
          <Link to={`/agents/${blog.id}`}>
            <Button
              size="small"
              variant="contained"
              sx={{ borderRadius: "50px", padding: "8px 20px" }}
            >
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

CardDeatils.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  blog: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default CardDeatils;
