import {Day24} from './day24';
import {HttpClient} from "@angular/common/http";

describe('Day24', () => {
  let day24: Day24;
  let httpClient: HttpClient;

  beforeEach(() => {
    day24 = new Day24(24, httpClient);
  });

  describe('readInitialWireAndCommandTable', () => {
    it('should correctly populate the initialWire map', () => {
      day24['getStoreData'] = jest.fn(() => mockDemoDataSmall);

      day24.readInitialWireAndCommandTable();

      expect(day24.initialWire.size).toBe(6);
      expect(day24.initialWire.get('x00')).toBe(true);
      expect(day24.initialWire.get('y00')).toBe(false);

      expect(day24.commandTable.length).toBe(3);
      expect(day24.commandTable[0]).toEqual({
        'operand': 'AND',
        'operator1': 'x00',
        'operator2': 'y00',
        'target': 'z00',
      });
    });
  });

  describe('calcPartOne', () => {
    it('should return 4 as a placeholder solution for part one with special data', () => {
      day24['getStoreData'] = jest.fn(() => mockDemoDataSpecialSmall);
      const result = day24.calcPartOne();
      expect(result).toBe(4);
    });

    it('should return 4 as a placeholder solution for part one with small data', () => {
      day24['getStoreData'] = jest.fn(() => mockDemoDataSmall);
      const result = day24.calcPartOne();
      expect(result).toBe(4);
    });

    it('should return 2024 as a placeholder solution for part one with large data', () => {
      day24['getStoreData'] = jest.fn(() => mockDemoDataLarge);
      const result = day24.calcPartOne();
      expect(result).toBe(2024);
    });
  });

  describe('calcPartTwo', () => {
    it('should return -1 as a placeholder solution for part two', () => {
      const result = day24.calcPartTwo();
      expect(result).toBe(-1);
    });
  });
});

const mockDemoDataSpecialSmall: string[] = [
  'x00: 1',
  'x01: 1',
  'x02: 1',
  'y00: 0',
  'y01: 1',
  'y02: 0',
  '',
  'x00 AND y00 -> z00',
  'x01 XOR y01 -> z01',
  'x01 AND abc -> def',
  'x02 OR y02 -> abc',
  'x02 OR y02 -> z02'
];

const mockDemoDataSmall: string[] = [
  'x00: 1',
  'x01: 1',
  'x02: 1',
  'y00: 0',
  'y01: 1',
  'y02: 0',
  '',
  'x00 AND y00 -> z00',
  'x01 XOR y01 -> z01',
  'x02 OR y02 -> z02'
];

const mockDemoDataLarge: string[] = [
  "x00: 1",
  "x01: 0",
  "x02: 1",
  "x03: 1",
  "x04: 0",
  "y00: 1",
  "y01: 1",
  "y02: 1",
  "y03: 1",
  "y04: 1",
  '',
  "ntg XOR fgs -> mjb",
  "y02 OR x01 -> tnw",
  "kwq OR kpj -> z05",
  "x00 OR x03 -> fst",
  "tgd XOR rvg -> z01",
  "vdt OR tnw -> bfw",
  "bfw AND frj -> z10",
  "ffh OR nrd -> bqk",
  "y00 AND y03 -> djm",
  "y03 OR y00 -> psh",
  "bqk OR frj -> z08",
  "tnw OR fst -> frj",
  "gnj AND tgd -> z11",
  "bfw XOR mjb -> z00",
  "x03 OR x00 -> vdt",
  "gnj AND wpb -> z02",
  "x04 AND y00 -> kjc",
  "djm OR pbm -> qhw",
  "nrd AND vdt -> hwm",
  "kjc AND fst -> rvg",
  "y04 OR y02 -> fgs",
  "y01 AND x02 -> pbm",
  "ntg OR kjc -> kwq",
  "psh XOR fgs -> tgd",
  "qhw XOR tgd -> z09",
  "pbm OR djm -> kpj",
  "x03 XOR y03 -> ffh",
  "x00 XOR y04 -> ntg",
  "bfw OR bqk -> z06",
  "nrd XOR fgs -> wpb",
  "frj XOR qhw -> z04",
  "bqk OR frj -> z07",
  "y03 OR x01 -> nrd",
  "hwm AND bqk -> z03",
  "tgd XOR rvg -> z12",
  "tnw OR pbm -> gnj"
];
