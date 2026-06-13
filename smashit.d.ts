interface SmashitOpts {
  input: string;
  output: string;
}

export function smashit(opts: SmashitOpts): Promise<void>;
