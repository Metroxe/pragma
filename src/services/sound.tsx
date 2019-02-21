import Sound from "react-native-sound";

export enum SoundEffect {
	WIN = "winSound.wav",
	GG = "gameOver.wav",
	HAMMER = "hammerConstruction.wav",
	CLICK = "selectClick.wav",
	SUCCESS = "successfulHarvest.wav",
	BGSLOW = "BGSlow.wav",
	BGMEDIUM = "BGMedium.wav",
	BGFAST = "BGFast.wav",
}

export interface ISound {
	[SoundEffect.WIN]: () => Promise<void>;
	[SoundEffect.GG]: () => Promise<void>;
	[SoundEffect.HAMMER]: () => Promise<void>;
	[SoundEffect.CLICK]: () => Promise<void>;
	[SoundEffect.SUCCESS]: () => Promise<void>;
	[SoundEffect.BGSLOW]: () => Promise<void>;
	[SoundEffect.BGMEDIUM]: () => Promise<void>;
	[SoundEffect.BGFAST]: () => Promise<void>;
}

const soundMap: { [key: string]: Sound } = {};

function makeSound(): ISound {
	function abstractSound(soundEffect: SoundEffect): () => Promise<void> {
		return (): Promise<void> => {
			return new Promise((resolve: () => void): void => {
					try {
						let key: string;
						for (key of Object.keys(soundMap)) {
							if (key !== soundEffect) {
								soundMap[key].stop(() => {
								});
							}
						}
						const win: any = new Sound(soundEffect, Sound.MAIN_BUNDLE, (error: any): void => {
							win.setNumberOfLoops(-1);

							win.play((success: any) => {
								resolve();
							});
						});

						soundMap[soundEffect] = win;
					} catch (error) {
						console.log(error);
					}

				},
			);
		};
	}

	return {
		[SoundEffect.WIN]: abstractSound(SoundEffect.WIN),
		[SoundEffect.GG]: abstractSound(SoundEffect.GG),
		[SoundEffect.HAMMER]: abstractSound(SoundEffect.HAMMER),
		[SoundEffect.CLICK]: abstractSound(SoundEffect.CLICK),
		[SoundEffect.SUCCESS]: abstractSound(SoundEffect.SUCCESS),
		[SoundEffect.BGSLOW]: abstractSound(SoundEffect.BGSLOW),
		[SoundEffect.BGMEDIUM]: abstractSound(SoundEffect.BGMEDIUM),
		[SoundEffect.BGFAST]: abstractSound(SoundEffect.BGFAST),
	};
}

export default makeSound;
