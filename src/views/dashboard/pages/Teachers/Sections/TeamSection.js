import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../../../components/Grid/GridContainer";
import GridItem from "../../../../../components/Grid/GridItem";
import Card from "../../../../../components/Card/Card";
import CardBody from "../../../../../components/Card/CardBody";

import styles from "../../../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle";

import team1 from "../../../../../assets/img/faces/team1.png";
import team2 from "../../../../../assets/img/faces/team2.jpg";
import team3 from "../../../../../assets/img/faces/team3.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jocelyn Belden
                <br />
                <small className={classes.smallTitle}>Coordinator</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Example Text. Example Text. Example Text. Example Text.
                  Example Text. Example Text. Example Text. Example Text.
                  Example Text. Example Text. Example Text. Example Text.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Oralia Delgada
                <br />
                <small className={classes.smallTitle}>
                  K-12 Spanish Instructor
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I am an instructor who specializes in teaching Spanish for
                  people of all ages. I have experience in accounting and can
                  help adults who would like to learn Spanish for
                  sector-specific lessons in business. I also have over 23 years
                  worth of experience in the educational field, and I enjoy
                  teaching lessons from preschool- to older children! I will
                  work hard to ensure you can understand Spanish so that you are
                  capable of reading, writing, and speaking the language.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Antonella Vintimilla
                <br />
                <small className={classes.smallTitle}>French Instructor</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Je m'appelle Antonella Vintimilla. Je me suis spécialisée dans
                  la langue française dans le cadre de ma carrière en Relations
                  Internationales. Actuellement, Je suis en train de finir mon
                  master 2 en Intelligence Economique à Paris. Je suis
                  professeure depuis plus de quatre ans, être professeure est ma
                  passion. Un de mes objectifs est d'enseigner la culture
                  française à travers l'apprentissage de la langue.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
