// Zadanie 20: Kompleksowa transformacja z wieloma akumulatorami
// Napisz funkcję, która używa `reduce` do przekształcenia tablicy obiektów w obiekt zawierający wiele różnych agregacji i transformacji jednocześnie.

function complexTransform(employees) {
  return employees.reduce(
    (acc, curr, index, array) => {
      const { department, salary, years } = curr;

      // totalSalary
      acc.totalSalary += salary;

      // byDepartment
      if (!acc.byDepartment[department]) {
        acc.byDepartment[department] = [];
      }
      acc.byDepartment[department].push(curr);

      // departmentStats per department
      if (!acc.departmentStats[department]) {
        acc.departmentStats[department] = {
          count: 0,
          totalSalary: 0,
          avgSalary: 0,
        };
      }
      acc.departmentStats[department].count += 1;
      acc.departmentStats[department].totalSalary += salary;

      // seniorEmployees
      if (years >= 4) {
        acc.seniorEmployees.push(curr);
      }

      // rzeczy liczone na końcu
      if (index === array.length - 1) {
        acc.averageSalary = acc.totalSalary / array.length;

        Object.values(acc.departmentStats).forEach((stat) => {
          stat.avgSalary = stat.totalSalary / stat.count;
        });
      }

      return acc;
    },
    {
      byDepartment: {},
      totalSalary: 0,
      averageSalary: 0,
      departmentStats: {},
      seniorEmployees: [],
    }
  );
}
// Testy
const employees = [
  { name: "Alice", department: "Engineering", salary: 80000, years: 3 },
  { name: "Bob", department: "Engineering", salary: 90000, years: 5 },
  { name: "Charlie", department: "Marketing", salary: 70000, years: 2 },
  { name: "David", department: "Engineering", salary: 85000, years: 4 },
  { name: "Eve", department: "Marketing", salary: 75000, years: 3 },
];
const result = complexTransform(employees);

console.log("Wynik:", JSON.stringify(result, null, 2));

// Sprawdzenie podstawowych właściwości
const checks = [
  result.totalSalary === 400000,
  result.averageSalary === 80000,
  result.byDepartment?.Engineering?.length === 3,
  result.byDepartment?.Marketing?.length === 2,
  result.departmentStats?.Engineering?.count === 3,
  result.departmentStats?.Engineering?.totalSalary === 255000,
  result.departmentStats?.Marketing?.count === 2,
  result.seniorEmployees?.length === 2, // Bob i David
];

console.log("Testy:", checks.every((c) => c) ? "✅ PASS" : "❌ FAIL");
checks.forEach((check, i) => {
  console.log(`  Test ${i + 1}:`, check ? "✅" : "❌");
});
