import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import KulfiSvg from "../components/kulfiSvg";
import {
  Box,
  Grid,
  useTheme,
  Card,
  CardContent,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import { Button } from "gatsby-material-ui-components";
import { green } from "@material-ui/core/colors";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormikMuiTextField from "../components/FormikMuiTextField";
import { navigate } from "gatsby";
import { gql, useMutation } from "@apollo/client";
import useSiteMetadata from "../hooks/useSiteMetaData";

const CREATE_KULFI = gql`
  mutation CreateKulfi(
    $colorTop: String!
    $colorMiddle: String!
    $colorBottom: String!
    $to: String!
    $from: String!
    $message: String!
  ) {
    createKulfi(
      colorTop: $colorTop
      colorMiddle: $colorMiddle
      colorBottom: $colorBottom
      to: $to
      from: $from
      message: $message
    ) {
      id
      colorTop
      colorMiddle
      colorBottom
      to
      from
      message
      shortId
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  colorPickerLabel: {
    width: 40,
    height: 40,
    borderRadius: 24,
    border: `solid 2px #fff`,
    display: "block",
    margin: 30,
    overflow: "hidden",
    boxShadow: "red 0 0 14px",

    //   border: solid 2px #fff;
    //   display: block;
    //   box-shadow: #000 0 0 14px;
  },
  colorPicker: {
    width: 60,
    height: 60,
    marginTop: -10,
    marginLeft: -10,
    cursor: "pointer",
  },
}));

// markup
const CreatePage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { slogan } = useSiteMetadata();
  const [colorTop, setColorTop] = React.useState("#d52358");
  const [colorMiddle, setColorMiddle] = React.useState("#e95946");
  const [colorBottom, setColorBottom] = React.useState("#deaa43");
  const [createKulfi, { loading: createKulfiLoading }] = useMutation(
    CREATE_KULFI
  );
  const handleFreezeKulfy = async (
    values: {
      to: string;
      from: string;
      message: string;
    },
    formikHelpers: FormikHelpers<{
      to: string;
      from: string;
      message: string;
    }>
  ) => {
    try {
      var kulfi = await createKulfi({
        variables: {
          colorTop,
          colorBottom,
          colorMiddle,
          to: values.to,
          from: values.from,
          message: values.message,
        },
      });
      console.log("Create Kulfi Successfully", kulfi);
      await navigate(`/dynamickulfi/${kulfi.data.createKulfi.shortId}`);
    } catch (error) {
      console.log("Create Kulfi Error", error);
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Seo title={slogan} />
      <Box mx="auto" textAlign="center">
        <Grid container>
          <Grid item xs={6} sm={3}>
            <KulfiSvg
              height={350}
              colorTop={colorTop}
              colorMiddle={colorMiddle}
              colorBottom={colorBottom}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              //   justifyContent="flex-start"
              style={{ height: "100%" }}
            >
              <label
                htmlFor="colorPickerTop"
                className={classes.colorPickerLabel}
              >
                <input
                  id="colorPickerTop"
                  name="colorPickerTop"
                  className={classes.colorPicker}
                  type="color"
                  value={colorTop}
                  onChange={(e) => {
                    setColorTop(e.target.value);
                  }}
                />
              </label>
              <label
                htmlFor="colorPickerMiddle"
                className={classes.colorPickerLabel}
              >
                <input
                  id="colorPickerMiddle"
                  name="colorPickerMiddle"
                  className={classes.colorPicker}
                  type="color"
                  value={colorMiddle}
                  onChange={(e) => {
                    setColorMiddle(e.target.value);
                  }}
                />
              </label>
              <label
                htmlFor="colorPickerBottom"
                className={classes.colorPickerLabel}
              >
                <input
                  id="colorPickerBottom"
                  name="colorPickerBottom"
                  className={classes.colorPicker}
                  type="color"
                  value={colorBottom}
                  onChange={(e) => {
                    setColorBottom(e.target.value);
                  }}
                />
              </label>
              <div></div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card variant="elevation">
              <CardContent>
                <Formik
                  initialValues={{ to: "", from: "", message: "" }}
                  validationSchema={Yup.object({
                    to: Yup.string().trim().required().min(1).max(100),
                    from: Yup.string().trim().required().min(1).max(500),
                    message: Yup.string().trim().required().min(1).max(100),
                  })}
                  onSubmit={handleFreezeKulfy}
                >
                  {(props) => (
                    <Form autoComplete="off">
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <FormikMuiTextField
                            name="to"
                            label="To"
                            variant="outlined"
                            fullWidth
                            autoFocus
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormikMuiTextField
                            name="message"
                            label="Message"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={5}
                            rowsMax={5}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormikMuiTextField
                            name="from"
                            label="From"
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            size="large"
                            type="submit"
                            startIcon={
                              props.isSubmitting && (
                                <CircularProgress color="primary" size="1rem" />
                              )
                            }
                            disabled={props.isSubmitting}
                            style={{ height: "100%" }}
                          >
                            Freeze It
                          </Button>
                        </Grid>
                      </Grid>

                      {/* <hr />
              <pre>{JSON.stringify(props.errors, null, 4)}</pre>
              <pre>{JSON.stringify(props.values, null, 4)}</pre> */}
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default CreatePage;
