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

export function experimentStopCOnditionTypeFromRaw(raw: string): ExperimentStopConditionType {
	switch (raw.toUpperCase()) {
		case ExperimentStopConditionType[ExperimentStopConditionType.NO_STOP_CONDITION]:
			return ExperimentStopConditionType.NO_STOP_CONDITION;
		case ExperimentStopConditionType[ExperimentStopConditionType.COUNTING_EXPERIMENT_STOP_CONDITION]:
			return ExperimentStopConditionType.COUNTING_EXPERIMENT_STOP_CONDITION;
		case ExperimentStopConditionType[ExperimentStopConditionType.COUNTING_CYCLE_STOP_CONDITION]:
			return ExperimentStopConditionType.COUNTING_CYCLE_STOP_CONDITION;
		default:
			return ExperimentStopConditionType.NO_STOP_CONDITION;
	}
}