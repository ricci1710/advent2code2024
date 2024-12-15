/**
 * Compacts a disk map by moving file blocks to the leftmost free space and calculates the filesystem checksum.
 */
export class DiskFragmenter {

  /**
   * Parses the dense disk map string into a representation of blocks with file IDs and free spaces.
   *
   * @param diskMap - The dense disk map string.
   * @returns An array representing the disk, where file IDs are numbers and free spaces are represented as -1.
   */
  parseDiskMap(diskMap: string): number[] {
    const result: number[] = [];

    for (let i = 0; i < diskMap.length; i += 2) {
      const fileSize = parseInt(diskMap[i], 10);
      const freeSpaceSize = parseInt(diskMap[i + 1], 10);

      for (let j = 0; j < fileSize; j++) {
        result.push(result.length / 2); // Assign file ID based on position
      }

      for (let j = 0; j < freeSpaceSize; j++) {
        result.push(-1); // Represent free space as -1
      }
    }

    return result;
  }

  /**
   * Compacts the disk by moving file blocks to the leftmost free space.
   *
   * @param disk - The array representing the disk.
   * @returns The compacted disk array.
   */
  compactDisk(disk: number[]): number[] {
    let writePointer = 0;

    for (const block of disk) {
      if (block !== -1) {
        disk[writePointer++] = block;
      }
    }

    while (writePointer < disk.length) {
      disk[writePointer++] = -1; // Fill remaining spaces with free space
    }

    return disk;
  }

  /**
   * Calculates the checksum of the disk after compaction.
   *
   * @param disk - The compacted disk array.
   * @returns The calculated checksum.
   */
  calculateChecksum(disk: number[]): number {
    return disk.reduce((checksum, block, position) => {
      if (block !== -1) {
        checksum += block * position;
      }
      return checksum;
    }, 0);
  }

  /**
   * Executes the disk fragmentation process.
   *
   * @param diskMap - The dense disk map string.
   * @returns The filesystem checksum after compaction.
   */
  processDisk(diskMap: string): number {
    const parsedDisk = this.parseDiskMap(diskMap);
    const compactedDisk = this.compactDisk(parsedDisk);
    return this.calculateChecksum(compactedDisk);
  }
}
