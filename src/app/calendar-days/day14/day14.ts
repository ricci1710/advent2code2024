import {DayBase} from "../../utlils/DayBase";

type Board = Map<number, Map<number, number>>;
type Position = { x: number; y: number; };
type Direction = { speedX: number; speedY: number; };

type Robot = {
  position: Position;
  direction: Direction;
};

function calculatePosition(position: number, speed: number, limit: number): number {
  const newPosition = position + speed;

  if (newPosition < 0)
    return limit - Math.abs(newPosition);
  else if (newPosition >= limit)
    return newPosition - limit;

  return newPosition;
}

/**
 * Predict the motion of the robots in your list within a space which is 101 tiles wide and 103 tiles tall.
 * What will the safety factor be after exactly 100 seconds have elapsed?
 */
export class Day14 extends DayBase {
  private readonly limitX: number = 101;
  private readonly limitY: number = 103;

  private readonly demoLimitX: number = 11;
  private readonly demoLimitY: number = 7;

  private board: Board = new Map();
  private robots: Robot[] = [];

  moveDemoRobots(robot: Robot): void {
    this.moveRobots(robot, this.demoLimitX, this.demoLimitY, 100);
  }

  movePrivateRobots(robot: Robot): void {
    this.moveRobots(robot, this.limitX, this.limitY, 100);
  }

  moveRobots(robot: Robot, limitX: number, limitY: number, distance: number): Position {
    let {x, y} = robot.position;
    const {speedX, speedY} = robot.direction;

    for (let i = 0; i < distance; i++) {
      x = calculatePosition(x, speedX, limitX);
      y = calculatePosition(y, speedY, limitY);

      console.log(x, y);
    }

    return {x, y};
  }

  /**
   *
   * solution: ???
   */
  calcPartOne(): number {
    const robots: Robot[] = this.saveRobotData();
    return -1;
  }

  /**
   * solution: ???
   */
  calcPartTwo(): number {
    const storeData: string[] = this.getStoreData();
    return -1;
  }

  saveRobotData(): Robot[] {
    const storeData: string[] = this.getStoreData();
    const robotData: Robot[] = [];
    const regex = /-?\d+/g;

    storeData.forEach(line => {
      const numbers = line.match(regex)?.map(Number) || [];
      const robot = {
        position: {x: numbers[0], y: numbers[1]},
        direction: {speedX: numbers[2], speedY: numbers[3]}
      };

      robotData.push(robot);
    });

    console.log(robotData);

    return robotData;
  }
}
