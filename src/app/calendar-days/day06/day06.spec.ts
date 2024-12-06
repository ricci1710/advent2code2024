import {Day06} from './day06';
import {HttpClient} from "@angular/common/http";

describe('Day06 up method', () => {
    let day06: Day06;
     let httpClient: HttpClient;

    beforeEach(() => {
        day06 = new Day06(6, httpClient);
        day06['getStoreData'] = jest.fn(() => [
            '.#...',
            '.....',
            '.^...',
            '..#..',
            '.....',
        ]);
    });

    it('should move the position up if no barrier is encountered', () => {
        day06.position = {row: 3, col: 1};
        const storeData = day06.getStoreData();

        day06.up(storeData);

        expect(day06.position.row).toBe(1);
        expect(day06.position.col).toBe(4);
    });

    it('should stop moving up if a barrier is encountered', () => {
        day06.position = {row: 2, col: 2};
        const storeData = day06.getStoreData();

        day06.up(storeData);

        expect(day06.position.row).toBe(0); // Should remain on the same row
        expect(day06.position.col).toBe(2); // Should rotate to right without changing column
    });

    it('should not move up if already at the top row', () => {
        day06.position = {row: 0, col: 1};
        const storeData = day06.getStoreData();

        day06.up(storeData);

        expect(day06.position.row).toBe(0);
        expect(day06.position.col).toBe(1);
    });
});
