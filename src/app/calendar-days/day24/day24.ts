import {DayBase} from "../../utlils/DayBase";


/**
 * Represents a command structure that includes operators, an operand, and a target.
 *
 * @interface Command
 *
 * @property {string | boolean} operator1 - The first operator used in the command. Can be a string or a boolean value.
 * @property {string | boolean} operator2 - The second operator used in the command. Can be a string or a boolean value.
 * @property {Operand} operand - The operand associated with the command, defining the operation or data interaction.
 * @property {string} target - The target on which the command operates.
 */
interface Command {
  operator1: string | boolean;
  operator2: string | boolean;
  operand: Operand;
  target: string;
}

/**
 * Represents the types of logical operands that can be used in a logical expression.
 *
 * The Operand type can have one of the following values:
 * - "AND": Represents the logical AND operation.
 * - "OR": Represents the logical OR operation.
 * - "XOR": Represents the logical XOR operation.
 */
type Operand = "AND" | "OR" | "XOR";

export class Day24 extends DayBase {
  initialWire: Map<string, boolean> = new Map();
  commandTable: Command[] = [];

  /**
   * Reads and processes the initial wire and command table from stored data.
   * Populates the `initialWire` map with key-value pairs representing wire states,
   * and the `command` array with parsed command objects containing operators,
   * operand, and targets.
   *
   * @return {void} This method doesn't return a value, as it processes the data
   *                and updates the internal state of the class.
   */
  readInitialWireAndCommandTable(): void {
    const storeData: string[] = this.getStoreData();
    let startTable = false;

    storeData.forEach(line => {
      if (line.length === 0) startTable = true;
      else if (startTable) {
        const cmdParts = line.split(" ");
        const operator1 = cmdParts[0];
        const operator2 = cmdParts[2];
        const operand = cmdParts[1] as Operand;
        const target = cmdParts[4];

        this.commandTable.push({operator1, operator2, operand, target});
      } else {
        const [key, value] = line.split(": ");
        this.initialWire.set(key, value === "1");
      }
    });
  }


  /**
   * Processes the initial wire and command table to calculate a result by resolving commands,
   * sorting the wire map, and converting specific values in the map from binary to decimal.
   *
   * @return {number} The decimal representation of the sorted and transformed binary string
   *                  formed from specific entries in the initial wire map.
   */
  calcPartOne(): number {
    this.readInitialWireAndCommandTable();
    do {
      this.resolveCommandTable(this.commandTable);
    } while (this.commandTable.length > 0);

    this.initialWire = new Map([...this.initialWire.entries()].sort((a, b) => a[0].localeCompare(b[0])));

    let data = '';
    for (let [key, value] of this.initialWire) {
      if (/^z\d\d$/.test(key))
        data += value ? '1' : '0';
    }
    const resultBinary = data.split('').reverse().join('');
    const resultDecimal = parseInt(resultBinary, 2);

    console.log(resultBinary);
    console.log(resultDecimal);

    return resultDecimal;
  }

  /**
   * Resolves the command table by updating command operators based on the initial wire mappings and calculates
   * results for commands with boolean operators. The remaining commands are filtered and updated in the commandTable.
   *
   * @param {Command[]} result - An array of command objects that contain operators, operand, and target properties.
   * @return {Command[]} An array of commands where both operators are boolean and their results have been calculated.
   */
  resolveCommandTable(result: Command[]): Command[] {
    this.initialWire.forEach((value, key) => {
      result = result.map(cmd => {
        return {
          operator1: (cmd.operator1 as string) === key ? value : cmd.operator1,
          operator2: (cmd.operator2 as string) === key ? value : cmd.operator2,
          operand: cmd.operand,
          target: cmd.target
        }
      });
    });

    this.commandTable = result.filter(cmd => typeof cmd.operator1 !== 'boolean' || typeof cmd.operator2 !== 'boolean');
    result = result.filter(cmd => typeof cmd.operator1 === 'boolean' && typeof cmd.operator2 === 'boolean');

    result.forEach(cmd => {
      this.initialWire.set(cmd.target, this.calculateOperand(cmd));
    });

    return result;
  }

  /**
   * Calculates the result of a logical operation between two boolean operators.
   *
   * @param {Command} cmd - The command object containing the two boolean operators (operator1 and operator2)
   *                        and the operand type (e.g., "AND", "OR", "XOR") to perform the operation.
   * @return {boolean} The result of the specified logical operation, or false if the operand is not recognized.
   */
  calculateOperand(cmd: Command): boolean {
    const operator1: boolean = cmd.operator1 as boolean;
    const operator2: boolean = cmd.operator2 as boolean;
    const operand: string = cmd.operand;

    switch (operand) {
      case "AND":
        return operator1 && operator2;
      case "OR":
        return operator1 || operator2;
      case "XOR":
        return operator1 !== operator2;
    }
    return false;
  }

  /**
   * solution: ???
   */
  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();
    return -1;
  }
}
