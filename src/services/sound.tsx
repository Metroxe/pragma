import Sound from "react-native-sound";

export enum SoundEffect {
	WIN = "winSound.wav",
	GG = "gameOver.wav",
	HAMMER = "hammerConstruction.wav",
	CLICK = "selectClick.wav",
	SUCCESS = "successfulHarvest",
}

export interface ISound {
	[SoundEffect.WIN]: () => Promise<void>;
	[SoundEffect.GG]: () => Promise<void>;
	[SoundEffect.HAMMER]: () => Promise<void>;
	[SoundEffect.CLICK]: () => Promise<void>;
	[SoundEffect.SUCCESS]: () => Promise<void>;
}

function makeSound(): ISound {
	function abstractSound(soundEffect: SoundEffect): () => Promise<void> {
		return (): Promise<void> => {
			return new Promise((resolve: () => void): void => {
				try {
					const win: any = new Sound(soundEffect, Sound.MAIN_BUNDLE, (error: any): void => {
						win.play((success: any) => {
							resolve();
						});
					});
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
	};
}

export default makeSound;