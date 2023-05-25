function cloneObject(obj) {
    let clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        clone[key] = cloneObject(obj[key]);
      } else {
        clone[key] = obj[key];
      }
    }
    return clone;
  }

  let originalObj = {
    a: 1,
    b: "two",
    c: {
      x: 3,
      y: [4, 5, 6],
      z: {
        p: "seven",
        q: 8
      }
    }
  };
  
  let clonedObj = cloneObject(originalObj);
  console.log(clonedObj);