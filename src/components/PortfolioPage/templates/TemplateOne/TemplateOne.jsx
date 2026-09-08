import Image from "next/image";
import styles from "./TemplateOne.module.scss";

export default function TemplateOne({ project = {} }) {
  const {
    title,
    subtitle,
    description = [],
    highlightQuote,
    philosophy,
    images = [],
    detailsList = [],
    highlights = [],
  } = project;

  const hasRow1Text = title || subtitle || description?.length > 0 || highlightQuote;
  const hasPhilosophyText = philosophy?.title || philosophy?.description;
  const hasDetailsContent = detailsList?.length > 0 || highlights?.length > 0;
  const stripImages = images.slice(3, 6);

  return (
    <article className={styles.templateWrapper}>
      <div className={styles.layout}>
        
        {/* ROW 1: Hero & Intro */}
        {(images[0] || hasRow1Text || images[1]) && (
          <section className={styles.rowOne}>
            {images[0] && (
              <div className={styles.tallImageWrap}>
                <Image
                  src={images[0]}
                  alt={title || "Architecture portrait highlight"}
                  fill
                  priority
                  className={styles.image}
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
              </div>
            )}

            {(hasRow1Text || images[1]) && (
              <div className={styles.introCol}>
                {hasRow1Text && (
                  <header className={styles.headerContent}>
                    {title && <h1 className={styles.title}>{title}</h1>}
                    {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
                    
                    {description?.length > 0 && (
                      <div className={styles.paragraphs}>
                        {description.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    )}

                    {highlightQuote && (
                      <p className={styles.highlightQuote}>{highlightQuote}</p>
                    )}
                  </header>
                )}

                {images[1] && (
                  <div className={styles.rowOneImageWrap}>
                    <Image
                      src={images[1]}
                      alt="Living room perspective"
                      fill
                      className={styles.image}
                      sizes="(max-width: 860px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* ROW 2: Philosophy */}
        {(hasPhilosophyText || images[2]) && (
          <section className={styles.rowTwo}>
            {hasPhilosophyText && (
              <div className={styles.philosophyCol}>
                {philosophy?.title && (
                  <h3 className={styles.sectionTitle}>{philosophy.title}</h3>
                )}
                {philosophy?.description && (
                  <p className={styles.bodyText}>{philosophy.description}</p>
                )}
              </div>
            )}

            {images[2] && (
              <div className={styles.philosophyImageWrap}>
                <Image
                  src={images[2]}
                  alt="Interior angle view"
                  fill
                  className={styles.image}
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
              </div>
            )}
          </section>
        )}

        {/* ROW 3: Three Image Strip */}
        {stripImages.length > 0 && (
          <section className={styles.rowThree}>
            {stripImages.map((src, i) => (
              <div key={i} className={styles.stripImageWrap}>
                <Image
                  src={src}
                  alt={`Detail shot ${i + 1}`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 520px) 100vw, 33vw"
                />
              </div>
            ))}
          </section>
        )}

        {/* ROW 4: Details */}
        {(images[6] || hasDetailsContent) && (
          <section className={styles.rowFour}>
            {images[6] && (
              <div className={styles.detailsImageWrap}>
                <Image
                  src={images[6]}
                  alt="Full interior presentation"
                  fill
                  className={styles.image}
                  sizes="(max-width: 860px) 100vw, 55vw"
                />
              </div>
            )}

            {hasDetailsContent && (
              <div className={styles.detailsCol}>
                <h3 className={styles.detailsHeading}>DETAILS</h3>

                {detailsList?.length > 0 && (
                  <ul className={styles.bulletList}>
                    {detailsList.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                {highlights?.length > 0 && (
                  <ul className={`${styles.bulletList} ${styles.highlightsList}`}>
                    {highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </section>
        )}

      </div>
    </article>
  );
}