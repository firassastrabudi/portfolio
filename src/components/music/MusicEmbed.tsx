"use client";

import { music } from "@/resources";
import styles from "./MusicEmbed.module.scss";

export default function MusicEmbed() {
  if (!music.display) return null;

  return (
    <section className={styles.musicSection}>
      <h3 className={styles.musicTitle}>{music.title}</h3>
      <p className={styles.musicDescription}>{music.description}</p>

      <div className={styles.musicEmbedWrapper}>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src={music.embedUrl}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <a
        href={music.embedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.musicButton}
      >
        🎧 Open Playlist on Spotify
      </a>
    </section>
  );
}
