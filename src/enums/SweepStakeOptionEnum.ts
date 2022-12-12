class SweepStakeOption {
  constructor(public type: SweepStakeType, public strName: string) {}

  toOption() {
    return {
      value: this.type,
      name: this.strName,
    };
  }
}

enum SweepStakeType {
  FOOTBALL = 0,
  LOL = 1,
}

export default {
  FOOTBALL: new SweepStakeOption(SweepStakeType.FOOTBALL, "Futebol"),
  LOL: new SweepStakeOption(SweepStakeType.LOL, "League of Legends"),
};
