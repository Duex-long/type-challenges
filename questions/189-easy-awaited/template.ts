type MyAwaited<T> = T extends Promise<infer E> ? E extends Promise<any> ? MyAwaited<E> : E : any

// T 约束于 Promise<infer E> 就返回E