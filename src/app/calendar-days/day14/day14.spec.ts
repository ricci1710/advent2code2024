import {Day14} from './day14';
import {HttpClient} from "@angular/common/http";

describe('Day14', () => {
  let day14: Day14;

  beforeEach(() => {
    day14 = new Day14(14, new HttpClient(null as any));
  });

  describe('moveDemoRobots', () => {
    it('should call moveRobots with demo limits', () => {
      const robot = {
        position: {x: 2, y: 4},
        direction: {speedX: 2, speedY: -3},
      };
      const spy = jest.spyOn(day14 as any, 'moveRobots');

      day14.moveDemoRobots(robot);

      expect(spy).toHaveBeenCalledWith(robot, 11, 7);
      spy.mockRestore();
    });
  });

  describe('movePrivateRobots', () => {
    it('should call moveRobots with private limits', () => {
      const robot = {
        position: {x: 0, y: 0},
        direction: {speedX: 1, speedY: 1},
      };
      const spy = jest.spyOn(day14 as any, 'moveRobots');

      day14.movePrivateRobots(robot);

      expect(spy).toHaveBeenCalledWith(robot, 101, 103);
      spy.mockRestore();
    });
  });

  describe('saveRobotData', () => {
    it('should parse storeData into robot data correctly', () => {
      const mockStoreData = [
        '1,2,3,4',
        '-1,-2,-3,-4',
      ];
      const expectedRobots = [
        {position: {x: 1, y: 2}, direction: {speedX: 3, speedY: 4}},
        {position: {x: -1, y: -2}, direction: {speedX: -3, speedY: -4}},
      ];
      jest.spyOn(day14 as any, 'getStoreData').mockReturnValue(mockStoreData);

      const result = day14.saveRobotData();

      expect(result).toEqual(expectedRobots);
    });
  });

  describe('calcPartOne', () => {
    it('should return -1 as default placeholder solution', () => {
      jest.spyOn(day14, 'saveRobotData').mockReturnValue([]);
      expect(day14.calcPartOne()).toBe(-1);
    });
  });

  describe('calcPartTwo', () => {
    it('should return -1 as default placeholder solution', () => {
      jest.spyOn(day14 as any, 'getStoreData').mockReturnValue([]);
      expect(day14.calcPartTwo()).toBe(-1);
    });
  });
});
