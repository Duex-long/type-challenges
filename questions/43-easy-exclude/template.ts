type MyExclude<T, U> =  T extends U ? never : T

// T 和 U是独立的类型 有交集 但不全一样 
