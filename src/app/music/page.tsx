import {
  Column,
  Flex,
  Heading,
  Avatar,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";

import { baseURL, music, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: music.title,
    description: music.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(music.title)}`,
    path: "/music",
  });
}

export default function MusicPage() {
  return (
    <Column maxWidth="m" paddingY="xl" paddingX="m" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={music.title}
        description={music.description}
        path="/music"
        image={`/api/og/generate?title=${encodeURIComponent(music.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/music`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Avatar dan Lokasi */}  
      <Flex horizontal="center" vertical="center" gap="m">
        <Avatar src={person.avatar} size="xl" />
      </Flex>

      {/* Judul & Deskripsi */}
       <Column gap="s" align="center">
      <Heading variant="display-strong-l">{music.title}</Heading>
      <Text
        variant="heading-default-xs" // lebih kecil dan terlihat seperti job desc
        align="center"
        onBackground="neutral-weak"
     > 
        {music.description}
      </Text>
      </Column>


      {/* Spotify Embed */}
      <Flex horizontal="center">
        <div style={{ width: "100%", maxWidth: "600px", padding: "0 1rem" }}>
          <iframe
            title="Spotify Playlist"
            style={{
              borderRadius: "12px",
              width: "100%",
              height: "352px",
              maxWidth: "100%",
              border: "none",
            }}
            src={music.embedUrl}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </Flex>
    </Column>
  );
}
