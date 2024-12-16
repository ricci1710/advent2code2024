import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

/**
 * Abstract base class representing a day-based data processor. This class provides
 * methods for reading and storing data from HTTP resources, and declares abstract
 * methods for specific calculations.
 */
export abstract class DayBase {
  storeData: string[] = [];

  /**
   * Creates an instance of the class with the specified day and HttpClient.
   *
   * @param {number} day - The numeric representation of the day.
   * @param {HttpClient} httpClient - The HttpClient instance for making HTTP requests.
   */
  constructor(private day: number, private httpClient: HttpClient) {
  }

  /**
   * Reads and processes demo data from a local file based on the current day.
   * Fetches the data using an HTTP GET request, processes the response to remove
   * unnecessary characters, and splits the content into an array for storage.
   *
   * @return {Subscription} A subscription to the HTTP request.
   */
  readDemoData(): Subscription {
    const url = `/assets/demo/day${this.day < 10 ? '0' : ''}${this.day}.dat`;
    return this.httpClient.request('GET', url, {responseType: 'text'}).subscribe(res => {
      this.storeData = res.replaceAll('\r', '').split('\n');
      this.storeData.pop();
    });
  }

  /**
   * Reads private data from a specific URL corresponding to the current day,
   * processes the response, and updates the local store data.
   *
   * @return {Subscription} The subscription to the HTTP request.
   */
  readPrivateData() {
    const url = `/assets/private/day${this.day < 10 ? '0' : ''}${this.day}.dat`;
    return this.httpClient.request('GET', url, {responseType: 'text'}).subscribe(res => {
      this.storeData = res.replaceAll('\r', '').split('\n');
      this.storeData.pop();
    });
  }

  /**
   * Calculates and returns the result of the first part of a process based on the provided store data.
   *
   * @param {string[]} storeData - An array of strings representing the stored data used in the calculation.
   * @return {number} The calculated result for the first part of the process.
   */
  abstract calcPartOne(storeData: string[]): number;

  /**
   * Abstract method to calculate the second part of a computation or process.
   *
   * @param {string[]} storeData - An array of strings representing the data to be processed in the calculation.
   * @return {number} The computed numerical result for the second part of the process.
   */
  abstract calcPartTwo(storeData: string[]): number;

  /**
   * Retrieves the store data.
   *
   * @return {string[]} An array of strings representing the store data.
   */
  getStoreData(): string[] {
    return this.storeData;
  }
}
