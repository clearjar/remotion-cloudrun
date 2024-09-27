import { z } from "zod";
import {
  AbsoluteFill,
  Audio,
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
      <Audio src="https://utfs.io/f/dcd6ec3e-7ab1-4054-8978-e17804d969b0-ffbfrf.mp3" />
      <Video
        height={1280}
        width={720}
        // Fit to fill
        style={{
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        }}

        src="https://utfs.io/f/db06a7f1-974a-4580-9f35-ba835f0586c5-tu1ooy.mp4"
        volume={0}
      />
      <WordDisplay />

    </AbsoluteFill>
  );
};
