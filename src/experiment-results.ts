import { Experiment, ExperimentType } from './experiments';


export interface ExperimentResult {

	// ID výsledku experimentu
	id?: number;
	// ID experimentu, pro který je výsledek přiřazený
	experimentID: number;
	// Typ experimentu
	type: ExperimentType;
	// Název výsledku experimentu
	name: null|string;
	// Čas spuštění experimentu
	date: Date;
	// Název souboru s průběhem experimentu
	filename: string;

}

export function createEmptyExperimentResult(experiment: Experiment): ExperimentResult {
	const date = new Date();
	return {
		experimentID: experiment.id ? experiment.id : -1,
		type: experiment.type,
		filename: `${ExperimentType[experiment.type].toLowerCase()}-${date.getTime()}.json`,
		date: date,
		name: null
	}
}
