/**
 * Třída obsahující kódy zpráv.
 *
 * Struktura kódu:
 *  xxyzz
 *  xx - číslo sekce, ke které zpráva patří
 *  y  - {0,1,2,3} číslo indikující typ zprávy
 *     - 0 = úspěch
 *     - 1 = informace
 *     - 2 = varování
 *     - 3 = chyba
 *  zz - číslo samotné zprávy
 */
export class MessageCodes {
    public static readonly CODE_ERROR = -1;
    public static readonly CODE_SUCCESS = 0;

    // Chybové zprávy pro 'experiments' začínají na 10000
    public static readonly CODE_ERROR_EXPERIMENT_NOT_FOUND = 10300;
    public static readonly CODE_SUCCESS_EXPERIMENT_CREATED = 10001;
    public static readonly CODE_ERROR_EXPERIMENT_WAS_NOT_CREATED = 10301;
    public static readonly CODE_ERROR_EXPERIMENT_ALREADY_EXISTS = 10311;
    public static readonly CODE_SUCCESS_EXPERIMENT_UPDATED = 10002;
    public static readonly CODE_ERROR_EXPERIMENT_WAS_NOT_UPDATED = 10302;
    public static readonly CODE_SUCCESS_EXPERIMENT_DELETED = 10003;
    public static readonly CODE_ERROR_EXPERIMENT_WAS_NOT_DELETED = 10303;
    public static readonly CODE_ERROR_EXPERIMENT_NOT_VALID = 10304;

    // Chybové zprávy pro 'experiment-results' začínají na 20000
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_NOT_FOUND = 20300;
    public static readonly CODE_SUCCESS_EXPERIMENT_RESULT_CREATED = 20001;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_WAS_NOT_CREATED = 20301;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_ALREADY_EXISTS = 20311;
    public static readonly CODE_SUCCESS_EXPERIMENT_RESULT_UPDATED = 20002;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_WAS_NOT_UPDATED = 20302;
    public static readonly CODE_SUCCESS_EXPERIMENT_RESULT_DELETED = 20003;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_WAS_NOT_DELETED = 20303;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_DATA_NOT_FOUND = 20304;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_NOT_VALID = 20305;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_WAS_NOT_INITIALIZED = 20306;
    public static readonly CODE_ERROR_EXPERIMENT_IS_NOT_INITIALIZED = 20307;

    // Chybové zprávy pro 'sequences' začínají na 30000
    public static readonly CODE_SUCCESS_SEQUENCE_CREATED = 30001;
    public static readonly CODE_SUCCESS_SEQUENCE_UPDATED = 30002;
    public static readonly CODE_SUCCESS_SEQUENCE_DELETED = 30003;
    public static readonly CODE_ERROR_SEQUENCE_NOT_FOUND = 30301;
    public static readonly CODE_ERROR_SEQUENCE_UNSUPORTED_EXPERIMENT = 30304;

    // Chybové zprávy pro 'file-browser' začínají na 40000
    public static readonly CODE_SUCCESS_FILE_BROWSER_DIRECTORY_CREATED = 40001;
    public static readonly CODE_SUCCESS_FILE_BROWSER_FILES_UPLOADED = 40002;
    public static readonly CODE_SUCCESS_FILE_BROWSER_FILES_DELETED = 40003;
    public static readonly CODE_ERROR_FILE_BROWSER_FILES_NOT_UPLOADED = 40302;
    public static readonly CODE_ERROR_FILE_BROWSER_FILES_NOT_DELETED = 40303;

    // Chybové zprávy pro 'low-level' začínají na 50000
    public static readonly CODE_SUCCESS_LOW_LEVEL_PORT_OPPENED = 50001;
    public static readonly CODE_SUCCESS_LOW_LEVEL_FIRMWARE_UPDATED = 50002;
    public static readonly CODE_ERROR_LOW_LEVEL_PORT_NOT_OPPENED = 50301;
    public static readonly CODE_ERROR_LOW_LEVEL_FIRMWARE_NOT_UPDATED = 50302;
    public static readonly CODE_ERROR_LOW_LEVEL_PORT_NOT_OPEN = 50303;

    // Chybové zprávy pro 'settings' začínají na 60000
    public static readonly CODE_SUCCESS_SETTINGS_UPDATED = 60001;
    public static readonly CODE_ERROR_SETTINGS_NOT_UPDATED = 60301;

    // Chybové zprávy pro 'commands' začínají na 70000
    public static readonly CODE_ERROR_COMMANDS_INVALID_URL = 70301;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_UPLOAD = 70302;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_UPLOAD_NOT_CLEARED = 70312;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_SETUP = 70303;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_SETUP_NOT_UPLOADED = 70313;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_RUN = 70304;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_RUN_NOT_INITIALIZED = 70314;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_PAUSE = 70305;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_PAUSE_NOT_STARTED = 70315;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_FINISH = 70306;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_FINISH_NOT_RUNNING = 70316;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_CLEAR = 70307;
    public static readonly CODE_ERROR_COMMANDS_STIMULATOR_STATE = 70308;

}
