const mergeObj = (...obj) =>
  obj.reduce((acc, el) => {
    return { ...acc, ...el };
  }, {});

console.log(mergeObj({ name: "dol" }, { lname: "o" }, { age: 30 }));
