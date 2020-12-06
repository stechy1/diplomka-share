export interface Settings {
    autoconnectToStimulator?: boolean;
    comPortName?: string;
    serial?: Record<string, unknown>;
    stimulatorResponseTimeout?: number;
    assetPlayerResponseTimeout?: number;
    assetPlayer?: AssetPlayerSettings;
}

export interface AssetPlayerSettings {
    width: number;
    height: number;
    fullScreen: boolean;
}
