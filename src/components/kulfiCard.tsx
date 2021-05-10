import * as React from "react";
import KulfiSvg from "./kulfiSvg";
import {
  Grid,
  useTheme,
  Card,
  Typography,
  CardContent,
  Divider,
} from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";

interface KulfiCardProps {
  data: {
    shortId: string;
    colorTop: string;
    colorMiddle: string;
    colorBottom: string;
    to: string;
    from: string;
    message: string;
  };
  siteUrl: string;
}

const KulfiCard: React.FC<KulfiCardProps> = ({ data, siteUrl }) => {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <KulfiSvg
          height={350}
          colorTop={data.colorTop}
          colorMiddle={data.colorMiddle}
          colorBottom={data.colorBottom}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">
              Your kulfi is freezing. Share it with this link:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Card variant="elevation">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Link color="primary" to={`/kulfi/${data.shortId}`}>
                    {`${siteUrl}/kulfi/${data.shortId}`}
                  </Link>
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="h4"
                  align="left"
                  style={{ marginTop: theme.spacing(2) }}
                >
                  {data.to}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  align="center"
                  style={{ marginBottom: theme.spacing(2) }}
                >
                  {data.message}
                </Typography>
                <Typography variant="h4" align="right">
                  — {data.from}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary">
              {`${data.from} prepared this virtual kulfi for
                    you. You can `}
              <Link color="secondary" to="/create">
                prepare your own
              </Link>
              {` to send to a friend who deserve some sugary
                    treat which won't rot their teeth...`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default KulfiCard;
