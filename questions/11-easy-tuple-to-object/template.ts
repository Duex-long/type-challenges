type TupleToObject<T extends readonly any[]> = {
  [P in  T[number]] :  P ;
}

const test = ['tesla', 'model 3', 'model X', 'model Y'] as const

type resultTest = TupleToObject<typeof test>