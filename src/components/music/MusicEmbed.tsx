"use client";

import { music } from "@/resources";
import styles from "./MusicEmbed.module.scss";

export default function MusicEmbed() {
  if (!music.display) return null;

  return (
    <section className={styles.musicSection}>
      <h3 className={styles.musicTitle}>{music.title}</h3>
      <p className={styles.musicDescription}>{music.description}</p>

      <a
        href={music.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.musicButton}
      >
        🎧 Open Playlist on Spotify
      </a>
    </section>
  );
}
