export const parseAndCalculate = (expression: string): number => {
    const getPriority = (op: string): number => {
      switch (op) {
        case "+":
        case "-":
          return 1;
        case "×":
        case "*":
        case "/":
          return 2;
        case "%":
          return 3;
        case "√":
          return 4;
        default:
          return 0;
      }
    };
  
    const applyOperation = (a: number, b: number, op: string): number => {
      if (a === undefined || b === undefined) {
        throw new Error("Недопустимое выражение");
      }
      switch (op) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "×":
        case "*":
          return a * b;
        case "/":
          if (b === 0) {
            throw new Error("Ошибка");
          }
          return a / b;
        case "%":
          return a- (a * b) / 100;
        case "√":
          return Math.sqrt(b);
        default:
          throw new Error("Недопустимая операция");
      }
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
      } else if(token === '%'){
        const op = operators.pop()!;
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
  