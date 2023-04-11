import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Care Commerce",
    Svg: require("@site/static/img/home/cc_logo.svg").default,
    description: <>Care Commerce is a seller app and it is a gateway for the seller.</>,
  },

  {
    title: "ONDC API",
    Svg: require("@site/static/img/home/ondc_api.svg").default,
    description: <>Open Network for Digital Commerce (ONDC) API is handling buying and selling .</>,
  },
  {
    title: "Seller API",
    Svg: require("@site/static/img/home/seller_api.svg").default,
    description: <>Seller API handling of seller aggregator and logistic providers.</>,
  },
];

function Feature({ Svg, title, description }) {
  let link;
  if (title === "Care Commerce") {
    link = "/docs/category/overview";
  } else if (title === "ONDC API") {
    link = "/docs/ONDC/Introduction";
  } else {
    link = "/docs/category/seller-api";
  }
  return (
    <div className={clsx("col col--4")}>
      <Link to={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <h3 style={{ fontWeight: 600 }}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
