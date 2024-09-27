import { z } from "zod";
import {
  AbsoluteFill,
  Audio,
  staticFile,
  Video,
} from "remotion";
import { CompositionProps } from "../../types/constants";
import { loadFont } from "@remotion/google-fonts/Inter";
import React from "react";
import { WordDisplay } from "../word-display";

loadFont();


export const Main = ({ title }: z.infer<typeof CompositionProps>) => {



  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 100,
        // backgroundColor: "white",
      }}
    >
      <Audio src={staticFile("audio.mp3")} />
      <Video
        height={1280}
        width={720}
        // Fit to fill
        style={{
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        }}

        src={staticFile("vid.mp4")}
        volume={0}
      />
      <WordDisplay />

    </AbsoluteFill>
  );
};
