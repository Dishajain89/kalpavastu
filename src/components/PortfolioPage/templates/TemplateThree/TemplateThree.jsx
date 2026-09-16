import Image from "next/image";
import styles from "./TemplateThree.module.scss";

export default function TemplateThree({ project = {} }) {
  const {
    title,
    heroHeading,
    heroTagline,
    quote,
    story,
    features = [],
    images = {},
  } = project;

  const {
    hero,
    galleryTall,
    galleryGrid = [],
    about,
    services,
  } = images;

  return (
    <article className={styles.templateWrapper}>
      <div className={styles.container}>

        {/* 1. EDITORIAL HERO BANNER */}
        {hero && (
          <section className={styles.heroSection}>
            <div className={styles.heroImageWrap}>
              <Image
                src={hero}
                alt={title || "Office Hero View"}
                fill
                priority
                className={styles.coverImg}
                sizes="100vw"
              />
              <div className={styles.heroOverlay}>
                {title && <span className={styles.projectClient}>{title}</span>}
                {heroHeading && <h1 className={styles.heroTitle}>{heroHeading}</h1>}
                {heroTagline && <p className={styles.heroSubtitle}>{heroTagline}</p>}
              </div>
            </div>
          </section>
        )}

        {/* 2. PHILOSOPHY QUOTE CALLOUT */}
        {quote && (
          <section className={styles.quoteSection}>
            <div className={styles.quoteCard}>
              <span className={styles.quoteMark}>“</span>
              <blockquote className={styles.quoteText}>{quote}</blockquote>
            </div>
          </section>
        )}

        {/* 3. ASYMMETRIC PORTFOLIO GRID */}
        {(galleryTall || galleryGrid.length > 0) && (
          <section className={styles.gallerySection}>
            <div className={styles.sectionHeader}>
              <span className={styles.categoryBadge}>PORTFOLIO</span>
              <h2 className={styles.galleryTitle}>Spatial Perspectives</h2>
            </div>

            <div
              className={`${styles.galleryLayout} ${
                !galleryTall ? styles.galleryLayoutSingle : ""
              }`}
            >
              {/* Left Tall Focal Column */}
              {galleryTall && (
                <div className={styles.tallCol}>
                  <div className={styles.tallImageWrap}>
                    <Image
                      src={galleryTall}
                      alt="Primary Architectural Focal"
                      fill
                      className={styles.coverImg}
                      sizes="(max-width: 860px) 100vw, 40vw"
                    />
                  </div>
                </div>
              )}

              {/* Right 2x2 Grid */}
              {galleryGrid.length > 0 && (
                <div className={styles.gridCol}>
                  {galleryGrid.slice(0, 4).map((imgSrc, idx) => (
                    <div key={idx} className={styles.gridImageWrap}>
                      <Image
                        src={imgSrc}
                        alt={`Workspace Zone ${idx + 1}`}
                        fill
                        className={styles.coverImg}
                        sizes="(max-width: 860px) 50vw, 30vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* 4. ABOUT / NARRATIVE SPLIT CARD */}
        {(about || story) && (
          <section className={styles.editorialCardSection}>
            <div className={styles.splitCardBox}>
              {about && (
                <div className={styles.cardImageCol}>
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={about}
                      alt="Workplace atmosphere"
                      fill
                      className={styles.coverImg}
                      sizes="(max-width: 860px) 100vw, 50vw"
                    />
                  </div>
                </div>
              )}

              <div className={styles.cardTextCol}>
                <span className={styles.categoryBadge}>DESIGN CONCEPT</span>
                <h3 className={styles.cardTitle}>{story?.title || "About The Space"}</h3>
                <div className={styles.cardParagraphs}>
                  {story?.paragraphs?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 5. SERVICES / SPATIAL SPECIFICATIONS CARD */}
        {(services || features.length > 0) && (
          <section className={styles.editorialCardSection}>
            <div className={`${styles.splitCardBox} ${styles.reversedBox}`}>
              {services && (
                <div className={styles.cardImageCol}>
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={services}
                      alt="Executive spatial setup"
                      fill
                      className={styles.coverImg}
                      sizes="(max-width: 860px) 100vw, 50vw"
                    />
                  </div>
                </div>
              )}

              <div className={styles.cardTextCol}>
                <span className={styles.categoryBadge}>FUNCTIONALITY</span>
                <h3 className={styles.cardTitle}>Spatial Zoning</h3>
                <p className={styles.leadPara}>
                  Thoughtfully segmented zones designed to support privacy, seamless flow, and high productivity.
                </p>

                {features.length > 0 && (
                  <ul className={styles.featureList}>
                    {features.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        )}

      </div>
    </article>
  );
}