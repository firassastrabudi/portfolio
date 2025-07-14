"use client";

import { music } from "@/resources";

export default function MusicEmbed() {
  if (!music.display) return null;

  return (
    <section className="my-6">
      <h3 className="text-xl font-semibold mb-2">{music.title}</h3>
      <p className="text-sm text-gray-500 mb-4">{music.description}</p>
      <div className="rounded-lg overflow-hidden">
        <iframe
          src={music.embedUrl}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
