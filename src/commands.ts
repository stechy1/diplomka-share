const COMMAND_DELIMITER_SHARE = 0x53;

const COMMAND_EXPERIMENT_STOP = 0x00;
const COMMAND_EXPERIMENT_RUN = 0x01;
const COMMAND_EXPERIMENT_INIT = 0x02;
const COMMAND_EXPERIMENT_CLEAR = 0x03;
const COMMAND_EXPERIMENT_READY = 0x05;

export class CommandToStimulator {

	// Oddělovač příkazu
	public static readonly COMMAND_DELIMITER = COMMAND_DELIMITER_SHARE;

	// Příkaz pro reboot stimulátoru
	public static readonly COMMAND_REBOOT = 0x00;

	// Příkaz pro nastavení času
	public static readonly COMMAND_TIME_SET = 0x01;

	// Příkaz pro nastavení displaye
	public static readonly COMMAND_DISPLAY = 0x02;
	public static readonly COMMAND_DISPLAY_ACTION_CLEAR = 0x00;
	public static readonly COMMAND_DISPLAY_ACTION_SET = 0x01;

	// Příkaz pro správu experimentu
	public static readonly COMMAND_MANAGE_EXPERIMENT = 0x03;
	// Jednotlivé akce u správy experimentu
	public static readonly COMMAND_MANAGE_EXPERIMENT_STOP = COMMAND_EXPERIMENT_STOP;
	public static readonly COMMAND_MANAGE_EXPERIMENT_RUN = COMMAND_EXPERIMENT_RUN;
	public static readonly COMMAND_MANAGE_EXPERIMENT_INIT = COMMAND_EXPERIMENT_INIT;
	public static readonly COMMAND_MANAGE_EXPERIMENT_CLEAR = COMMAND_EXPERIMENT_CLEAR;
	public static readonly COMMAND_MANAGE_EXPERIMENT_READY = COMMAND_EXPERIMENT_READY;


	public static readonly COMMAND_EXPERIMENT_SETUP = 0x10;


	// Backdoor do stimulatoru
	public static readonly COMMAND_BACKDOR_1 = 0xF0;
}

export class CommandFromStimulator {

	// Oddělovač příkazu
	public static readonly COMMAND_DELIMITER = [COMMAND_DELIMITER_SHARE, 0xFF];

	public static readonly COMMAND_STIMULATOR_STATE = 0x01;
	public static readonly COMMAND_STIMULATOR_STATE_STOP = COMMAND_EXPERIMENT_STOP;
	public static readonly COMMAND_STIMULATOR_STATE_RUN = COMMAND_EXPERIMENT_RUN;
	public static readonly COMMAND_STIMULATOR_STATE_INIT = COMMAND_EXPERIMENT_INIT;
	public static readonly COMMAND_STIMULATOR_STATE_CLEAR = COMMAND_EXPERIMENT_CLEAR;
	public static readonly COMMAND_STIMULATOR_STATE_READY = COMMAND_EXPERIMENT_READY;


	public static readonly COMMAND_OUTPUT_ACTIVATED = 0x10;
	public static readonly COMMAND_OUTPUT_DEACTIVATED = 0x11;
	public static readonly COMMAND_INPUT_ACTIVATED = 0x12;

}
