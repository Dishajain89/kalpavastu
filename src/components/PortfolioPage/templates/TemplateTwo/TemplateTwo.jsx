import Image from "next/image";
import styles from "./TemplateTwo.module.scss";

export default function TemplateTwo({ project = {} }) {
  const {
    brand,
    title,
    tagline,
    heroDescription,
    quoteBadge,
    philosophy,
    details = [],
    testimonial,
    images = {},
  } = project;

  const { hero, strip = [], editorialTall, panoramic, splitLeft, splitRight } = images;

  return (
    <article className={styles.templateWrapper}>
      <div className={styles.container}>

        {/* 1. HERO BANNER WITH BOTTOM-LEFT OVERLAY */}
        {hero && (
          <section className={styles.heroSection}>
            <div className={styles.heroImageWrap}>
              <Image
                src={hero}
                alt={title || "Project Hero"}
                fill
                priority
                className={styles.coverImg}
                sizes="100vw"
              />
              <div className={styles.heroOverlay}>
                {brand && <span className={styles.heroBrand}>{brand}</span>}
                {title && <h1 className={styles.heroTitle}>{title}</h1>}
                {heroDescription && (
                  <p className={styles.heroDesc}>{heroDescription}</p>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 2. MINIMAL STATEMENT / QUOTE STRIP */}
        {(quoteBadge || tagline) && (
          <section className={styles.statementSection}>
            {quoteBadge?.title && (
              <h2 className={styles.statementTitle}>{quoteBadge.title}</h2>
            )}
            {quoteBadge?.subtitle && (
              <span className={styles.statementSubtitle}>{quoteBadge.subtitle}</span>
            )}
            {tagline && <p className={styles.statementText}>{tagline}</p>}
          </section>
        )}

        {/* 3. MULTI-COLUMN ARCHITECTURAL THUMBNAILS STRIP */}
        {strip.length > 0 && (
          <section className={styles.stripSection}>
            <div className={styles.stripGrid}>
              {strip.map((imgSrc, idx) => (
                <div key={idx} className={styles.stripItem}>
                  <Image
                    src={imgSrc}
                    alt={`Detail ${idx + 1}`}
                    fill
                    className={styles.coverImg}
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. EDITORIAL SPLIT (Text & Details Left / Tall Image Right) */}
        <section className={styles.editorialSection}>
          <div className={styles.editorialTextCol}>
            {philosophy?.heading && (
              <h2 className={styles.sectionHeading}>{philosophy.heading}</h2>
            )}
            {philosophy?.paragraphs?.map((p, idx) => (
              <p key={idx} className={styles.bodyPara}>{p}</p>
            ))}

            {details.length > 0 && (
              <div className={styles.specsBox}>
                <h3 className={styles.specsHeading}>DETAILS</h3>
                <ul className={styles.bulletList}>
                  {details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {editorialTall && (
            <div className={styles.editorialImageCol}>
              <div className={styles.tallImageWrap}>
                <Image
                  src={editorialTall}
                  alt="Editorial architectural view"
                  fill
                  className={styles.coverImg}
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
              </div>
            </div>
          )}
        </section>

        {/* 5. FULL-WIDTH PANORAMIC SHOWCASE */}
        {panoramic && (
          <section className={styles.panoramicSection}>
            <div className={styles.panoramicWrap}>
              <Image
                src={panoramic}
                alt="Wide interior showcase"
                fill
                className={styles.coverImg}
                sizes="100vw"
              />
            </div>
          </section>
        )}

        {/* 6. TWO-COLUMN SPLIT SHOWCASE WITH BOTTOM TEXT */}
        {(splitLeft || splitRight) && (
          <section className={styles.splitGridSection}>
            {splitLeft && (
              <div className={styles.splitCard}>
                <div className={styles.splitImageWrap}>
                  <Image
                    src={splitLeft}
                    alt="Space Detail Left"
                    fill
                    className={styles.coverImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.splitCardCaption}>
                  <h4>OUTDOORS & ARCHITECTURE</h4>
                  <p>A natural extension of living space integrating light and materiality.</p>
                </div>
              </div>
            )}

            {splitRight && (
              <div className={styles.splitCard}>
                {/*
                   <div className={styles.splitImageWrap}>
                  <Image
                    src={splitRight}
                    alt="Space Detail Right"
                    fill
                    className={styles.coverImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                  */}
               
               {/*
                <div className={styles.splitCardCaption}>
                  <h4>{testimonial?.client || "CLIENT TESTIMONY"}</h4>
                  <p>{testimonial?.text || "Spaces crafted for silence, comfort and memory."}</p>
                </div>
                */} 
              </div>
            )}
          </section>
        )}

      </div>
    </article>
  );
}