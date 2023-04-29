class MyMap<K, V> {
    private buckets: Array<Array<[K, V]>>;
    private size: number;

    constructor() {
        this.buckets = new Array(16).fill(null).map(() => []);
        this.size = 0;
    }

    // Hash function to calculate index of bucket
    private hash(key: K): number {
        const strKey = String(key);
        let hash = 0;
        for (let i = 0; i < strKey.length; i++) {
            hash += strKey.charCodeAt(i);
        }
        return hash % this.buckets.length;
    }

    // Set method to add key-value pair to map
    set(key: K, value: V): void {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];
        const elementIndex = bucket.findIndex(([storedKey]) => storedKey === key);
        if (elementIndex === -1) {
            bucket.push([key, value]);
            this.size++;
        } else {
            bucket[elementIndex][1] = value;
        }
    }

    // Get method to retrieve value by key
    get(key: K): V | undefined {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];
        const element = bucket.find(([storedKey]) => storedKey === key);
        return element ? element[1] : undefined;
    }

    // Delete method to remove key-value pair from map
    delete(key: K): boolean {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];
        const elementIndex = bucket.findIndex(([storedKey]) => storedKey === key);
        if (elementIndex === -1) {
            return false;
        }
        bucket.splice(elementIndex, 1);
        this.size--;
        return true;
    }

    // Clear method to remove all key-value pairs from map
    clear(): void {
        this.buckets = new Array(16).fill(null).map(() => []);
        this.size = 0;
    }

    // Size method to retrieve the number of key-value pairs in map
    get sizeOfMap(): number {
        return this.size;
    }
}
