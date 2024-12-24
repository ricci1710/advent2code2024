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
      day24['getStoreData'] = jest.fn(() => [
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
      ]);

      day24.readInitialWireAndCommandTable();

      expect(day24.initialWire.size).toBe(6);
      expect(day24.initialWire.get('x00')).toBe(true);
      expect(day24.initialWire.get('y00')).toBe(false);

      expect(day24.command.length).toBe(3);
      expect(day24.command[0]).toEqual({
        'operand': 'AND',
        'operator1': 'x00',
        'operator2': 'y00',
        'target': 'z00',
      });
    });
  });

  describe('calcPartOne', () => {
    it('should return -1 as a placeholder solution for part one', () => {
      const result = day24.calcPartOne();
      expect(result).toBe(-1);
    });
  });

  describe('calcPartTwo', () => {
    it('should return -1 as a placeholder solution for part two', () => {
      const result = day24.calcPartTwo();
      expect(result).toBe(-1);
    });
  });
});
