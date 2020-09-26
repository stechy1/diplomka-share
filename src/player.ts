import { IOEvent } from './serial-data-events';

export interface OutputCountingExperimentStopConditionParams {
	maxOutput: number;
}

export interface CycleCountingExperimentStopConditionParams {
	cycleCount: number;
}

export type ExperimentStopConditionParams = {} | OutputCountingExperimentStopConditionParams | CycleCountingExperimentStopConditionParams;

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
	COUNTING_CYCLE_STOP_CONDITION
}
