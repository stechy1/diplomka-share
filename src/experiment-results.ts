

export interface ExperimentResult {

	// ID výsledku experimentu
	id: number;
	// ID experimentu, pro který je výsledek přiřazený
	experimentID: number;
	// Název výsledku experimentu
	name: string;
	// Čas spuštění experimentu
	date: Date;
	// Název souboru s průběhem experimentu
	filename: string;

}
