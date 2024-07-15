export const parseAndCalculate = (expression: string): number => {
  // Функция для приоритета операций
  const getPriority = (op: string): number => {
    switch (op) {
      case "+":
      case "-":
        return 1;
      case "×":
      case "/":
        return 2;
      default:
        return 0;
    }
  };

  // Функция для выполнения операций
  const applyOperation = (a: number, b: number, op: string): number => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "/":
        return a / b;
      default:
        throw new Error("Недопустимая операция");
    }
  };

  // Разделение на токены (числа и операции)
  const tokens = expression.match(/(\d+(\.\d+)?|[+\-×/()])/g);
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
        const a = values.pop()!;
        values.push(applyOperation(a, b, op));
      }
      operators.pop(); // Убираем '('
    } else {
      while (
        operators.length &&
        getPriority(operators[operators.length - 1]) >= getPriority(token)
      ) {
        const op = operators.pop()!;
        const b = values.pop()!;
        const a = values.pop()!;
        values.push(applyOperation(a, b, op));
      }
      operators.push(token);
    }
  }

  while (operators.length) {
    const op = operators.pop()!;
    const b = values.pop()!;
    const a = values.pop()!;
    values.push(applyOperation(a, b, op));
  }

  if (values.length !== 1) throw new Error("Недопустимое выражение");

  return values[0];
};
