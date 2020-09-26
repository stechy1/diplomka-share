import { IOEvent } from './serial-data-events';

export interface OutputCountingExperimentStopConditionParams {
	maxOutput: number;
}

export type ExperimentStopConditionParams = {} | OutputCountingExperimentStopConditionParams;

export interface PlayerConfiguration {
	initialized: boolean,
	ioData: IOEvent[][],
	isBreakTime: boolean
	repeat: number;
	betweenExperimentInterval: number;
	autoplay: boolean;
	stopConditionType: ExperimentStopConditionType;
	stopConditions: ExperimentStopConditionParams;
}

export enum ExperimentStopConditionType {
	NO_STOP_CONDITION,
	COUNTING_EXPERIMENT_STOP_CONDITION,
}
