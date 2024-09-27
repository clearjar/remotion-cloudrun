import { interpolate, spring, useCurrentFrame } from "remotion";

export interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {

  const frame = useCurrentFrame()

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp"
  });

  const scale = spring({
    fps: 30,
    frame,
  });

  return (
    <div style={{
      opacity,
      textAlign: 'center',
      width: '100%',
      transform: `scale(${scale})`
    }}>{title}</div>
  );
};