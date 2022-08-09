import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Type-Check',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        It features a blazingly fast type-checker based on optimal normalization-by-evaluation
      </>
    ),
  },
  {
    title: 'Compile',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        It can also compile programs to HVM and Kindelia, and can be used to prove and verify mathematical theorems.
      </>
    ),
  },
  {
    title: 'Benchmarks',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        In preliminary benchmarks, Kind2's type-checker has outperformed Agda, Idris by 90x to 900x, which is an expressive difference. That said, we only tested a few small programs, so there isn't enough data to draw a conclusion yet. We're working on a more extensive benchmark suite.
      </>
    ),
  },
];

function Feature({
  title, 
  // Svg, 
  description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
