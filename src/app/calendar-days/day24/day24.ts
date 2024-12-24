import {DayBase} from "../../utlils/DayBase";

type Command = {
  operator1: string;
  operator2: string;
  operand: string;
  target: string;
};

export class Day24 extends DayBase {
  initialWire: Map<string, boolean> = new Map();
  command: Command[] = [];

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
        const operand = cmdParts[1];
        const target = cmdParts[4];

        this.command.push({operator1, operator2, operand, target});
      } else {
        const [key, value] = line.split(": ");
        this.initialWire.set(key, value === "1");
      }
    });
  }

  /**
   *
   * solution: ???
   */
  calcPartOne(): number {
    const storeData: string[] = this.getStoreData();
    return -1;
  }

  /**
   * solution: ???
   */
  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();
    return -1;
  }
}
