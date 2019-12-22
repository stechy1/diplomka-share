import { Experiment, ExperimentType } from './experiments';


export interface ExperimentResult {

	// ID výsledku experimentu
	id?: number;
	// ID experimentu, pro který je výsledek přiřazený
	experimentID: number;
	// Typ experimentu
	type: ExperimentType;
	// Počet použitých výstupů
	outputCount: number;
	// Název výsledku experimentu
	name: null|string;
	// Čas spuštění experimentu
	date: number;
	// Název souboru s průběhem experimentu
	filename: string;

}

export function createEmptyExperimentResult(experiment: Experiment): ExperimentResult {
	const date = Date.now();
	return {
		experimentID: experiment.id ? experiment.id : -1,
		type: experiment.type,
		outputCount: experiment.outputCount,
		filename: `${ExperimentType[experiment.type].toLowerCase()}-${date}.json`,
		date: date,
		name: null
	}
}
