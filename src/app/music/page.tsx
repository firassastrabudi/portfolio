import { Flex, Meta, Schema } from "@once-ui-system/core";
import { baseURL, music, person } from "@/resources";
import MusicEmbed from "@/components/music/MusicEmbed";

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
    <Flex
      maxWidth="l"
      direction="column"
      gap="16"
      className="px-4 sm:px-6 md:px-8 lg:px-12 py-12"
    >
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

      <MusicEmbed />
    </Flex>
  );
}
