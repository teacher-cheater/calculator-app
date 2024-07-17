export const parseAndCalculate = (expression: string): number => {
  const priorities: { [key: string]: number } = {
    "+": 1,
    "-": 1,
    "×": 2,
    "*": 2,
    "/": 2,
    "%": 3,
    "√": 4,
    // "^": 4, - для дальнейшего расширения + логика
    // "log": 4, - для дальнейшего расширения + логика
  };

  const operations: { [key: string]: (a: number, b: number) => number } = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "×": (a, b) => a * b,
    "*": (a, b) => a * b,
    "/": (a, b) => {
      if (b === 0) throw new Error("Ошибка");
      return a / b;
    },
    "%": (a, b) => a - (a * b) / 100,
    "√": (_, b) => Math.sqrt(b),
    // "^": (a, b) => a ** b, - для дальнейшего расширения + логика
    // "log": (_, b) => Math.log10(b), - для дальнейшего расширения + логика
  };

  const getPriority = (op: string): number => priorities[op] ?? 0;

  const applyOperation = (
    a: number | undefined,
    b: number | undefined,
    op: string
  ): number => {
    if (a === undefined || b === undefined) {
      throw new Error("Недопустимое выражение");
    }
    const operation = operations[op];
    if (!operation) throw new Error("Недопустимая операция");
    return operation(a, b);
  };

  const tokens = expression.match(/(\d+(\.\d+)?|[+\-×*/()%√])/g);
  if (!tokens) throw new Error("Недопустимое выражение");
  const values: number[] = [];
  const operators: string[] = [];

  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      values.push(Number(token));
    } else if (token === "(") {
      operators.push(token);
    } else if (token === ")") {
      while (operators.length && operators[operators.length - 1] !== "(") {
        const op = operators.pop()!;
        const b = values.pop()!;
        const a = op === "√" ? 0 : values.pop()!;
        values.push(applyOperation(a, b, op));
      }
      operators.pop();
    } else if (token === "%") {
      operators.pop()!;
      const a = values.pop()!;
      const b = values.pop()!;
      values.push(applyOperation(b, a, token));
    } else {
      while (
        operators.length &&
        getPriority(operators[operators.length - 1]) >= getPriority(token)
      ) {
        const op = operators.pop()!;
        const b = values.pop()!;
        const a = op === "√" ? 0 : values.pop()!;
        values.push(applyOperation(a, b, op));
      }
      operators.push(token);
    }
  }

  while (operators.length) {
    const op = operators.pop()!;
    const b = values.pop()!;
    const a = op === "√" ? 0 : values.pop()!;
    values.push(applyOperation(a, b, op));
  }

  if (values.length !== 1) throw new Error("Недопустимое выражение");
  return values[0];
};
